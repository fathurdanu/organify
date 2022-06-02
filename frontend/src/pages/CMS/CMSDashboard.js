import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import CardContainerCMS from "../../components/CardContainerCMS";
import ProductFilter from "../../components/ProductFilter";

import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../actions/cmsActions";

const CMSDashboard = () => {
  const { action, status, data } = useSelector((state) => state.cmsReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const [query, setQuery] = useState("");

  return (
    <div>
      <h1 className="text-xl font-bold py-3">Welcome, Admin!</h1>
      <div className="flex py-2">
        <h2 className="flex flex-col text-lg font-semibold py-2">
          Your Products
        </h2>
        <div className="flex absolute right-40 top-5">
          <input
            className="rounded mt-6 p-2 w-full"
            placeholder="Search"
            onChange={(e) => setQuery(e.target.value)}
          ></input>
          <button
            className="ml-1 mt-6 p-3 rounded bg-white text-darkColor hover:bg-midColor hover:text-white"
            onClick={() => navigate(`/cms/dashboard/${query}`)}
          >
            <FaSearch />
          </button>
        </div>
      </div>
      <hr />
      <div className="p-3">
        <div className="flex flex-wrap space-x-2 p-3 bg-darkColor rounded w-fit">
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                id="toggleA"
                type="checkbox"
                className="sr-only"
                onChange={() => {
                  setQuery("buah");
                  navigate(`/cms/dashboard/${query}`);
                }}
              />
              <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
              <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
            </div>
            <div className="ml-3 text-lightColor font-medium">Fruits</div>
          </label>

          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                id="toggleB"
                type="checkbox"
                className="sr-only"
                onChange={() => {
                  setQuery("vegetable");
                  navigate(`/cms/dashboard/${query}`);
                }}
              />
              <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
              <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
            </div>
            <div className="ml-3 text-lightColor font-medium">Vegetables</div>
          </label>
        </div>
      </div>
      <div className="overflow-scroll max-h-screen py-5 no-scrollbar">
        {action === "GET_ALL_PRODUCTS" && status === "data" ? (
          <CardContainerCMS data={data} />
        ) : (
          "loading"
        )}
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
