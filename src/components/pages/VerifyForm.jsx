import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const initialValues = {
  code: "",
};

const validate = (values) => {
  const errors = {};

  if (!values.code) {
    errors.code = "نمیخای چیزی وارد کنی؟";
  } else if (values.code.length !== 5) {
    errors.code = "کد وارد شده باید ۵ رقم باشه";
  }

  return errors;
};

const onSubmit = (navigate) => {
  alert("ثبت نامت با موفقیت انجام شد دلبر 😍💙");
  navigate("/");
};

const VerifyForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: () => onSubmit(navigate),
  });

  return (
    <div className="flex flex-col items-center justify-center px-4 mt-24 ">
      <div className="p-4 w-full sm:w-[390px] mx-auto bg-slate-50 border rounded-lg">
        <div className="py-6">
          <h2 className="text-[#BABECC] text-4xl font-bold text-center mb-6">
            فرم ورود
          </h2>
          <p className="text-slate-500">کد ارسال شده را وارد کنید</p>
        </div>

        <form className="relative" onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <div>
              <input
                type="text"
                placeholder="کد ورود"
                className="w-full px-4 py-3 mb-2 text-lg font-light text-right transition-all duration-500 border-0 rounded-lg outline-none bg-slate-100 shadow-custom-inset focus:shadow-custom-inset-hover text-slate-800 placeholder:text-slate-400 placeholder:text-[16px]"
                name="code"
                autoComplete="off"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.code}
              />

              {/* error message */}
              <p className="mb-4 text-sm text-red-700 font-dana-medium">
                {formik.errors.code && formik.touched.code
                  ? formik.errors.code
                  : null}
              </p>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-3 font-bold text-white transition-all duration-200 ease-in-out bg-indigo-600 rounded-full shadow-lg cursor-pointer hover:shadow-md active:shadow-inner active:scale-95"
            >
              ورود
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifyForm;
