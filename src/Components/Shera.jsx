import React from "react";
import Container from "./Layouts/Container";
import Title from "./Layouts/UI/Title";
import Descrip from "./Layouts/UI/Descrip";
import Sheracard from "./Layouts/UI/Sheracard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

const Shera = () => {
   let cardlist = [
      {
         num: "৯০ % ",
         title: "সফলতার হার",
         prg: "এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট বাসবেএখানে কিছু টেক্সট বাসবে",
      },

      {
         num: "১০,০০০ +  ",
         title: "ক্যারিয়ার প্লেসমেন্ট",
         prg: "এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট বাসবেএখানে কিছু টেক্সট বাসবে",
      },

      {
         num: "১,০০,০০০ +  ",
         title: "স্টুডেন্ট এর পছন্দ",
         prg: "এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট বাসবেএখানে কিছু টেক্সট বাসবে",
      },
      
      {
         num: "৯০ % ",
         title: "সফলতার হার",
         prg: "এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট বাসবেএখানে কিছু টেক্সট বাসবে",
      },

      {
         num: "১০,০০০ +  ",
         title: "ক্যারিয়ার প্লেসমেন্ট",
         prg: "এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট বাসবেএখানে কিছু টেক্সট বাসবে",
      },

      {
         num: "১,০০,০০০ +  ",
         title: "স্টুডেন্ট এর পছন্দ",
         prg: "এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট বাসবেএখানে কিছু টেক্সট বাসবে",
      },
   ];

   const NextArrow = (props) => {
      const { className, style, onClick } = props;
      return (
         <MdArrowRight
            className={`${className} flex items-center justify-center text-[76px] text-white bg-[#415A77] rounded-full w-[76px] h-[76px] cursor-pointer absolute right-[500px] bottom-[-130px]`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
         />
      );
   };

   const PrevArrow = (props) => {
      const { className, style, onClick } = props;
      return (
         <MdArrowLeft
            className={`${className} flex items-center justify-center text-[76px] text-white bg-[#415A77] rounded-full w-[76px] h-[76px] cursor-pointer absolute left-[500px] bottom-[-130px]`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
         />
      );
   };

   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
   };

   return (
      <section>
         <Container>
            <div className="mt-[93px] text-center">
               <Title title_text={"কেন আমরাই সেরা"} />
               <Descrip title_p={"কেন আপনি আমাদের লার্নার হবেন"} />
            </div>
            <div className="mt-[55px] mb-[186px] ">
               <Slider {...settings}>
                  {cardlist.map((Carditem) => (
                     <Sheracard Card={Carditem} />
                  ))}
               </Slider>
            </div>
         </Container>
      </section>
   );
};

export default Shera;
