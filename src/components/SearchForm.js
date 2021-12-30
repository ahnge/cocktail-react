import React, { useState, useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const [text, setText] = useState("");
  const { setSearchTerm } = useGlobalContext();
  const searchForm = useRef(null);

  const handleChange = (e) => {
    setText(e.target.value);
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    searchForm.current.focus();
  }, []);

  return (
    <div>
      <form
        className=" flex flex-col w-11/12 bg-stone-300 mx-auto max-w-xl rounded-lg px-8 py-8 mt-20"
        onSubmit={(e) => handleSubmit(e)}
      >
        <label htmlFor="name" className=" text-center text-lg font-bold mb-4">
          Search your cocktail
        </label>
        <input
          value={text}
          type="text"
          name="name"
          placeholder="e.g.cocktail"
          className="px-4 py-2 rounded-full"
          onChange={(e) => handleChange(e)}
          ref={searchForm}
        />
      </form>
    </div>
  );
};

export default SearchForm;
