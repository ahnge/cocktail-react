import React from "react";
import { Link } from "react-router-dom";
import { FaCocktail } from "react-icons/fa";

const Nav = () => {
  return (
    <div className=" w-full bg-slate-700">
      <nav className="w-full max-w-5xl mx-auto px-6 flex justify-between">
        <div className=" py-4">
          <Link to="/">
            <FaCocktail className=" text-3xl text-white hover:text-yellow-400" />
          </Link>
        </div>
        <ul className=" flex items-center">
          <li>
            <Link
              to="/"
              className="px-5 text-white font-bold py-4 hover:bg-black"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="px-5 text-white font-bold py-4 hover:bg-black"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
