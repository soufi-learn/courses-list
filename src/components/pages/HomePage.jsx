import CoursesList from "./CoursesList";
import headerImage from "../../assets/images/IMG_20240707_131854.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="px-4 lg:px-20 flex items-center flex-wrap gap-10 lg:gap-0 mb-16">
        <section className="lg:w-1/2 w-full">
          <img src={headerImage} alt="soufi" className="w-5/6 lg:-mr-20 mr-5" />
        </section>
        <section className="lg:w-1/2 text-center w-full">
          <h1 className="mb-6  font-dana-bold leading-[3.6rem] text-3xl">
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

      <CoursesList />
    </>
  );
};

export default HomePage;
