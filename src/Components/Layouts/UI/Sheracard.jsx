import React from "react";

const Sheracard = ({ Card }) => {
   return (
      <div className="bg-primary w-[180px] sm:w-[377px] rounded-[5px]">
         <div className="pl-3 pt-3">
            <h2 className="font-Anek text-[16px] sm:text-[36px] font-semibold text-white">
               {Card.num}
            </h2>
            <h2 className="font-Anek text-[16px] sm:text-[36px] font-semibold text-white">
               {Card.title}
            </h2>
         </div>
         <p className="font-Anek py-[11px] px-3 text-[10px] sm:text-[16px] font-normal text-white">
            {Card.prg}
         </p>
      </div>
   );
};

export default Sheracard;
