import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GiFruitBowl } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";

function SideBarCMS() {

    const [showDashboard, setShowDashboard] = useState(true);
    const navigate = useNavigate();
    return (
        <div class="flex overflow-hidden">
            {showDashboard && (
                <div class="flex flex-col w-64 max-h-full px-4 py-8 border-r bg-darkColor">
                    <h2 class="text-3xl font-semibold text-center text-lightColor">
                        Organify
                    </h2>
                    <h4 class="text-lg font-semibold text-center mt-2 text-lightColor">
                        <em>Admin Dashboard</em>
                    </h4>

                    <div class="flex flex-col justify-between mt-6">
                        <aside>
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
                        </aside>
                    </div>
                </div>
            )}
            <div class="relative right-2 top-40">
                <button
                    class="p-3 bg-darkColor text-lightColor rounded"
                    onClick={() => setShowDashboard(!showDashboard)}
                >
                    |||
                </button>
            </div>
            <div class="w-full max-h-full">
                <CMSRoute/>
            </div>
        </div>
    )
}

export default SideBarCMS