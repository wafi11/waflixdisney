import React from "react";
import { Link } from "react-router-dom";
import { genre } from "../../data/data";
import MovieList from "./MovieList";

const Main = () => {
  return (
    <div className="">
      {genre.map(
        (item, index) =>
          index <= 4 && (
            <div className="p-8 px-8 md:px-16" key={index}>
              <h3 className="text-white text-[20px] font-bold ">{item.name}</h3>
              <MovieList genreId={item.id} index_={index} />
            </div>
          )
      )}
    </div>
  );
};

export default Main;
