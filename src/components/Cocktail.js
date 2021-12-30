import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ cocktail }) => {
  const { id, alcoholic, image, ingredients, name } = cocktail;

  return (
    <div className=" rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt={name} className=" aspect-square" />
      <div className=" flex justify-between px-4 items-center">
        <h2 className=" text-center text-xl font-bold mt-3 mb-3">{name}</h2>
        <Link
          to={`cocktail/${id}`}
          className=" bg-green-400 px-3 h-9 rounded-md hover:bg-black hover:text-white transition-colors flex justify-center items-center"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default Cocktail;
