import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BiPencil } from "react-icons/bi";
import {
  BsCurrencyDollar,
  BsBasketFill,
  BsFillStarFill,
  BsFillTrashFill,
} from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../actions/cmsActions";
import { addToCart, getCartByUserId, addViews } from "../../actions/shoppingAction";

import Swal from "sweetalert2";

const ProductDetailsUser = () => {
  const { action, status, data } = useSelector((state) => state.cmsReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const id = Number(useParams().id);
  const url = "http://localhost:3000";

  useEffect(() => {
    dispatch(addViews(id));
    dispatch(getProductById(id));
  }, []);

  async function inputQty() {
    const { value: qty } = await Swal.fire({
      title: "Input the desired quantity",
      input: "number",
      inputLabel: "Product Quantity",
      inputPlaceholder: "Enter qty",
      confirmButtonColor: "#0B4619",
    });

    if (qty) {
      dispatch(addToCart(
        {
          ProductId: id,
          qty: qty
        }
      )).then(() => {
        dispatch(getCartByUserId());
      })
    }
  }


  return (
    <div>
      <div className="grid md:grid-cols-12 sm:grid-cols-1">
        <div className="md:col-span-4 sm:col-span-12 sm:min-h-screen mx-auto ">
          <div className="flex px-5">
            <h1 className="text-lg font-semibold pt-10 pb-5">
              Product Details
            </h1>
          </div>
          <div className="max-w-sm px-5 rounded overflow-hidden">
            {/* <img
              className="w-full"
              src="data:image/jpeg;base64,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"
              alt="Sunset in the mountains"
            /> */}
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {action === "GET_PRODUCT_BY_ID" && data !== "loading"
                ? data.ProductImages.map((img, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <img src={`${url}/images/${img.filename}`}></img>
                    </SwiperSlide>
                  );
                })
                : "Loading"}
            </Swiper>
            <div className="px-6">
              <div className="font-bold text-xl my-2">{data.name}</div>
              <p className="text-gray-700 text-md my-3">{data.desc}</p>
              <div className="flex py-1">
                <BsCurrencyDollar className="mt-1 mr-3" size={20} />
                <p className="text-midColor font-semibold text-md pr-1">
                  {data.price}
                </p>
                <p>/ {data.weight} gr</p>
              </div>
              <div className="flex py-2">
                <BsBasketFill className="mr-3" size={20} />
                <p className="text-midColor font-semibold text-md pr-1">
                  {data.stock}
                </p>
                <p>in stock</p>
              </div>
              <div className="flex justify-center mt-2">
                <button
                  className="bg-darkColor text-lightColor p-2 font-semibold rounded-md"
                  onClick={() => inputQty()}
                >Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-r w-5 border-gray-300 m-5" />
        <div className="md:col-span-7 sm:col-span-12 overflow-scroll no-scrollbar">
          <div className="p-5">
            <h1 className="text-xl font-semibold pt-10 pb-5 text-center">
              Product Description
            </h1>
            <div>
              <ul>
                <li>
                  <h1 className="text-lg font-semibold pb-2">Description</h1>
                  <p className="text-md pb-4">{data.desc}</p>
                </li>
                <li>
                  <h1 className="text-lg font-semibold pb-2">Category</h1>
                  <p className="text-md pb-4">{data.category}</p>
                </li>
                <li>
                  <h1 className="text-lg font-semibold pb-2">Condition</h1>
                  <p className="text-md pb-4">{data.condition}</p>
                </li>
                <li>
                  <h1 className="text-lg font-semibold pb-2">Expiry Date</h1>
                  <p className="text-md pb-4">
                    {String(data.expire).slice(0, 10)}
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="p-5">
            <h1 className="text-xl font-semibold pt-5 pb-5 text-center">
              Analytics
            </h1>
            <div className="flex py-5">
              <div className="flex-row w-1/3">
                <div>
                  <h1 className="text-md font-semibold">Rating</h1>
                  <div className="flex py-1">
                    {data.rating !== 0 && data.rating !== null
                      ? [...Array(data.rating)].map((x, i) => (
                        <BsFillStarFill
                          key={i}
                          className="text-accentColor"
                          size={20}
                        />
                      ))
                      : "No ratings given"}
                  </div>
                </div>
              </div>
              <div className="flex-row w-1/3">
                <h1 className="text-md font-semibold">Views</h1>
                <h1 className="text-lg font-bold">{data.views}</h1>
              </div>
              <div className="flex-row w-1/3">
                <h1 className="text-md font-semibold">Total Sold</h1>
                <h1 className="text-lg font-bold">{data.totalSold}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsUser;