import React from "react";

const Button = ({btn, className}) => {
   return (
      <button className={`font-Anek font-semibold text-[24px] text-white px-[58px] py-1 rounded-[10px] hover:bg-[#778DA9] transition-all duration-300 cursor-pointer ${className}`}>{btn}</button>
   );
};

export default Button;
