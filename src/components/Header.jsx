import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import loginDarkSvg from "../assets/icons/login-dark.svg";
import loginLightSvg from "../assets/icons/login-light.svg";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };
  

  return (
    <div className="flex items-center justify-between px-4 py-4 m-4 transition-all rounded-lg md:px-10 bg-slate-200 dark:bg-slate-900">
      <button
        className="md:hidden"
        onClick={() => setIsMenuOpen((prevState) => !prevState)}
      >
        <FaBarsStaggered className="text-2xl dark:text-white" />
      </button>
      <nav>
        <ul
          className={`md:static  z-10 md:flex-row md:h-auto fixed top-0 transition-all duration-500 flex flex-col items-center pt-36 md:pt-0 w-full h-screen gap-4 md:gap-6 font-bold text-white md:text-black backdrop-blur-[8px] bg-slate-900/85 dark:text-white dark:font-medium md:bg-transparent ${
            isMenuOpen ? "right-0" : "-right-full"
          }`}
        >
          <button
            className="absolute text-2xl top-10 right-8 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaTimes />
          </button>
          <li className="w-full md:w-auto">
            <Link
              to="/"
              className="block p-3 text-center transition-all border-y bg-slate-900/85 hover:bg-black/50 md:bg-transparent md:hover:bg-transparent md:border-none md:p-0 md:inline hover:dark:text-indigo-300"
              onClick={handleLinkClick}
            >
              صفحه اصلی
            </Link>
          </li>
          <li className="w-full md:w-auto">
            <Link
              to="courses"
              className="block p-3 text-center transition-all border-y bg-slate-900/85 hover:bg-black/50 md:bg-transparent md:hover:bg-transparent md:border-none md:p-0 md:inline hover:dark:text-indigo-300"
              onClick={handleLinkClick}
            >
              دوره ها
            </Link>
          </li>
          <li className="w-full md:w-auto">
            <Link
              to="about-us"
              className="block p-3 text-center transition-all border-y bg-slate-900/85 hover:bg-black/50 md:bg-transparent md:hover:bg-transparent md:border-none md:p-0 md:inline hover:dark:text-indigo-300"
              onClick={handleLinkClick}
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
