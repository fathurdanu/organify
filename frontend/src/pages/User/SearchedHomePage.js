import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CarouselComponent from "../../components/CarouselComponent";
import ProductFilter from "../../components/ProductFilter";
import CardContainerUser from "../../components/CardContainerUser";

import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../actions/cmsActions";

const SearchedHomePage = () => {
  const { action, status, data } = useSelector((state) => state.cmsReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { query } = useParams();

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
        <div className="py-3">
          <ProductFilter />
        </div>
      </div>
      <div className="overflow-scroll max-h-screen py-5 no-scrollbar">
        {action === "GET_ALL_PRODUCTS" &&
        status === "data" &&
        (query === "fruit" || query === "vegetable") ? (
          <CardContainerUser
            data={data.filter((product) => product.category.includes(query))}
          />
        ) : action === "GET_ALL_PRODUCTS" && status === "data" ? (
          <CardContainerUser
            data={data.filter((product) =>
              product.name.toLowerCase().includes(query.toLowerCase())
            )}
          />
        ) : (
          "loading"
        )}
      </div>
    </div>
  );
};

export default SearchedHomePage;
