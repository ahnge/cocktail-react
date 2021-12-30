import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1 className=" text-red-600 text-4xl text-center mt-10">
        This is a dead end!
      </h1>
      <div className="text-center mt-14">
        <Link
          to="/"
          className=" px-6 py-2 bg-black text-white text-xl hover:border-2 hover:border-black hover:bg-white hover:text-black rounded-full transition-colors shadow-lg "
        >
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
