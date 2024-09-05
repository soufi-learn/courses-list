import CoursesList from "./CoursesList";
import headerImage from "../../assets/images/IMG_20240707_131854.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
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

      <CoursesList />
    </>
  );
};

export default HomePage;
