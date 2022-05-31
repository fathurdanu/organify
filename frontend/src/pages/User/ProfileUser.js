import React from "react";
import { useNavigate } from "react-router-dom";
import { BiPencil, BiLocationPlus } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const ProfileUser = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex">
        <div className="h-screen w-2/4 bg-white">
          <div className="max-w-sm rounded overflow-hidden p-3 justify-center shadow-lg bg-white">
            <img
              className="w-full"
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="Sunset in the mountains"
            />

            <div className="px-6">
              <div className="font-bold text-xl my-2">Rakha Naufal Akbar Fikri</div>
              <p className="text-gray-700 text-md my-3">Buyer Account</p>
              <div className="flex py-1">
                <BiLocationPlus className="mt-1 mr-3" size={30} />
                <p className="text-gray-500 text-sm">
                  Hazlehurst Ln, Lightwood Ln, Sheffield S8 8BG, United Kingdom
                </p>
              </div>
              <div className="flex py-1">
                <BsTelephone className="mt-1 mr-3" size={25} />
                <p className="text-gray-500 text-sm mt-1">+44 1234567890</p>
              </div>
              <div className="flex py-1">
                <AiOutlineMail className="mt-1 mr-3" size={25} />
                <p className="text-gray-500 text-sm mt-1">rnaufalaf@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-screen w-full bg-white">
          <div className="p-3">
            <ul>
              <li>
                <h1 className="text-lg font-semibold pb-2">Name</h1>
                <p className="text-md pb-4">Rakha Naufal Akbar Fikri</p>
              </li>
              <li>
                <h1 className="text-lg font-semibold pb-2">Gender</h1>
                <p className="text-md pb-4">Male</p>
              </li>
              <li>
                <h1 className="text-lg font-semibold pb-2">Email</h1>
                <p className="text-md pb-4">rnaufalaf@gmail.com</p>
              </li>
              <li>
                <h1 className="text-lg font-semibold pb-2">Birth Date</h1>
                <p className="text-md pb-4">14/11/1998</p>
              </li>
              <li>
                <h1 className="text-lg font-semibold pb-2">Address</h1>
                <p className="text-md pb-4">
                  Hazlehurst Ln, Lightwood Ln, Sheffield S8 8BG, United Kingdom
                </p>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-accentColor text-black rounded p-2 mr-3 hover:bg-black hover:text-accentColor"
              onClick={() => navigate("/user/edit")}
            >
              <div className="flex">
                <BiPencil className="mt-1 mr-1" />
                <h1 className="text-md font-semibold">Edit</h1>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
