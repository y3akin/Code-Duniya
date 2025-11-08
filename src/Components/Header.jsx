import React, { useState } from "react";
import Container from "./Layouts/Container";
import Flex from "./Layouts/Flex";
import Image from "./Layouts/Image";
import Logo from "../assets/Image/logo.png";
import Listitems from "./Layouts/Listitems";
import Button from "./Layouts/Button";
import { TiThMenuOutline } from "react-icons/ti";

const Header = () => {

   let [menuShow, setMenuShow] = useState(false)
   let handleToggleMenu = ()=>{
      setMenuShow(!menuShow)
   }

   let handleScrollToCourse = () => {
      let courseSection = document.getElementById("course");
      if (courseSection) {
         courseSection.scrollIntoView({ behavior: "smooth" });
      }
   };

   return (
      <header className="bg-primary py-[15px]">
         <nav>
            <Container>
               <Flex className={"items-center justify-between"}>
                  <Image
                     src={Logo}
                     alt={"Logo_image"}
                     className="w-[120px] sm:w-auto"
                  />
                  <ul className={`${menuShow ? "w-full h-[200px] flex flex-col gap-3 px-3 absolute bg-[#0d1b2af8] top-[68px] left-0 rounded-b-2xl" : "hidden"} sm:flex sm:gap-[25px]`}>
                     <Listitems list={"হোম"} className=" border-b sm:border-0"/>
                     <Listitems
                        onClick={handleScrollToCourse}
                        list={"আমাদের কোর্সসমহ"}
                        className=" border-b sm:border-0"
                     />
                     <Listitems list={"যোগাযোগ"} className=" border-b sm:border-0" />
                     <Listitems list={"ক্যারিয়ার গাইডলাইন"} className=" border-b sm:border-0" />
                  </ul>
                  <div className="flex items-center gap-3.5">
                     <Button
                        onClick={handleScrollToCourse}
                        btn={"কোর্স দেখুন"}
                        className={"bg-[#415A77]"}
                     />
                     <TiThMenuOutline onClick={handleToggleMenu} className="md:hidden text-3xl text-white" />
                  </div>
               </Flex>
            </Container>
         </nav>
      </header>
   );
};

export default Header;
