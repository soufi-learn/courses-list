import { useFormik } from "formik";

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

const onSubmit = (values) => {
  fetch("http://localhost:8080/otp/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      phone: values.phone,
    }),
  })
    .then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          const verifyCode = data.verifyCode;
          alert(verifyCode);
        });
      } else {
        return response.json().then((errorData) => {
          throw errorData.message || "مشکلی پیش آمده! لطفا بعدا تلاش کنید";
        });
      }
    })
    // when we encounter error in sending phone number to API
    .catch((error) => {
      alert(error.message);
    });
};

const RegisterForm = () => {
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  });

  return (
    <div className="flex flex-col justify-center px-4">
      <div className="p-4 w-full sm:w-[390px] mx-auto bg-slate-50 border rounded-lg mt-[3rem]">
        <div className="py-6">
          <h2 className="text-[#BABECC] text-4xl font-bold text-center mb-6">
            فرم ورود
          </h2>
          <p className="text-slate-500">لطفا شماره موبایل خود را وارد کنید</p>
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
