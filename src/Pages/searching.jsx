import React from "react";
import { imgUrl } from "../data/data";

const Searching = ({ movie }) => {
  return (
    <div className="">
      <div>
        <img src={`${imgUrl}/${movie.poster_}`} alt="../" />
      </div>
    </div>
  );
};

export default Searching;
