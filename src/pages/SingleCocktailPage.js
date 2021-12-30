import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const SingleCocktailPage = () => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
  let { id } = useParams();

  const [detailObj, setDetailObj] = useState({
    id: "",
    name: "",
    image: "",
    instruction: "",
    ingredients: [],
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchSingleCocktailById = async () => {
      const res = await axios.get(`${url}${id}`);
      const drinks = res.data.drinks;

      if (drinks) {
        const { idDrink, strDrink, strDrinkThumb, strInstructions } = drinks[0];
        const {
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = drinks[0];
        const temp = {
          id: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          instruction: strInstructions,
          ingredients: [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ],
        };
        setDetailObj(temp);
        setLoading(false);
      } else {
        setDetailObj({});
        setLoading(false);
      }
    };
    fetchSingleCocktailById();
  }, []);

  if (loading) {
    return <div> Loading...</div>;
  }

  return (
    <div className="w-full">
      <div className=" w-11/12 max-w-3xl mx-auto flex justify-center flex-col items-center mt-8 md:flex-row t h-screen md:items-center">
        <div className=" max-w-xs">
          <img
            src={detailObj.image}
            alt={detailObj.name}
            className=" rounded-md shadow-md"
          />
        </div>
        <div className=" mt-3 md:mt-0 md:pl-5">
          <h1 className=" mt-3">
            <span className="px-2 font-mono rounded-md bg-green-300 mr-2">
              name:
            </span>
            {detailObj.name}
          </h1>
          <div className=" mt-3">
            <span className="px-2 font-mono rounded-md bg-green-300 mr-2">
              ingredients:
            </span>
            {detailObj.ingredients.map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
          </div>
          <div className=" mt-3">
            <span className="px-2 font-mono rounded-md bg-green-300 mr-2">
              instruction:
            </span>
            {detailObj.instruction}
          </div>
          <Link
            to="/"
            className=" bg-gray-900 px-4 py-2 text-white rounded-md inline-block mt-5 hover:text-black hover:bg-zinc-50 hover:shadow-md transition"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCocktailPage;
