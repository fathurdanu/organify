import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GiFruitBowl } from "react-icons/gi";
import { BsFillTrashFill, BsPencilSquare } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import AfterLoginRoutes from "../Routes/AfterLoginRoutes";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Swal from "sweetalert2";

const ShoppingCart = () => {
  const navigate = useNavigate();
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("access_token")) navigate('/login');
}, []);

  async function editQty() {
    const { value: qty } = await Swal.fire({
      title: "Input the desired quantity",
      input: "number",
      inputLabel: "Update Quantity",
      inputPlaceholder: "Enter qty",
      confirmButtonColor: "#0B4619",
    });

    if (qty) {
      Swal.fire({
        title: `Entered Qty: ${qty}`,
        confirmButtonColor: "#0B4619",
      });
    }
  }

  function deleteCartItem() {
    Swal.fire({
      title: "Are you sure you want to delete this item from Cart?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
      confirmButtonColor: "#0B4619",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }

  return (
    <div className="flex">
      <aside
        className={`flex transform top-0 left-0 w-80 fixed h-screen overflow-auto ease-in-out transition-all duration-300 z-[3] ${showCart ? "translate-x-0" : "-translate-x-3/4"
          } `}
      >
        <div className="justify-between border-r-4 border-lightColor pt-6 w-3/4 bg-darkColor">
          <div>
            <div className=" text-3xl h-2/12 font-semibold text-center text-lightColor">
              Organify
            </div>
            <div className=" text-lg h-2/12 font-semibold text-center mt-2 text-lightColor">
              <em>Cart</em>
            </div>
          </div>
          <div className="mx-auto flex">
            <ul className="my-2">
              <li className="my-2 flex">
                <button className="flex items-center px-4 py-2 text-lightColor bg-darkColor">
                  <GiFruitBowl size={25} />
                  <span className="mx-4 font-medium">apel</span>
                  <span className="font-medium">1</span>
                </button>

                <button
                  className="mx-1 text-lightColor hover:text-accentColor"
                  onClick={editQty}
                >
                  <BsPencilSquare />
                </button>
                <button
                  className="mx-3 text-lightColor hover:text-red-600"
                  onClick={deleteCartItem}
                >
                  <BsFillTrashFill />
                </button>
              </li>

              <li className="my-2 flex">
                <button className="flex items-center px-4 py-2 text-lightColor">
                  <GiFruitBowl size={25} />
                  <span className="mx-4 font-medium">mangga</span>
                  <span className="font-medium">10</span>
                </button>
                <button
                  className="mx-1 text-lightColor hover:text-accentColor"
                  onClick={editQty}
                >
                  <BsPencilSquare />
                </button>
                <button
                  className="mx-3 text-lightColor hover:text-red-600"
                  onClick={deleteCartItem}
                >
                  <BsFillTrashFill />
                </button>
              </li>
              <li className="my-2 w-3/4 absolute left-12 bottom-5">
                <button
                  className="flex bg-lightColor items-center px-4 py-2 text-darkColor hover:bg-white rounded-md"
                  onClick={() => navigate("/user/checkout")}
                >
                  <span className="mx-4 font-medium">Checkout</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/4 flex justify-center items-center max-h-screen">
          <div className="h-14 w-14 bg-darkColor flex justify-center items-center rounded-full">
            <button
              className="h-12 w-12 bg-lightColor text-darkColor text-2xl flex justify-center items-center rounded-full"
              onClick={() => setShowCart(!showCart)}
            >
              <FaShoppingCart />
            </button>
          </div>
        </div>
      </aside>
      <main className="w-full max-h-full">
        <div className="sticky top-0 z-[2]">
          <Header />
        </div>
        <div className="sticky z-[1] ">
          <AfterLoginRoutes />
        </div>
        <div className="pt-2">
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default ShoppingCart;
