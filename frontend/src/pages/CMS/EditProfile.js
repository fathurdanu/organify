import React from "react";
import { BiPencil } from "react-icons/bi";

function CMSProfile() {
  return (
    <div class="overflow-scroll max-h-screen py-5 no-scrollbar">
      <div className="mx-auto lg:w-2/5 md:w-3/5 sm:w-96 bg-white rounded-md">
        <div className="p-5">
          <div className="py-4 text-5xl font-bold text-darkColor text-center">
            Edit Profile
          </div>
          <hr className="border-green-800 mx-5" />
          <div className="px-5 py-5">
            <div className="overflow-x-scroll flex space-x-8">
              <div class="mx-auto my-5 w-40 h-40 bg-white border-4 border-darkColor relative cursor-pointer rounded-full">
                <img
                  class="mx-auto object-cover w-36 h-36 rounded-full"
                  src="https://media.istockphoto.com/photos/banana-bunch-picture-id173242750?b=1&k=20&m=173242750&s=170667a&w=0&h=oRhLWtbAiPOxFAWeo2xEeLzwmHHm8W1mtdNOS7Dddd4="
                  alt="Flower and sky"
                />
                <div class=" bg-darkColor rounded-full absolute top-0 left-0 px-2 py-2">
                  <div className="text-2xl text-lightColor">
                    <BiPencil />
                  </div>
                </div>
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
              Email
            </label>
            <input
              type="text"
              className="border hover:border-green-800 focus:border-darkColor p-2 rounded-md bg-lightColor w-full"
            ></input>
          </div>
          <div className="px-5 py-2">
            <label className="block text-darkColor text-lg font-bold pb-2">
              Password
            </label>
            <input
              type="password"
              className="border hover:border-green-800 focus:border-darkColor p-2 rounded-md bg-lightColor w-full"
            ></input>
          </div>
          <div className="px-5 py-2">
            <label className="block text-darkColor text-lg font-bold pb-2">
              Birth Date
            </label>
            <input
              type="date"
              className="border hover:border-green-800 focus:border-darkColor p-2 rounded-md bg-lightColor w-2/5"
            ></input>
          </div>
          <div className="px-5 py-2">
            <label className="block text-darkColor text-lg font-bold pb-2">
              Gender
            </label>
            <select
              className="border hover:border-green-800 focus:border-darkColor p-2 rounded-md bg-lightColor w-2/5"
              name="gender"
              id="gender"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="px-5 py-8">
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
    </div>
  );
}

export default CMSProfile;
