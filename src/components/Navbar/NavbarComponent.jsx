import React from "react";
import InputSearch from "./inputSearch";
import ActionButton from "./ActionButton";

const NavbarComponent = () => {
  return (
    <div className="flex justify-between max-w-[1640px] items-center h-24 px-4 text-white bg-transparant ">
      <h1 className="text-3xl font-bold text-[#B20710] px-5">Waflix</h1>
      <InputSearch />
      <ActionButton />
    </div>
  );
};

export default NavbarComponent;
