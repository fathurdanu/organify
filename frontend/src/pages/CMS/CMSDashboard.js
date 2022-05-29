import React from "react";
import { useNavigate } from "react-router-dom";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import CardContainer from "../../components/CardContainer";
import CategoryCard from "../../components/CategoryCard";

const CMSDashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 class="text-xl font-bold py-3">Welcome, Admin!</h1>
      <div class="flex py-2">
        <h2 class="flex flex-col text-lg font-semibold py-2">Your Products</h2>
        <div class="flex absolute right-40 top-5">
          <input class="rounded mt-6 p-2 w-full" placeholder="Search"></input>
          <button class="ml-1 mt-6 p-3 rounded bg-white text-darkColor hover:bg-midColor hover:text-white">
            <FaSearch />
          </button>
        </div>
      </div>
      <hr />
      <div class="p-3">
        <CategoryCard />
      </div>
      <div class="overflow-scroll max-h-screen py-5 no-scrollbar">
        <CardContainer />
      </div>
      <div class="fixed right-20 bottom-8">
        <button onClick={() => navigate("/cms/add")}>
          <BsFillPlusCircleFill size={50} class="text-darkColor" />
        </button>
      </div>
    </div>
  );
};

export default CMSDashboard;
