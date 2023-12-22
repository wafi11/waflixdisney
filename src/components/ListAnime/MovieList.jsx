import React, { useEffect, useRef, useState } from "react";
import { getMoviePoster } from "../../libs/api";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import HeaderMovieCard from "./headerMovieCard";

function MovieList({ genreId, index_ }) {
  const [MovieList, setMovieList] = useState([]);
  const elementRef = useRef(null);
  useEffect(() => {
    getMovieById();
  }, []);
  const getMovieById = () => {
    getMoviePoster(genreId).then((res) => {
      setMovieList(res);
    });
  };
  const slideRight = (element) => {
    element.scrollLeft += 1100;
  };
  const slideLeft = (element) => {
    element.scrollLeft -= 1100;
  };
  return (
    <div className="relative flex">
      <IoChevronBackOutline
        onClick={() => slideLeft(elementRef.current)}
        className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute ${
          index_ % 3 == 0 ? "mt-[70px]" : "mt-[150px]"
        }`}
      />
      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-8 scrollbar-none pb-4 pt-4 px-3 scroll-smooth">
        {MovieList.map((item, index) => (
          <>
            {index_ % 3 == 0 ? (
              <HeaderMovieCard movie={item} key={index} />
            ) : (
              <MovieCard movie={item} />
            )}
          </>
        ))}
      </div>
      <IoChevronForwardOutline
        onClick={() => slideRight(elementRef.current)}
        className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute right-0 ${
          index_ % 3 == 0 ? "mt-[70px]" : "mt-[150px]"
        }`}
      />
    </div>
  );
}

export default MovieList;
