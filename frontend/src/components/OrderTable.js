import React from "react";
import { useNavigate, Link } from "react-router-dom";

const OrderTable = (props) => {
  const navigate = useNavigate();
  const data = props.data;
  return (
    <div>
      <table className="w-full text-sm lg:text-base" cellSpacing="0">
        <thead>
          <tr className="h-12 uppercase">
            <th className="text-left">No</th>
            <th className="text-left">Transaction</th>
            <th className="lg:text-right text-left pl-5 lg:pl-0">
              <span className="lg:hidden" title="Quantity">
                Date
              </span>
              <span className="hidden lg:inline">Order Date</span>
            </th>
            <th className="lg:hidden text-right md:table-cell">Price</th>
            <th className="text-right">Total price</th>
            <th className="lg:hidden text-right md:table-cell">Status</th>
            <th className="text-right">Order Status</th>
          </tr>
        </thead>
        <tbody>
          {data
            ? data.map((order, index) => {
                return (
                  <tr
                    className="border"
                    key={index}
                    onClick={() => navigate("/user/orderDetail/" + order.id)}
                  >
                    <td className="hidden pb-4 md:table-cell p-2">
                      <Link to="#">
                        <p className="md:table-cell">{index + 1}</p>
                      </Link>
                    </td>
                    {order.status === "unpaid" ? (
                      <td className="text-left md:table-cell pb-3 p-2">
                        <span className="text-sm lg:text-base font-bold text-darkColor ">
                          UNPAID
                        </span>
                      </td>
                    ) : order.status === "ready to collect" ? (
                      <td className="text-left md:table-cell pb-3 p-2">
                        <span className="text-sm lg:text-base font-bold text-darkColor ">
                          READY TO COLLECT
                        </span>
                      </td>
                    ) : order.status === "cancelled" ? (
                      <td className="text-left md:table-cell pb-3 p-2">
                        <span className="text-sm lg:text-base font-bold text-darkColor ">
                          CANCELLED
                        </span>
                      </td>
                    ) : (
                      <></>
                    )}
                    <td className="text-right md:table-cell pb-3">
                      <span className="text-sm lg:text-base font-medium">
                        {String(order.createdAt).slice(0, 10)}
                      </span>
                    </td>
                    <td className="text-right md:table-cell pb-3">
                      <span className="text-sm lg:text-base font-medium">
                        {order.totalDue}
                      </span>
                    </td>
                    {order.status !== null ? (
                      <td className="text-right md:table-cell pb-3 p-2">
                        <span className="text-sm lg:text-base font-bold text-darkColor ">
                          {order.status.toUpperCase()}
                        </span>
                      </td>
                    ) : (
                      <td className="text-right md:table-cell pb-3 p-2">
                        <span className="text-sm lg:text-base font-bold text-darkColor ">
                          UNPAID
                        </span>
                      </td>
                    )}
                  </tr>
                );
              })
            : console.log(data)}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
