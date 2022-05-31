import React from "react";
import { useNavigate } from "react-router-dom";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import CardContainerCMS from "../../components/CardContainerCMS";
import ProductFilter from "../../components/ProductFilter";

const CMSDashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-xl font-bold py-3">Welcome, Admin!</h1>
      <div className="flex py-2">
        <h2 className="flex flex-col text-lg font-semibold py-2">Your Products</h2>
        <div className="flex absolute right-40 top-5">
          <input className="rounded mt-6 p-2 w-full" placeholder="Search"></input>
          <button className="ml-1 mt-6 p-3 rounded bg-white text-darkColor hover:bg-midColor hover:text-white">
            <FaSearch />
          </button>
        </div>
      </div>
      <hr />
      <div className="p-3">
        <ProductFilter />
      </div>
      <div className="overflow-scroll max-h-screen py-5 no-scrollbar">
        <CardContainerCMS />
      </div>
      <div className="fixed right-20 bottom-8">
        <button onClick={() => navigate("/cms/add")}>
          <BsFillPlusCircleFill size={50} className="text-darkColor" />
        </button>
      </div>
    </div>
  );
};

export default CMSDashboard;
