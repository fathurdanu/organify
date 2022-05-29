import React from "react";
import { useNavigate } from "react-router-dom";
import { BiPencil, BiLocationPlus } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const ProfileCMS = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div class="grid md:grid-cols-12 sm:grid-cols-1">
        <div class="md:col-span-6 sm:col-span-12 sm:min-h-screen mx-auto">
          <div class="flex">
            <h1 class="text-xl font-semibold pt-10 pb-5">Store Profile</h1>
            <div class="pt-10 pl-48">
              <button
                class="bg-accentColor text-black rounded px-2 py-1 hover:bg-black hover:text-accentColor"
                onClick={() => navigate("/cms/editProfile")}
              >
                <div class="flex">
                  <BiPencil class="mt-1 mr-1" />
                  <h1 class="text-sm font-semibold">Edit</h1>
                </div>
              </button>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden">
            <img
              class="w-full"
              src="https://images.pexels.com/photos/1508666/pexels-photo-1508666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Sunset in the mountains"
            />

            <div class="px-6">
              <div class="font-bold text-xl my-2">
                Sheffield Organic Growers
              </div>
              <p class="text-gray-700 text-md my-3">Shop Account</p>
              <p class="text-gray-700 text-md my-3">
                Welcome to Sheffield Organic Growers. We are four independent
                organic growers, on the outskirts of Sheffield.
              </p>
              <div class="flex py-1">
                <BiLocationPlus class="mt-1 mr-3" size={30} />
                <p class="text-gray-500 text-sm">
                  Hazlehurst Ln, Lightwood Ln, Sheffield S8 8BG, United Kingdom
                </p>
              </div>
              <div class="flex py-1">
                <BsTelephone class="mt-1 mr-3" size={25} />
                <p class="text-gray-500 text-sm mt-1">+44 1234567890</p>
              </div>
              <div class="flex py-1">
                <AiOutlineMail class="mt-1 mr-3" size={25} />
                <p class="text-gray-500 text-sm mt-1">
                  vegbagscheme@sheffieldorganicgrowers.co.uk
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="border-r w-5 border-gray-300 m-5" />
        <div class=" md:col-span-5 sm:col-span-12 overflow-scroll no-scrollbar p-5">
          <h1 class="text-xl font-semibold pt-10 pb-5 text-center">
            Store Description
          </h1>
          <div>
            <ul>
              <li>
                <h1 class="text-lg font-semibold pb-2">Overview</h1>
                <p class="text-md pb-4">
                  Welcome to Sheffield Organic Growers. We are four independent
                  organic growers, on the outskirts of Sheffield. Growing a
                  range of vegetables, fruit and herbs, we sell through
                  independent grocers and veg bag schemes all based in the city
                  of Sheffield. Please note we are not open to the public.
                  Please email vegbagscheme@sheffieldorganicgrowers.co.uk for
                  all inquiries.
                </p>
              </li>
              <li>
                <h1 class="text-lg font-semibold pb-2">Name</h1>
                <p class="text-md pb-4">Sheffield Organic Growers</p>
              </li>
              <li>
                <h1 class="text-lg font-semibold pb-2">Email</h1>
                <p class="text-md pb-4">
                  vegbagscheme@sheffieldorganicgrowers.co.uk
                </p>
              </li>
              <li>
                <h1 class="text-lg font-semibold pb-2">Phone</h1>
                <p class="text-md pb-4">+44 1234567890</p>
              </li>
              <li>
                <h1 class="text-lg font-semibold pb-2">Address</h1>
                <p class="text-md pb-4">
                  Hazlehurst Ln, Lightwood Ln, Sheffield S8 8BG, United Kingdom
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCMS;
