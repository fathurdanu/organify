import React from "react";
import { useNavigate,Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import logo from "../assets/images/logo.png"

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-darkColor h-auto">
        <div className="container flex py-3 mx-auto">
          <div className="w-2/12 lg:h-20 flex justify-center items-center">
            <Link to="/user/home" className="text-2xl text-white font-semibold">
              <img className="h-20" src={logo} />
            </Link>
          </div>
          <div className="w-4/12 flex justify-center items-center">
            <input
              className="rounded  p-2 w-3/5"
              placeholder="Search"
            ></input>
            <button className="ml-1 p-3 rounded bg-white text-darkColor hover:bg-midColor hover:text-white">
              <FaSearch />
            </button>
          </div>

          <div
            class="w-4/12 flex justify-center items-center"
          >
            <div class="flex flex-col lg:flex-row lg:space-x-8 lg:text-sm lg:font-medium text-lightColor">
              <Link
                to="#"
                class="inline-block rounded hover:text-white text-lg"
                aria-current="page"
              >
                Home
              </Link>

              <Link
                to="#"
                class="inline-block border-b hover:text-white md:border-0 text-lg "
              >
                About
              </Link>

              <Link
                to="#"
                class="inline-block border-b  hover:text-white md:border-0 text-lg"
              >
                Products
              </Link>

              <Link
                to="#"
                class="inline-block border-b  hover:text-white md:border-0 text-lg"
              >
                Contact
              </Link>

            </div>
          </div>

          <div className="w-2/12 flex justify-center items-center">
            <div className=" flex flex-col justify-center md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium text-lightColor">
              <Link
                to="/login"
                class="text-3xl hover:text-white md:inline sm:block py-2"
              >
                <MdLogout />
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Header;
