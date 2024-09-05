const CourseCard = ({ product }) => {
  const { name, imageUrl, price } = product;

  return (
    <div className="max-w-sm overflow-hidden rounded shadow-lg bg-slate-900">
      <img
        className="w-full h-[220px] object-cover"
        src={imageUrl}
        alt="Sunset in the mountains"
      />
      <div className="px-4 pt-4">
        <div className="mb-2 text-xl font-bold">{name}</div>
        <p className="text-base text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>

        {price === 0 ? null : (
          <>
            <hr className="my-3" />
            <div>
              <p>قیمت: {price.toLocaleString("fa-IR")} تومان</p>
            </div>
          </>
        )}
      </div>

      <div className="flex justify-between gap-4 p-4">
        <button className="flex-1 px-4 py-2 transition-all bg-indigo-700 rounded-md hover:bg-indigo-600">
          ثبت نام
        </button>
        <button className="flex-1 px-4 py-2 transition-all rounded-md bg-slate-700 hover:bg-slate-600">
          مشاهده دوره
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
