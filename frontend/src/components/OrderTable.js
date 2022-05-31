import React from "react";
import { useNavigate,Link } from "react-router-dom";

const OrderTable = () => {
  const navigate = useNavigate();
  return (
    <div>
      <table className="w-full text-sm lg:text-base" cellSpacing="0">
        <thead>
          <tr className="h-12 uppercase">
            <th className="text-left">No</th>
            <th className="text-left">Order Number</th>
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
          <tr className="border" onClick={() => navigate("/user/orderDetail")}>
            <td className="hidden pb-4 md:table-cell p-2">
              <Link to="#">
                <p className="md:table-cell">1</p>
              </Link>
            </td>
            <td>
              <Link to="#">
                <p className="mb-2 text-darkColor font-bold">ORG-1-20220530</p>
              </Link>
            </td>
            <td className="text-right md:table-cell pb-3">
              <span className="text-sm lg:text-base font-medium">30/05/2022</span>
            </td>
            <td className="text-right md:table-cell pb-3">
              <span className="text-sm lg:text-base font-medium">10000</span>
            </td>
            <td className="text-right md:table-cell pb-3 p-2">
              <span className="text-sm lg:text-base font-bold text-darkColor ">
                Paid
              </span>
            </td>
          </tr>
          <tr className="border border-1">
            <td className="hidden pb-4 md:table-cell p-2">
              <Link to="#">
                <p className="md:table-cell">2</p>
              </Link>
            </td>
            <td>
              <Link to="#">
                <p className="mb-2 text-darkColor font-bold">ORG-2-20220531</p>
              </Link>
            </td>
            <td className="text-right md:table-cell pb-3">
              <span className="text-sm lg:text-base font-medium">31/05/2022</span>
            </td>
            <td className="text-right md:table-cell pb-3">
              <span className="text-sm lg:text-base font-medium">40000</span>
            </td>
            <td className="text-right md:table-cell pb-3 p-2">
              <span className="text-sm lg:text-base font-bold text-darkColor">
                Paid
              </span>
            </td>
          </tr>
          <tr className="border border-1">
            <td className="hidden pb-4 md:table-cell p-2">
              <Link to="#">
                <p className="md:table-cell">2</p>
              </Link>
            </td>
            <td>
              <Link to="#">
                <p className="mb-2 text-darkColor font-bold">ORG-2-20220531</p>
              </Link>
            </td>
            <td className="text-right md:table-cell pb-3">
              <span className="text-sm lg:text-base font-medium">31/05/2022</span>
            </td>
            <td className="text-right md:table-cell pb-3">
              <span className="text-sm lg:text-base font-medium">40000</span>
            </td>
            <td className="text-right md:table-cell pb-3 p-2">
              <span className="text-sm lg:text-base font-bold text-darkColor">
                Paid
              </span>
            </td>
          </tr>
          <tr className="border border-1">
            <td className="hidden pb-4 md:table-cell p-2">
              <Link to="#">
                <p className="md:table-cell">2</p>
              </Link>
            </td>
            <td>
              <Link to="#">
                <p className="mb-2 text-darkColor font-bold">ORG-2-20220531</p>
              </Link>
            </td>
            <td className="text-right md:table-cell pb-3">
              <span className="text-sm lg:text-base font-medium">31/05/2022</span>
            </td>
            <td className="text-right md:table-cell pb-3">
              <span className="text-sm lg:text-base font-medium">40000</span>
            </td>
            <td className="text-right md:table-cell pb-3 p-2">
              <span className="text-sm lg:text-base font-bold text-darkColor">
                Paid
              </span>
            </td>
          </tr>
          <tr className="border border-1">
            <td className="hidden pb-4 md:table-cell p-2">
              <Link to="#">
                <p className="md:table-cell">2</p>
              </Link>
            </td>
            <td>
              <Link to="#">
                <p className="mb-2 text-darkColor font-bold">ORG-2-20220531</p>
              </Link>
            </td>
            <td className="text-right md:table-cell pb-3">
              <span className="text-sm lg:text-base font-medium">31/05/2022</span>
            </td>
            <td className="text-right md:table-cell pb-3">
              <span className="text-sm lg:text-base font-medium">40000</span>
            </td>
            <td className="text-right md:table-cell pb-3 p-2">
              <span className="text-sm lg:text-base font-bold text-darkColor">
                Paid
              </span>
            </td>
          </tr>
          <tr className="border border-1">
            <td className="hidden pb-4 md:table-cell p-2">
              <Link to="#">
                <p className="md:table-cell">2</p>
              </Link>
            </td>
            <td>
              <Link to="#">
                <p className="mb-2 text-darkColor font-bold">ORG-2-20220531</p>
              </Link>
            </td>
            <td className="text-right md:table-cell pb-3">
              <span className="text-sm lg:text-base font-medium">31/05/2022</span>
            </td>
            <td className="text-right md:table-cell pb-3">
              <span className="text-sm lg:text-base font-medium">40000</span>
            </td>
            <td className="text-right md:table-cell pb-3 p-2">
              <span className="text-sm lg:text-base font-bold text-darkColor">
                Paid
              </span>
            </td>
          </tr>
          <tr className="border border-1">
            <td className="hidden pb-4 md:table-cell p-2">
              <Link to="#">
                <p className="md:table-cell">2</p>
              </Link>
            </td>
            <td>
              <Link to="#">
                <p className="mb-2 text-darkColor font-bold">ORG-2-20220531</p>
              </Link>
            </td>
            <td className="text-right md:table-cell pb-3">
              <span className="text-sm lg:text-base font-medium">31/05/2022</span>
            </td>
            <td className="text-right md:table-cell pb-3">
              <span className="text-sm lg:text-base font-medium">40000</span>
            </td>
            <td className="text-right md:table-cell pb-3 p-2">
              <span className="text-sm lg:text-base font-bold text-darkColor">
                Paid
              </span>
            </td>
          </tr>
          <tr className="border border-1">
            <td className="hidden pb-4 md:table-cell p-2">
              <Link to="#">
                <p className="md:table-cell">2</p>
              </Link>
            </td>
            <td>
              <Link to="#">
                <p className="mb-2 text-darkColor font-bold">ORG-2-20220531</p>
              </Link>
            </td>
            <td className="text-right md:table-cell pb-3">
              <span className="text-sm lg:text-base font-medium">31/05/2022</span>
            </td>
            <td className="text-right md:table-cell pb-3">
              <span className="text-sm lg:text-base font-medium">40000</span>
            </td>
            <td className="text-right md:table-cell pb-3 p-2">
              <span className="text-sm lg:text-base font-bold text-darkColor">
                Paid
              </span>
            </td>
          </tr>
          <tr className="border border-1">
            <td className="hidden pb-4 md:table-cell p-2">
              <Link to="#">
                <p className="md:table-cell">2</p>
              </Link>
            </td>
            <td>
              <Link to="#">
                <p className="mb-2 text-darkColor font-bold">ORG-2-20220531</p>
              </Link>
            </td>
            <td className="text-right md:table-cell pb-3">
              <span className="text-sm lg:text-base font-medium">31/05/2022</span>
            </td>
            <td className="text-right md:table-cell pb-3">
              <span className="text-sm lg:text-base font-medium">40000</span>
            </td>
            <td className="text-right md:table-cell pb-3 p-2">
              <span className="text-sm lg:text-base font-bold text-darkColor">
                Paid
              </span>
            </td>
          </tr>
          <tr className="border border-1">
            <td className="hidden pb-4 md:table-cell p-2">
              <Link to="#">
                <p className="md:table-cell">2</p>
              </Link>
            </td>
            <td>
              <Link to="#">
                <p className="mb-2 text-darkColor font-bold">ORG-2-20220531</p>
              </Link>
            </td>
            <td className="text-right md:table-cell pb-3">
              <span className="text-sm lg:text-base font-medium">31/05/2022</span>
            </td>
            <td className="text-right md:table-cell pb-3">
              <span className="text-sm lg:text-base font-medium">40000</span>
            </td>
            <td className="text-right md:table-cell pb-3 p-2">
              <span className="text-sm lg:text-base font-bold text-darkColor">
                Paid
              </span>
            </td>
          </tr>
          <tr className="border border-1">
            <td className="hidden pb-4 md:table-cell p-2">
              <Link to="#">
                <p className="md:table-cell">2</p>
              </Link>
            </td>
            <td>
              <Link to="#">
                <p className="mb-2 text-darkColor font-bold">ORG-2-20220531</p>
              </Link>
            </td>
            <td className="text-right md:table-cell pb-3">
              <span className="text-sm lg:text-base font-medium">31/05/2022</span>
            </td>
            <td className="text-right md:table-cell pb-3">
              <span className="text-sm lg:text-base font-medium">40000</span>
            </td>
            <td className="text-right md:table-cell pb-3 p-2">
              <span className="text-sm lg:text-base font-bold text-darkColor">
                Paid
              </span>
            </td>
          </tr>
          <tr className="border border-1">
            <td className="hidden pb-4 md:table-cell p-2">
              <Link to="#">
                <p className="md:table-cell">2</p>
              </Link>
            </td>
            <td>
              <Link to="#">
                <p className="mb-2 text-darkColor font-bold">ORG-2-20220531</p>
              </Link>
            </td>
            <td className="text-right md:table-cell pb-3">
              <span className="text-sm lg:text-base font-medium">31/05/2022</span>
            </td>
            <td className="text-right md:table-cell pb-3">
              <span className="text-sm lg:text-base font-medium">40000</span>
            </td>
            <td className="text-right md:table-cell pb-3 p-2">
              <span className="text-sm lg:text-base font-bold text-darkColor">
                Paid
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
