import React from "react";

const Category_items = ({items}) => {
   return (
        <div className="max-w-[180px] sm:max-w-[230px] h-[182px] mx-auto pt-[15px] bg-[#1B263B] flex-col text-center rounded-[25px] mt-3.5">

        <img src={items.icon} alt={items.name} className="mx-auto"/>

         <h2 className="font-Anek font-semibold text-[24px] text-white pb-8">
            {items.name}
         </h2>
      </div>
   );
};

export default Category_items;
