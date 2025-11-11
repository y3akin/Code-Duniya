import React from "react";
import Header from "../Header";
import Banner from "../Banner"
import Category from "../Category";
import Course from "../Course";
import Shera from "../Shera";

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
