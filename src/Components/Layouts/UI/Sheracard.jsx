import React from "react";

const Sheracard = ({ Card }) => {
   return (
      <div className="bg-primary max-w-[377px] rounded-[15px]">
         <div className="pl-7 pt-9">
            <h2 className="font-Anek text-[36px] font-semibold text-white">
               {Card.num}
            </h2>
            <h2 className="font-Anek text-[36px] font-semibold text-white">
               {Card.title}
            </h2>
         </div>
         <p className="font-Anek py-[23px] leading-7 px-6 text-[16px] font-normal text-white">
            {Card.prg}
         </p>
      </div>
   );
};

export default Sheracard;
