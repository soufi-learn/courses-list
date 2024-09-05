import { useState } from "react";
import ProductCard from "./ProductCard";
import img1 from "../assets/images/img-1.jpg";
import img2 from "../assets/images/img-2.jpg";
import img3 from "../assets/images/img-3.jpg";
import img4 from "../assets/images/img-4.jpg";

const ProductsList = () => {
  // State to toggle between free and paid products
  const [showFreeCourses, setShowFreeCourses] = useState(false);

  const products = [
    { name: "دوره خوره جاوااسکریپت", imageUrl: img1, price: 2180000 },
    { name: "دوره ریسپانسیو سازی", imageUrl: img2, price: 0 },
    { name: "دوره جامع جاوااسکریپت", imageUrl: img3, price: 2180000 },
    { name: "دوره sass", imageUrl: img4, price: 0 },
  ];

  // Filter products based on state
  const filteredCourses = products.filter((product) =>
    showFreeCourses ? product.price === 0 : product.price > 0
  );

  return (
    <div className="container px-8 mt-10">
      <div className="flex flex-wrap justify-between gap-8 mb-10">
        <h3>دوره های آموزشی صوفی لرن</h3>

        <div className="flex items-center gap-2 toggle-switch">
          <label className="relative inline-block w-16 h-8 cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={showFreeCourses}
              onChange={() => setShowFreeCourses((prevState) => !prevState)}
            />
            <span className="absolute inset-0 transition-all bg-gray-300 rounded-full peer-checked:bg-indigo-300"></span>
            <span className="absolute w-5 h-5 bg-white rounded-full top-1/2 left-[5px] transform -translate-y-1/2 transition-transform peer-checked:translate-x-[34px] peer-checked:bg-indigo-600"></span>
          </label>
          <span className="font-bold">دوره های رایگان</span>
        </div>
      </div>

      <div className="flex flex-wrap items-start gap-6">
        {filteredCourses.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
