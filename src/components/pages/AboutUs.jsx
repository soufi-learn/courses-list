import aboutUsImage from "../../assets/images/about-us-img.jpg";
const AboutUs = () => {
  return (
    <div className="px-4 mt-8 dark:text-white text-center">
      <h2 className="mb-5">
        <span className="dark:text-blue-300 text-blue-400">
          تحسین صوفی زاده
        </span>{" "}
        هستم
      </h2>
      <h4>مدرس و برنامه نویس فرانت اند</h4>
      <hr className="my-5" />
      <ul>
        <li className="py-1">۴ سال سابقه برنامه نویسی بصورت خودآموز</li>
        <li className="py-1">۲ سال سابقه تدریس فرانت اند بصورت حرفه ای</li>
      </ul>
      <img
        src={aboutUsImage}
        alt="tahsin soufizade"
        className="rounded-full w-4/6 border-2 border-blue-400 shadow-lg mx-auto mt-10 md:w-1/2 lg:w-1/3 xl:w-1/4"
      />
    </div>
  );
};

export default AboutUs;
