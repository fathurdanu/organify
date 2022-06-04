import React, { useEffect } from "react";
import OrderTable from "../../components/OrderTable";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getOrdersByUserId } from "../../actions/shoppingAction";
const OrdersPage = () => {
  const { action, status, data } = useSelector(
    (state) => state.shoppingReducer
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getOrdersByUserId());
  }, []);

  useEffect(() => {
    console.log(action, "||", status, "||", data, "||");
  }, [status]);

  return (
    <div className="py-3 bg-white">
      <h1 className="font-semibold text-center text-lg">Your Orders</h1>
      <div className="p-3">
        <div className="flex flex-wrap space-x-2 rounded w-full">
          <button
            className="hover:bg-lightColor hover:text-darkColor w-36 p-1 text-lg rounded-md bg-darkColor text-lightColor font-semibold"
            onClick={() => {
              navigate(`/user/orders/unpaid`);
            }}
          >
            Unpaid
          </button>

          <button
            className="hover:bg-lightColor hover:text-darkColor w-40 p-2 text-lg rounded-md bg-darkColor text-lightColor font-semibold"
            onClick={() => {
              navigate(`/user/orders/ready`);
            }}
          >
            Ready to Collect
          </button>

          <button
            className="hover:bg-lightColor hover:text-darkColor w-36 p-2 text-lg rounded-md bg-darkColor text-lightColor font-semibold"
            onClick={() => {
              navigate(`/user/orders/cancelled`);
            }}
          >
            Cancelled
          </button>
        </div>
      </div>
      <div className="p-5 border border-1">
        {action === "GET_ORDERS_BY_USER_ID" && status === "data" ? (
          <OrderTable data={data} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default OrdersPage;
