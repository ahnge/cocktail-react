import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import Cocktail from "./Cocktail";

const Cocktails = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return (
      <div className="grid justify-items-center px-5 mx-auto w-full max-w-5xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 ">
        <div className=" w-full max-w-sm bg-gray-800 px-4 py-4 rounded-lg shadow-lg">
          <div className=" w-full h-56 bg-gray-700 animate-pulse"></div>
          <div className=" w-4/12 h-7 bg-gray-700 animate-pulse mx-auto mt-3"></div>
        </div>
        <div className=" w-full max-w-sm bg-gray-800 px-4 py-4 rounded-lg shadow-lg">
          <div className=" w-full h-56 bg-gray-700 animate-pulse"></div>
          <div className=" w-4/12 h-7 bg-gray-700 animate-pulse mx-auto mt-3"></div>
        </div>
        <div className=" w-full max-w-sm bg-gray-800 px-4 py-4 rounded-lg shadow-lg">
          <div className=" w-full h-56 bg-gray-700 animate-pulse"></div>
          <div className=" w-4/12 h-7 bg-gray-700 animate-pulse mx-auto mt-3"></div>
        </div>
      </div>
    );
  }

  if (!cocktails.length > 0) {
    return (
      <div className=" text-center font-bold text-xl">
        <h1>There is no cocktail of such name</h1>
      </div>
    );
  }

  return (
    <div className=" w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 px-10">
      {cocktails.map((item) => {
        return <Cocktail cocktail={item} key={item.id}></Cocktail>;
      })}
    </div>
  );
};

export default Cocktails;
