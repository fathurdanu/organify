import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GiFruitBowl } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import AfterLoginRoutes from "../Routes/AfterLoginRoutes";
import Header from '../components/Header';
import Footer from "../components/Footer";

const ShoppingCart = () => {
    const navigate = useNavigate();
    const [showCart, setShowCart] = useState(false);

    return (
        <div className="flex">
            <aside className={`flex transform top-0 left-0 w-64 fixed h-screen overflow-auto ease-in-out transition-all duration-300 z-[3] ${(showCart) ? 'translate-x-0' : '-translate-x-3/4'} `}>
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
                            <li className="my-2">
                                <button
                                    className="flex items-center px-4 py-2 text-lightColor bg-darkColor hover:bg-lightColor hover:text-darkColor rounded-md "
                                >
                                    <GiFruitBowl size={25} />
                                    <span className="mx-4 font-medium">apel</span>
                                </button>
                            </li>

                            <li className="my-2">
                                <button
                                    className="flex items-center px-4 py-2 text-lightColor bg-darkColor hover:bg-lightColor hover:text-darkColor rounded-md "
                                >
                                    <CgProfile size={25} />
                                    <span className="mx-4 font-medium">mangga</span>
                                </button>
                            </li>
                            <li className="my-2 w-3/4 absolute left-8 bottom-5">
                                <button
                                    className="flex bg-lightColor items-center px-4 py-2 text-darkColor hover:bg-white rounded-md "
                                >
                                    <span className="mx-4 font-medium">Checkout</span>
                                </button>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="w-1/4 flex justify-center items-center max-h-screen">
                    <button
                        class="h-12 w-12 bg-lightColor text-darkColor text-2xl flex justify-center items-center rounded-full"
                        onClick={() => setShowCart(!showCart)}
                    >
                        <FaShoppingCart />
                    </button>

                </div>
            </aside>
            <main className="w-full max-h-full">
                <div class="sticky top-0 z-[2]">
                    <Header />
                </div>
                <div class="sticky z-[1] ">
                    <AfterLoginRoutes />
                </div>
                <div class="">
                    <Footer />
                </div>
            </main>
        </div>
    );
};

export default ShoppingCart;
