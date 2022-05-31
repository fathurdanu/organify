import React from "react";
import OrderFilter from "../../components/OrderFilter";
import OrderTable from "../../components/OrderTable";
const OrdersPage = () => {
  return (
    <div className="py-3 bg-white">
      <h1 className="font-semibold text-center text-lg">Your Orders</h1>
      <div className="p-3">
        <OrderFilter />
      </div>
      <div className="p-5 border border-1">
        <OrderTable />
      </div>
    </div>
  );
};

export default OrdersPage;
