import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import loginDarkSvg from "../assets/icons/login-dark.svg";
import loginLightSvg from "../assets/icons/login-light.svg";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="flex items-center justify-between px-10 py-4 m-4 transition-all rounded-lg bg-slate-200 dark:bg-slate-900">
      <nav>
        <ul className="md:static md:flex-row md:h-auto fixed top-0 right-0 flex flex-col items-center justify-center w-full h-screen gap-6 font-bold text-white md:text-black backdrop-blur-[8px] bg-slate-900/85 dark:text-white dark:font-medium md:bg-transparent">
          <li>
            <Link to="/" className="transition-all hover:dark:text-indigo-300">
              صفحه اصلی
            </Link>
          </li>
          <li>
            <Link
              to="courses"
              className="transition-all hover:dark:text-indigo-300"
            >
              دوره ها
            </Link>
          </li>
          <li>
            <Link
              to="about-us"
              className="transition-all hover:dark:text-indigo-300"
            >
              درباره ما
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex gap-6 ">
        <button
          className="flex items-center justify-center w-10 h-10 text-2xl text-white rounded-full bg-slate-600"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
        </button>

        <Link
          to="login"
          className="flex items-center gap-2 px-4 py-2 font-bold text-indigo-800 bg-indigo-200 rounded-md dark:bg-indigo-500 dark:text-white dark:hover:bg-indigo-600 hover:bg-indigo-300/50"
        >
          {isDarkMode ? (
            <img src={loginDarkSvg} alt="dark login" />
          ) : (
            <img src={loginLightSvg} alt="light login" />
          )}
          ورود
        </Link>
      </div>
    </div>
  );
};

export default Header;
