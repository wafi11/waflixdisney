import React from "react";
import { imgUrl } from "../../data/data";

const HeaderMovieCard = ({ movie }) => {
  return (
    <section>
      <img
        src={`${imgUrl}/${movie.backdrop_path}`}
        alt="../"
        className="w-[110px] md:w-[260px] rounded-lg hover:border-[3px] border-gray-400 hover:scale-110 transition-all duration-150 ease-in cursor-pointer"
      />
      <h2 className="w-[110px] md:w-[260px] text-white mt-2 pt-3 text-center  rounded-lg  cursor-pointer">
        {movie.title}
      </h2>
    </section>
  );
};

export default HeaderMovieCard;
