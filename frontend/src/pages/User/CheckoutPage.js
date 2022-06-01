import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import Header from "../../components/Header";
import StripeContainer from "../../components/StripeContainer";

const CheckoutPage = () => {
  const navigate = useNavigate();
  let subtitle;
  const [openModal, setOpenModal] = useState(false);

  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(55, 49, 52, 0.5)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setOpenModal(false);
  }

  return (
    <div class="container mx-auto">
      <Header />
      <Modal
        isOpen={openModal}
        onAfterOpen={afterOpenModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <StripeContainer />
        <div align="center" class="py-5">
          <button
            class="bg-darkColor text-lightColor p-3 rounded font-semibold"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </Modal>
      <div class="w-full bg-white">
        <h1 class="text-xl text-center font-semibold py-3">Checkout</h1>
        <h2 class="text-lg text-left font-semibold px-24 py-3">Items Bought</h2>
        <hr class="mx-24" />
        <div class="px-24 py-3">
          <table class="w-full text-sm lg:text-base" cellspacing="0">
            <thead>
              <tr class="h-12 uppercase">
                <th class="hidden md:table-cell"></th>
                <th class="text-left">Product</th>
                <th class="lg:text-right text-left pl-5 lg:pl-0">
                  <span class="lg:hidden" title="Quantity">
                    Qtd
                  </span>
                  <span class="hidden lg:inline">Quantity</span>
                </th>
                <th class="hidden text-right md:table-cell">Unit price</th>
                <th class="text-right">Total price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="hidden pb-4 md:table-cell">
                  <a href="#">
                    <img
                      src="https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      class="w-40 h-30 rounded"
                      alt="Thumbnail"
                    />
                  </a>
                </td>
                <td>
                  <a href="#">
                    <p class="mb-2 md:ml-4">Pisang Cavendish Organik</p>
                  </a>
                </td>
                <td class="hidden text-right md:table-cell pb-3">
                  <span class="text-sm lg:text-base font-medium">5</span>
                </td>
                <td class="hidden text-right md:table-cell pb-3">
                  <span class="text-sm lg:text-base font-medium">10000</span>
                </td>
                <td class="text-right pb-3">
                  <span class="text-sm lg:text-base font-bold text-darkColor">
                    50000
                  </span>
                </td>
              </tr>
              <tr>
                <td class="hidden pb-4 md:table-cell">
                  <a href="#">
                    <img
                      src="https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      class="w-40 h-30 rounded"
                      alt="Thumbnail"
                    />
                  </a>
                </td>
                <td>
                  <a href="#">
                    <p class="mb-2 md:ml-4">Apel Fuji Organik</p>
                  </a>
                </td>
                <td class="hidden text-right md:table-cell pb-3">
                  <span class="text-sm lg:text-base font-medium">2</span>
                </td>
                <td class="hidden text-right md:table-cell pb-3">
                  <span class="text-sm lg:text-base font-medium">10000</span>
                </td>
                <td class="text-right pb-3">
                  <span class="text-sm lg:text-base font-bold text-darkColor">
                    20000
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <hr class="pb-6 mt-6" />
          <div class="flex px-2">
            <div class="w-2/3">
              <h1 class="font-semibold text-lg text-center">Buyer Details</h1>
              <div class="py-5">
                <table>
                  <tbody>
                    <tr>
                      <td class="hidden pb-4 md:table-cell">
                        <h1 class="font-semibold text-md">Name</h1>
                      </td>
                      <td>
                        <a href="#">
                          <p class="mb-4 md:ml-4">Rakha Naufal Akbar Fikri</p>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td class="hidden pb-4 md:table-cell">
                        <h1 class="font-semibold text-md">Email</h1>
                      </td>
                      <td>
                        <a href="#">
                          <p class="mb-4 md:ml-4">rnaufalaf@gmail.com</p>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td class="hidden pb-4 md:table-cell">
                        <h1 class="font-semibold text-md">Address</h1>
                      </td>
                      <td>
                        <a href="#">
                          <p class="mb-4 md:ml-4">
                            Hazlehurst Ln, Lightwood Ln, Sheffield S8 8BG,
                            United Kingdom
                          </p>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td class="hidden pb-4 md:table-cell">
                        <h1 class="font-semibold text-md">Phone</h1>
                      </td>
                      <td>
                        <a href="#">
                          <p class="mb-4 md:ml-4">+44 12345678</p>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="border border-1 mx-3" />
            <div class="w-1/3">
              <h1 class="font-semibold text-lg text-center">Subtotal</h1>
              <div class="py-5">
                <table align="center">
                  <tbody>
                    <tr>
                      <td class="hidden pb-4 md:table-cell">
                        <h1 class="font-semibold text-md">Price</h1>
                      </td>
                      <td>
                        <a href="#">
                          <p class="mb-4 md:ml-4 text-midColor font-semibold">
                            100000
                          </p>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td class="hidden pb-4 md:table-cell">
                        <h1 class="font-semibold text-md">Discount</h1>
                      </td>
                      <td>
                        <a href="#">
                          <p class="mb-4 md:ml-4 font-semibold text-red-600">
                            -4000
                          </p>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td class="hidden pb-4 md:table-cell">
                        <h1 class="font-semibold text-md">Tax</h1>
                      </td>
                      <td>
                        <a href="#">
                          <p class="mb-4 md:ml-4 font-semibold text-accentColor">
                            1000
                          </p>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td class="hidden pb-4 md:table-cell">
                        <h1 class="font-semibold text-md">Total</h1>
                      </td>
                      <td>
                        <a href="#">
                          <p class="mb-4 md:ml-4 font-bold text-midColor">
                            7000
                          </p>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div align="center">
                  <button
                    class="text-lightColor bg-darkColor font-bold p-3 rounded mt-5"
                    onClick={() => setOpenModal(true)}
                  >
                    PAY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr class="mx-5" />
      </div>
    </div>
  );
};

export default CheckoutPage;
