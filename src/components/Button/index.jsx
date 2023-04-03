import React from "react";

const Button = ({ type, value, click }) => {
  return (
    <input
      type={type}
      value={value}
      onClick={click}
      className="w-fit h-[40px] px-4 bg-[#2F80ED] text-white text-sm rounded-[5px] font-bold cursor-pointer"
    />
  );
};

export default Button;
