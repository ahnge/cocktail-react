import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const AppProvider = ({ children }) => {
  const [cocktails, setCocktails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("a");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCocktails = async () => {
      setLoading(true);
      const res = await fetch(`${url}${searchTerm}`);
      const data = await res.json();
      const { drinks } = data;
      if (!drinks) {
        setCocktails([]);
        setLoading(false);
        return;
      }
      const tempDrinksArr = drinks.map((item) => {
        const {
          idDrink: id,
          strAlcoholic: alcoholic,
          strDrink: name,
          strDrinkThumb: image,
        } = item;

        const {
          strIngredient1: ingredient1,
          strIngredient2: ingredient2,
          strIngredient3: ingredient3,
          strIngredient4: ingredient4,
        } = item;

        const tempIngredientsObj = {
          ingredient1,
          ingredient2,
          ingredient3,
          ingredient4,
        };
        return { id, alcoholic, name, image, ingredients: tempIngredientsObj };
      });
      console.log(tempDrinksArr);
      setCocktails(tempDrinksArr);
      setLoading(false);
    };
    fetchCocktails().catch((err) => console.log(err));
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        setSearchTerm,
        cocktails,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
