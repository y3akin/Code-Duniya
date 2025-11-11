import React from "react";
import Header from "../Components/Header";
import Banner from "../Components/Banner"
import Category from "../Components/Category";
import Course from "../Components/Course";
import Shera from "../Components/Shera";

const CodeDuniya = () => {
   return (
      <>
         <Header />
         <Banner />
         <div className="relative">
            <Category />
         </div>
         <Course />
         <Shera />
      </>
   );
};

export default CodeDuniya;
