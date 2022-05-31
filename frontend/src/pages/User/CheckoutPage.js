import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../../components/Header";

const CheckoutPage = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto">
      <Header />
      <div className="w-full bg-white">
        <h1 className="text-xl text-center font-semibold py-3">Checkout</h1>
        <h2 className="text-lg text-left font-semibold px-24 py-3">Items Bought</h2>
        <hr className="mx-24" />
        <div className="px-24 py-3">
          <table className="w-full text-sm lg:text-base" cellspacing="0">
            <thead>
              <tr className="h-12 uppercase">
                <th className="hidden md:table-cell"></th>
                <th className="text-left">Product</th>
                <th className="lg:text-right text-left pl-5 lg:pl-0">
                  <span className="lg:hidden" title="Quantity">
                    Qtd
                  </span>
                  <span className="hidden lg:inline">Quantity</span>
                </th>
                <th className="hidden text-right md:table-cell">Unit price</th>
                <th className="text-right">Total price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="hidden pb-4 md:table-cell">
                  <Link to="#">
                    <img
                      src="https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      className="w-40 h-30 rounded"
                      alt="Thumbnail"
                    />
                  </Link>
                </td>
                <td>
                  <Link to="#">
                    <p className="mb-2 md:ml-4">Pisang Cavendish Organik</p>
                  </Link>
                </td>
                <td className="hidden text-right md:table-cell pb-3">
                  <span className="text-sm lg:text-base font-medium">5</span>
                </td>
                <td className="hidden text-right md:table-cell pb-3">
                  <span className="text-sm lg:text-base font-medium">10000</span>
                </td>
                <td className="text-right pb-3">
                  <span className="text-sm lg:text-base font-bold text-darkColor">
                    50000
                  </span>
                </td>
              </tr>
              <tr>
                <td className="hidden pb-4 md:table-cell">
                  <Link to="#">
                    <img
                      src="https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      className="w-40 h-30 rounded"
                      alt="Thumbnail"
                    />
                  </Link>
                </td>
                <td>
                  <Link to="#">
                    <p className="mb-2 md:ml-4">Apel Fuji Organik</p>
                  </Link>
                </td>
                <td className="hidden text-right md:table-cell pb-3">
                  <span className="text-sm lg:text-base font-medium">2</span>
                </td>
                <td className="hidden text-right md:table-cell pb-3">
                  <span className="text-sm lg:text-base font-medium">10000</span>
                </td>
                <td className="text-right pb-3">
                  <span className="text-sm lg:text-base font-bold text-darkColor">
                    20000
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <hr className="pb-6 mt-6" />
          <div className="flex px-2">
            <div className="w-2/3">
              <h1 className="font-semibold text-lg text-center">Buyer Details</h1>
              <div className="py-5">
                <table>
                  <tbody>
                    <tr>
                      <td className="hidden pb-4 md:table-cell">
                        <h1 className="font-semibold text-md">Name</h1>
                      </td>
                      <td>
                        <Link to="#">
                          <p className="mb-4 md:ml-4">Rakha Naufal Akbar Fikri</p>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="hidden pb-4 md:table-cell">
                        <h1 className="font-semibold text-md">Email</h1>
                      </td>
                      <td>
                        <Link to="#">
                          <p className="mb-4 md:ml-4">rnaufalaf@gmail.com</p>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="hidden pb-4 md:table-cell">
                        <h1 className="font-semibold text-md">Address</h1>
                      </td>
                      <td>
                        <Link to="#">
                          <p className="mb-4 md:ml-4">
                            Hazlehurst Ln, Lightwood Ln, Sheffield S8 8BG,
                            United Kingdom
                          </p>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="hidden pb-4 md:table-cell">
                        <h1 className="font-semibold text-md">Phone</h1>
                      </td>
                      <td>
                        <Link to="#">
                          <p className="mb-4 md:ml-4">+44 12345678</p>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="border border-1 mx-3" />
            <div className="w-1/3">
              <h1 className="font-semibold text-lg text-center">Subtotal</h1>
              <div className="py-5">
                <table align="center">
                  <tbody>
                    <tr>
                      <td className="hidden pb-4 md:table-cell">
                        <h1 className="font-semibold text-md">Price</h1>
                      </td>
                      <td>
                        <Link to="#">
                          <p className="mb-4 md:ml-4 text-midColor font-semibold">
                            100000
                          </p>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="hidden pb-4 md:table-cell">
                        <h1 className="font-semibold text-md">Discount</h1>
                      </td>
                      <td>
                        <Link to="#">
                          <p className="mb-4 md:ml-4 font-semibold text-red-600">
                            -4000
                          </p>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="hidden pb-4 md:table-cell">
                        <h1 className="font-semibold text-md">Tax</h1>
                      </td>
                      <td>
                        <Link to="#">
                          <p className="mb-4 md:ml-4 font-semibold text-accentColor">
                            1000
                          </p>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="hidden pb-4 md:table-cell">
                        <h1 className="font-semibold text-md">Total</h1>
                      </td>
                      <td>
                        <Link to="#">
                          <p className="mb-4 md:ml-4 font-bold text-midColor">
                            7000
                          </p>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div align="center">
                  <button
                    className="text-lightColor bg-darkColor font-bold p-3 rounded mt-5"
                    onClick={() => navigate("/user")}
                  >
                    PAY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="mx-5" />
      </div>
    </div>
  );
};

export default CheckoutPage;
