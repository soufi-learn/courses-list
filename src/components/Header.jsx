import { Link } from "react-router-dom";
import loginSvg from "../assets/icons/login.svg";
import { HiOutlineSun } from "react-icons/hi";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-10 py-4 m-4 rounded-lg bg-slate-900">
      <nav>
        <ul className="flex gap-6">
          <li>
            <Link to="/" className="transition-all hover:text-indigo-300">
              صفحه اصلی
            </Link>
          </li>
          <li>
            <Link to="courses" className="transition-all hover:text-indigo-300">
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

      <div className="flex gap-6 ">
        <button className="text-2xl flex w-10 h-10 rounded-full bg-slate-600 items-center justify-center">
          <HiOutlineSun />
        </button>

        <Link
          to="login"
          className="flex gap-2 bg-indigo-200 hover:bg-indigo-100 py-2 px-4 rounded-md text-indigo-800 font-bold items-center"
        >
          <img src={loginSvg} alt="login" />
          ورود
        </Link>
      </div>
    </div>
  );
};

export default Header;
