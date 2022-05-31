import React from "react";

const CategoryCard = () => {
  return (
    <div className="flex flex-wrap space-x-2 p-3 bg-darkColor rounded w-fit">
      <label className="flex items-center cursor-pointer">
        <div className="relative">
          <input id="toogleA" type="checkbox" className="sr-only" />
          <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
          <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
        </div>
        <div className="ml-3 text-lightColor font-medium">Fruits</div>
      </label>

      <label className="flex items-center cursor-pointer">
        <div className="relative">
          <input id="toogleB" type="checkbox" className="sr-only" />
          <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
          <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
        </div>
        <div className="ml-3 text-lightColor font-medium">Vegetables</div>
      </label>
    </div>
  );
};

export default CategoryCard;
