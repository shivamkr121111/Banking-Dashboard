import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

export default function CategoryList() {
  const [Categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex my-3 items-center justify-between">
        <div className="text-[25px] font-bold">What's on your mind?</div>
        <div className="flex">
          <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
            <FaArrowLeft />
          </div>
          <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="flex">
        {Categories.map((cat, index) => {
          return (
            <div className="flex-grow" key={index}>
              {/* Replace with an actual image source if needed */}
              <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                <p className="text-sm">{cat.text}</p> {/* Display the fact */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
