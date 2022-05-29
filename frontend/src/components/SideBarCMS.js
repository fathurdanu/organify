import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GiFruitBowl } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";
import CMSRoute from '../Routes/CMSRoute';

function SideBarCMS() {

    const [showDashboard, setShowDashboard] = useState(false);
    const navigate = useNavigate();
    return (
        <div className="flex">
            <aside className={`flex transform top-0 left-0 w-96 fixed h-screen overflow-auto ease-in-out transition-all duration-300 z-[3] ${(showDashboard) ? 'translate-x-0' : '-translate-x-3/4'} `}>
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
                        <ul class="my-2">
                            <li class="my-2">
                                <button
                                    class="flex items-center px-4 py-2 text-lightColor bg-darkColor hover:bg-lightColor hover:text-darkColor rounded-md "
                                    onClick={() => navigate("/cms/dashboard")}
                                >
                                    <GiFruitBowl size={25} />
                                    <span class="mx-4 font-medium">Products</span>
                                </button>
                            </li>

                            <li class="my-2">
                                <button
                                    class="flex items-center px-4 py-2 text-lightColor bg-darkColor hover:bg-lightColor hover:text-darkColor rounded-md "
                                    onClick={() => navigate("/cms/profile")}
                                >
                                    <CgProfile size={25} />
                                    <span class="mx-4 font-medium">Profile</span>
                                </button>
                            </li>

                            <li class="my-2 absolute bottom-5">
                                <button
                                    class="flex items-center px-4 py-2 text-lightColor bg-darkColor hover:bg-lightColor hover:text-darkColor rounded-md "
                                    onClick={() => navigate("/login")}
                                >
                                    <BiLogOut size={25} />
                                    <span class="mx-4 font-medium">Logout</span>
                                </button>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="w-1/4 flex justify-center items-center max-h-screen">
                    <div className="h-14 w-14 bg-darkColor rounded-full flex justify-center items-center">
                        <button
                            class="h-12 w-12 bg-lightColor text-darkColor text-2xl flex justify-center items-center rounded-full"
                            onClick={() => setShowDashboard(!showDashboard)}
                        >
                            |||
                        </button>
                    </div>
                </div>
            </aside>
            <main className="mx-auto w-full min-h-screen bg-neutral-200">
                <div className="container mx-auto">
                    <CMSRoute />
                </div>
            </main>
        </div>



        // <div class="flex overflow-hidden h-screen">
        //     <aside class={`flex grid-cols-2 w-96 h-full py-8 border-r duration-300 ${showDashboard ? 'translate-x-0' : '-translate-x-full'}`}>
        //         <div class="bg-darkColor h-full">
        //             <div>
        //                 <h2 class="text-3xl font-semibold text-center text-lightColor">
        //                     Organify
        //                 </h2>
        //                 <h4 class="text-lg font-semibold text-center mt-2 text-lightColor">
        //                     <em>Admin Dashboard</em>
        //                 </h4>
        //             </div>

        //             <div class="flex flex-col justify-between mt-6">
        //                 <aside>
        //                     <ul class="my-2">
        //                         <li class="my-2">
        //                             <button
        //                                 class="flex items-center px-4 py-2 text-lightColor bg-darkColor hover:bg-lightColor hover:text-darkColor rounded-md "
        //                                 onClick={() => navigate("/cms/dashboard")}
        //                             >
        //                                 <GiFruitBowl size={25} />
        //                                 <span class="mx-4 font-medium">Products</span>
        //                             </button>
        //                         </li>

        //                         <li class="my-2">
        //                             <button
        //                                 class="flex items-center px-4 py-2 text-lightColor bg-darkColor hover:bg-lightColor hover:text-darkColor rounded-md "
        //                                 onClick={() => navigate("/cms/profile")}
        //                             >
        //                                 <CgProfile size={25} />
        //                                 <span class="mx-4 font-medium">Profile</span>
        //                             </button>
        //                         </li>

        //                         <li class="my-2 absolute bottom-5">
        //                             <button
        //                                 class="flex items-center px-4 py-2 text-lightColor bg-darkColor hover:bg-lightColor hover:text-darkColor rounded-md "
        //                                 onClick={() => navigate("/login")}
        //                             >
        //                                 <BiLogOut size={25} />
        //                                 <span class="mx-4 font-medium">Logout</span>
        //                             </button>
        //                         </li>
        //                     </ul>
        //                 </aside>
        //             </div>
        //         </div>
        //         <div class="flex justify-center items-center h-full duration-300">
        //             <button
        //                 class="p-3 bg-darkColor text-lightColor rounded"
        //                 onClick={() => setShowDashboard(!showDashboard)}
        //             >
        //                 |||
        //             </button>
        //         </div>
        //     </aside>

        //     <div class="w-full max-h-full">
        //         <CMSRoute />
        //     </div>
        // </div>
    )
}

export default SideBarCMS