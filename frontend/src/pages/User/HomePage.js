import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CarouselComponent from "../../components/CarouselComponent";
import CardContainerUser from "../../components/CardContainerUser";

import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../actions/cmsActions";

const HomePage = () => {
  const { action, status, data } = useSelector((state) => state.cmsReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="mx-auto md:container">
      <div className="py-3">
        <CarouselComponent />
      </div>
      <div>
        <div>
          <h1 className="font-bold text-xl mt-3">
            Choose from these categories
          </h1>
        </div>
        <div className="p-3">
          <div className="flex flex-wrap space-x-2 p-3 bg-darkColor rounded w-fit">
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  id="toggleA"
                  type="checkbox"
                  className="sr-only"
                  onChange={() => {
                    navigate(`/user/home/fruit`);
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
                    navigate(`/user/home/vegetable`);
                  }}
                />
                <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
              </div>
              <div className="ml-3 text-lightColor font-medium">Vegetables</div>
            </label>
          </div>
        </div>
      </div>
      <div className="overflow-scroll max-h-screen py-5 no-scrollbar">
        {action === "GET_ALL_PRODUCTS" && status === "data" ? (
          <CardContainerUser data={data} />
        ) : (
          "loading"
        )}
      </div>
    </div>
  );
};

export default HomePage;