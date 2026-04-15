import React from "react";
import { NavLink } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";

const Navbar = () => {
    const linkClass = ({ isActive }) =>
        isActive
            ? "flex items-center gap-2 px-4 py-2 rounded-lg bg-green-800 text-white"
            : "flex items-center gap-2 px-4 py-2 text-gray-500 hover:text-black";
    return (
        <div className="bg-base-200">
            <div className="container mx-auto flex justify-between items-center py-4 px-4">
                <h1 className="text-2xl font-bold">
                    Keen<span className="text-green-700">Keeper</span>
                </h1>

                <div className="flex items-center gap-3">
                    <NavLink to="/" className={linkClass}>
                        <FaHome /> Home
                    </NavLink>

                    <NavLink to="/timeline" className={linkClass}>
                        <FaClock /> Timeline
                    </NavLink>

                    <NavLink to="/stats" className={linkClass}>
                        <FaChartLine /> Stats
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;