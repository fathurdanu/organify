import React from "react";
import { useNavigate } from "react-router-dom";
import { BiPencil, BiLocationPlus, BiLogOut } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const ProfileUser = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div class="flex">
        <div class="h-screen w-2/4">
          <div class="max-w-sm rounded overflow-hidden p-3 justify-center shadow-lg">
            <img
              class="w-full"
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="Sunset in the mountains"
            />

            <div class="px-6">
              <div class="font-bold text-xl my-2">Rakha Naufal Akbar Fikri</div>
              <p class="text-gray-700 text-md my-3">Buyer Account</p>
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
                <p class="text-gray-500 text-sm mt-1">rnaufalaf@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div class="h-screen w-full">
          <div class="p-3">
            <ul>
              <li>
                <h1 class="text-lg font-semibold pb-2">Name</h1>
                <p class="text-md pb-4">Rakha Naufal Akbar Fikri</p>
              </li>
              <li>
                <h1 class="text-lg font-semibold pb-2">Gender</h1>
                <p class="text-md pb-4">Male</p>
              </li>
              <li>
                <h1 class="text-lg font-semibold pb-2">Email</h1>
                <p class="text-md pb-4">rnaufalaf@gmail.com</p>
              </li>
              <li>
                <h1 class="text-lg font-semibold pb-2">Birth Date</h1>
                <p class="text-md pb-4">14/11/1998</p>
              </li>
              <li>
                <h1 class="text-lg font-semibold pb-2">Address</h1>
                <p class="text-md pb-4">
                  Hazlehurst Ln, Lightwood Ln, Sheffield S8 8BG, United Kingdom
                </p>
              </li>
            </ul>
          </div>
          <div class="flex justify-center">
            <button
              class="bg-accentColor text-black rounded p-2 mr-3 hover:bg-black hover:text-accentColor"
              onClick={() => navigate("/user/edit")}
            >
              <div class="flex">
                <BiPencil class="mt-1 mr-1" />
                <h1 class="text-md font-semibold">Edit</h1>
              </div>
            </button>
            <button
              class="bg-red-600 text-black rounded p-2 ml-3 hover:bg-black hover:text-red-600"
              onClick={() => navigate("/login")}
            >
              <div class="flex">
                <BiLogOut class="mt-1 mr-1" />
                <h1 class="text-md font-semibold">Logout</h1>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
