import { Link } from "react-router-dom";
import loginSvg from "../assets/icons/login.svg";
import headerImage from "../assets/images/IMG_20240707_131854.png";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center px-10 py-4 m-4 rounded-lg bg-slate-900">
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link to="/" className="transition-all hover:text-indigo-300">
                صفحه اصلی
              </Link>
            </li>
            <li>
              <Link
                to="courses"
                className="transition-all hover:text-indigo-300"
              >
                دوره ها
              </Link>
            </li>
            <li>
              <Link
                to="about-us"
                className="transition-all hover:text-indigo-300"
              >
                درباره ما
              </Link>
            </li>
          </ul>
        </nav>

        <Link
          to="login"
          className="flex gap-2 bg-indigo-200 hover:bg-indigo-100 py-2 px-4 rounded-md text-indigo-800 font-bold items-center"
        >
          <img src={loginSvg} alt="login" />
          ورود
        </Link>
      </div>

      <div className="px-20 flex items-center gap-10">
        <section className="w-1/2">
          <img src={headerImage} alt="soufi" className="w-5/6 -mr-20" />
        </section>
        <section className="w-1/2 text-center">
          <h1 className="mb-6  font-dana-bold">
            آموزش برنامه نویسی با حال خوب :){" "}
          </h1>
          <p className="text-xl">
            با صوفی لرن برنامه نویسی رو با انرژی مثبت و حال خوب یاد بگیر
          </p>

          <div className="flex gap-4 items-center justify-center mt-10">
            <Link
              to="courses"
              className="bg-indigo-600 hover:bg-indigo-700 py-2 px-4 rounded-md"
            >
              مشاهده دوره ها
            </Link>
            <Link
              to="login"
              className="bg-slate-700/50 py-2 px-4 rounded-md hover:bg-slate-600/50"
            >
              ثبت نام
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Header;
