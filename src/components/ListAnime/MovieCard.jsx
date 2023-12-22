import React from "react";
import { imgUrl } from "../../data/data";

const MovieCard = ({ movie }) => {
  return (
    <>
      <img
        src={`${imgUrl}/${movie.poster_path}`}
        alt="../"
        className="w-[110px] md:w-[200px] rounded-lg hover:border-[3px] border-gray-400 hover:scale-110 transition-all duration-150 ease-in cursor-pointer"
      />
    </>
  );
};

export default MovieCard;
