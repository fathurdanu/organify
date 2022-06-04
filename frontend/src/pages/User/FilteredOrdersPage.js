import React, { useEffect } from "react";
import OrderTable from "../../components/OrderTable";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getOrdersByUserId } from "../../actions/shoppingAction";

const FilteredOrdersPage = () => {
  const { action, status, data } = useSelector(
    (state) => state.shoppingReducer
  );
  const dispatch = useDispatch();

  const { query } = useParams();
  console.log(query);

  useEffect(() => {
    dispatch(getOrdersByUserId());
  }, []);

  useEffect(() => {
    console.log(action, "||", status, "||", data, "||");
  }, [status]);

  return (
    <div className="py-3 bg-white">
      <h1 className="font-semibold text-center text-lg py-3">Your Orders</h1>
      <div className="p-5 border border-1">
        {action === "GET_ORDERS_BY_USER_ID" && status === "data" ? (
          <OrderTable
            data={data.filter((order) => order.status.includes(query))}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default FilteredOrdersPage;
