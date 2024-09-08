import CoursesList from "./CoursesList";
import headerImage from "../../assets/images/IMG_20240707_131854.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-10 px-4 mb-16 lg:px-20 lg:gap-0">
        <section className="w-full lg:w-1/2">
          <img src={headerImage} alt="soufi" className="w-5/6 mr-5 lg:-mr-20" />
        </section>
        <section className="w-full text-center lg:w-1/2">
          <h1 className="mb-6  font-dana-bold leading-[3.6rem] text-3xl dark:text-white">
            آموزش برنامه نویسی با حال خوب :){" "}
          </h1>
          <p className="text-xl dark:text-white">
            با صوفی لرن برنامه نویسی رو با انرژی مثبت و حال خوب یاد بگیر
          </p>

          <div className="flex items-center justify-center gap-4 mt-10">
            <Link
              to="courses"
              className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
            >
              مشاهده دوره ها
            </Link>
            <Link
              to="login"
              className="px-4 py-2 text-white rounded-md bg-slate-700 dark:bg-slate-700/50 dark:hover:bg-slate-600/50 hover:bg-slate-600"
            >
              ثبت نام
            </Link>
          </div>
        </section>
      </div>

      <CoursesList />
    </>
  );
};

export default HomePage;
