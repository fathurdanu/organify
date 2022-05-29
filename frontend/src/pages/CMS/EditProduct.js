import React from "react";
import { GiFruitBowl } from "react-icons/gi";
import { IoAddCircleOutline } from "react-icons/io5";
import { BiPencil } from "react-icons/bi";

function EditProduct() {
  const data = [1, 2, 3, 4];
  return (
    <div className="mx-auto lg:w-2/5 md:w-3/5 sm:w-96 bg-white rounded-md overflow-scroll max-h-screen py-5 no-scrollbar">
      <div className="p-5">
        <div className="py-4 text-5xl font-bold text-darkColor text-center">
          Edit Product
        </div>
        <hr className="border-green-800 mx-5" />
        <div className="px-5 py-5">
          <div className="overflow-x-scroll flex space-x-8">
            {data.map((product) => {
              return (
                <div class="flex-shrink-0 my-5 w-36 h-36 bg-white shadow-gray-600 relative overflow-hidden rounded-md shadow-md cursor-pointer">
                  <img
                    class="object-cover w-full"
                    src="https://media.istockphoto.com/photos/banana-bunch-picture-id173242750?b=1&k=20&m=173242750&s=170667a&w=0&h=oRhLWtbAiPOxFAWeo2xEeLzwmHHm8W1mtdNOS7Dddd4="
                    alt="Flower and sky"
                  />
                  <div class="absolute top-0 left-0 px-2 py-2">
                    <div className="text-2xl">
                      <BiPencil />
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="flex-shrink-0 my-5 w-36 h-36 bg-gray-100 shadow-gray-600 shadow-md text-gray-500 p-2 rounded-md cursor-pointer">
              <div className="text-2xl">
                <IoAddCircleOutline />
              </div>
              <div className="text-7xl">
                <GiFruitBowl className="m-auto" />
              </div>
              <p className="text-center">Tambah foto</p>
            </div>
          </div>
        </div>

        <div className="px-5 py-2">
          <label className="block text-darkColor text-lg font-bold pb-2">
            Name
          </label>
          <input
            type="text"
            className="border hover:border-green-800 focus:border-darkColor p-2 rounded-md bg-lightColor w-full"
          ></input>
        </div>
        <div className="px-5 py-2">
          <label className="block text-darkColor text-lg font-bold pb-2">
            Description
          </label>
          <textarea
            rows="4"
            className="border hover:border-green-800 focus:border-darkColor p-2 rounded-md bg-lightColor w-full"
          ></textarea>
        </div>
        <div className="px-5 py-2">
          <label className="block text-darkColor text-lg font-bold pb-2">
            Price
          </label>
          <input
            type="number"
            className="border hover:border-green-800 focus:border-darkColor p-2 rounded-md bg-lightColor w-full"
          ></input>
        </div>
        <div className="px-5 py-2">
          <label className="block text-darkColor text-lg font-bold pb-2">
            Stock
          </label>
          <input
            type="number"
            className="border hover:border-green-800 focus:border-darkColor p-2 rounded-md bg-lightColor w-full"
          ></input>
        </div>
        <div className="px-5 py-2">
          <label className="block text-darkColor text-lg font-bold pb-2">
            Expired Date
          </label>
          <input
            type="date"
            className="border hover:border-green-800 focus:border-darkColor p-2 rounded-md bg-lightColor w-2/5"
          ></input>
        </div>
        <div className="px-5 py-2">
          <label className="block text-darkColor text-lg font-bold pb-2">
            Weight
          </label>
          <input
            type="number"
            className="border hover:border-green-800 focus:border-darkColor p-2 rounded-md bg-lightColor w-full"
          ></input>
        </div>
        <div className="px-5 py-2">
          <label className="block text-darkColor text-lg font-bold pb-2">
            Category
          </label>
          <select
            className="border hover:border-green-800 focus:border-darkColor p-2 rounded-md bg-lightColor w-2/5"
            name="category"
            id="category"
          >
            <option value="fruit">Fruit</option>
            <option value="vegetable">Vegetable</option>
          </select>
        </div>
        <div className="px-5 py-2">
          <label className="block text-darkColor text-lg font-bold pb-2">
            Condition
          </label>
          <select
            className="border hover:border-green-800 focus:border-darkColor p-2 rounded-md bg-lightColor w-2/5"
            name="condition"
            id="condition"
          >
            <option value="ripe">Ripe</option>
            <option value="raw">Raw</option>
          </select>
        </div>
        <div className="px-5 py-5">
          <button
            className="text-2xl py-2 border text-lightColor hover:border-lightColor focus:border-lightColor bg-darkColor p-2 rounded-md w-full"
            name="condition"
            id="condition"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
