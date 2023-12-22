import React from "react";
import { FaUserCircle } from "react-icons/fa";

const ActionButton = () => {
  return (
    <div className="hidden md:flex mr-4 justify-between items-center gap-4">
      <FaUserCircle size={32} className="" />
      <button className="bg-primary px-5 py-2 text-center rounded-lg">
        Login
      </button>
    </div>
  );
};

export default ActionButton;
