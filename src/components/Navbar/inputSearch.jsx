import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { searchMovie, getMovieList } from "../../libs/api";
import { useNavigate } from "react-router-dom";
import Searching from "../../Pages/searching";

const InputSearch = () => {
  const [search, setSearch] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getMovieList().then((result) => setSearch(result));
  }, []);

  const Search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setSearch(query.results);
    }
    if (q.key === "click") {
      navigate(`/search/${q}`);
    }
  };
  return (
    <div className="relative px-3 w-full md:w-[30%]" onSubmit={Search}>
      <input
        type="text"
        placeholder="Search Movies...."
        className="px-3 py-2 w-full rounded-full text-black focus:outline-none"
        onChange={({ target }) => Search(target.value)}
      />
      <button onClick={Search}>
        <FiSearch size={25} className="absolute text-black top-2 right-5 " />
      </button>
      <Searching movie={search} />
    </div>
  );
};

export default InputSearch;
