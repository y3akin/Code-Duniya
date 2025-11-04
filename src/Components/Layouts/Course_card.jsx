import React from "react";
import Flex from "./Flex";

const Course_card = ({ courseitem }) => {
   return (
      <div>
         <img src={courseitem.thm} alt="" />

         <div className="bg-[#415A77] text-white max-w-[377px] px-4 rounded-b-[15px]">

            <Flex className={"items-center justify-between  pt-1"}>
               <h4 className="font-pop font-medium text-[15px]">
                  {courseitem.dept}
               </h4>
               <h3 className="font-Anek font-normal text-[15px]">
                  {courseitem.enrolled}
               </h3>
            </Flex>

            <h2 className="font-pop font-bold text-[24px]">
               {courseitem.name}
            </h2>
            <Flex className={"items-center justify-between"} >
              <div><h3 className="font-pop font-medium text-[13px] pt-[13px]">
               {courseitem.ratting}
            </h3>
            <h3 className="font-pop font-extrabold text-[24px]">
               {courseitem.price}
            </h3></div>
            <button className="font-Anek font-semibold text-[20px] bg-primary text-white px-5 py-1.5 rounded-[15px] hover:bg-[#778DA9] transition-all duration-300 cursor-pointer">ডিসকাউন্ট</button>
            </Flex>
         </div>
      </div>
   );
};

export default Course_card;
