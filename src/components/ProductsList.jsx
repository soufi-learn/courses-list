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
    <div className="container mt-10">
      <div className="flex justify-between mb-10">
        <h3>دوره های آموزشی صوفی لرن</h3>

        <div className="flex items-center gap-4">
          <label className=" toggle-switch">
            <input
              type="checkbox"
              checked={showFreeCourses}
              onChange={() => setShowFreeCourses((prevState) => !prevState)}
            />
            <span className=" slider round"></span>
          </label>
          <span className="font-bold">دوره های رایگان</span>
        </div>
      </div>

      <div className="flex items-start gap-6">
        {filteredCourses.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
