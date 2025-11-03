import React from "react";
import Container from "./Layouts/Container";
import Flex from "./Layouts/Flex";
import Image from "./Layouts/Image";
import Logo from "../assets/Image/logo.png";
import Listitems from "./Layouts/Listitems";
import Button from "./Layouts/Button";

const Navbar = () => {
   return (
      <header className="bg-primary py-[15px]">
         <nav>
            <Container>
               <Flex className={'items-center justify-between'}>
                  <Image src={Logo} alt={"Logo_image"} />
                  <ul className="flex gap-[25px]">
                     <Listitems list={"হোম"} />
                     <Listitems list={"আমাদের কোর্সসমহ"} />
                     <Listitems list={"যোগাযোগ"} />
                     <Listitems list={"ক্যারিয়ার গাইডলাইন"} />
                  </ul>
                  <Button btn={"কোর্স দেখুন"} className={"bg-[#415A77]"} />
               </Flex>
            </Container>
         </nav>
      </header>
   );
};

export default Navbar;
