import React from "react";

const Button = ({btn, className, onClick}) => {
   return (
      <button onClick={onClick} className={`font-Anek font-semibold text-[18px] md:text-[24px] text-white p-1.5 md:px-[58px] md:py-1 rounded-[10px] hover:bg-[#778DA9] transition-all duration-300 cursor-pointer ${className}`}>{btn}</button>
   );
};

export default Button;
