import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const initialValues = {
  name: "",
  phone: "",
};

const validate = (values) => {
  const errors = {};

  const phoneRegex =
    /^(0|98)?([ ]|-|[()]){0,2}9[0-4|9]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}$/;

  if (!values.name) {
    errors.name = "یه اسمی وارد کن گلم";
  }

  if (!values.phone) {
    errors.phone = "شماره نمیدی پاره کنیم؟";
  } else if (!phoneRegex.test(values.phone)) {
    errors.phone = "مطمئنی شمارت درسته؟";
  }

  return errors;
};

const onSubmit = (values, navigate) => {
  const verifyCode = Math.floor(10000 + Math.random() * 90000);
  alert(verifyCode);
  navigate("/verify");
};

const RegisterForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values) => onSubmit(values, navigate),
  });

  return (
    <div className="flex flex-col justify-center px-4">
      <div className="px-4 w-full sm:w-[390px] mx-auto bg-slate-50 border rounded-lg mt-[3rem]">
        <div className="py-4">
          <h2 className="text-[#BABECC] text-4xl font-bold text-center mb-6">
            فرم ورود
          </h2>
          <p className="text-slate-500">اطلاعاتت رو وارد کن بلا 🥰</p>
        </div>

        <form className="relative" onSubmit={formik.handleSubmit}>
          {/* Phone number input  */}
          <div className="mb-3">
            <div>
              <input
                type="text"
                placeholder="نام"
                className="w-full px-4 py-3 mb-2 text-lg font-light text-right transition-all duration-500 border-0 rounded-lg outline-none bg-slate-100 shadow-custom-inset focus:shadow-custom-inset-hover text-slate-800 placeholder:text-slate-400 placeholder:text-[16px]"
                name="name"
                autoComplete="off"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />

              {/* error message */}
              <p className="mb-4 text-sm text-red-700 font-dana-medium">
                {formik.errors.name && formik.touched.name
                  ? formik.errors.name
                  : null}
              </p>
            </div>

            <div>
              <input
                type="text"
                placeholder="شماره موبایل"
                className="w-full px-4 py-3 mb-2 text-lg font-light text-right transition-all duration-500 border-0 rounded-lg outline-none bg-slate-100 shadow-custom-inset focus:shadow-custom-inset-hover text-slate-800 placeholder:text-slate-400 placeholder:text-[16px]"
                name="phone"
                autoComplete="off"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />

              {/* error message */}
              <p className="mb-4 text-sm text-red-700 font-dana-medium">
                {formik.errors.phone && formik.touched.phone
                  ? formik.errors.phone
                  : null}
              </p>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-3 font-bold text-white transition-all duration-200 ease-in-out bg-indigo-600 rounded-full shadow-lg cursor-pointer hover:shadow-md active:shadow-inner active:scale-95"
            >
              ارسال کد تایید
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
