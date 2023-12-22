import React, { useEffect, useRef, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { imgUrl } from "../../data/data";

const Banner = ({ api }) => {
  const screenWidth = window.innerWidth;
  const elementRef = useRef();
  const SliderRight = (element) => {
    element.scrollLeft += screenWidth + 1100;
  };
  const SliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 1100;
  };
  return (
    <div>
      <HiChevronLeft
        className="hidden md:block text-white text-[30px] absolute mx-8 mt-[225px] cursor-pointer"
        onClick={() => SliderLeft(elementRef.current)}
        size={33}
      />
      <HiChevronRight
        className="hidden md:block  text-white text-[30px] absolute mx-8 mt-[225px] cursor-pointer right-0"
        onClick={() => SliderRight(elementRef.current)}
        size={33}
      />
      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth"
        ref={elementRef}>
        {api.map((movie, index) => (
          <img
            src={`${imgUrl}/${movie.backdrop_path}`}
            key={index}
            className="min-w-full md:h-[480px] object-cover object-middle-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in-out"
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
