import React from "react";
import { dataProductionHouse } from "../../data/data";

const ProductionHouse = () => {
  return (
    <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16">
      {dataProductionHouse.map((item) => (
        <div
          className="border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-gray-800"
          key={item.id}>
          <img src={item.images} alt="../" className="w-full" />
          <video
            src={item.videos}
            autoPlay
            loop
            playsInline
            className="absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50"
          />
        </div>
      ))}
    </div>
  );
};

export default ProductionHouse;
