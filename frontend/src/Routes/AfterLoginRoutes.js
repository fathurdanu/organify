import React from 'react'
import { Routes, Route } from "react-router-dom";
import { HomePage, EditProfile, ProfileUser } from "../pages/User";


function AfterLoginRoutes() {
    return (
        // semua yang pakai navbar dan shoppingCart
        <Routes>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/edit" element={<EditProfile />}></Route>
            <Route path="/profile" element={<ProfileUser />}></Route>
        </Routes>
    )
}

export default AfterLoginRoutes