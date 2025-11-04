import React from "react";
import Container from "./Layouts/Container";
import Category_items from "./Layouts/UI/Category_items";
import Grficon from "../assets/Image/grficon.png";
import Neticon from "../assets/Image/neticon.png";
import Softicon from "../assets/Image/softicon.png";
import Filmicon from "../assets/Image/filmicon.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { MdArrowLeft, MdArrowRight  } from "react-icons/md";


const Category = () => {
   const items = [
      { name: "গ্রাফিকস", icon: Grficon },
      { name: "নেটওয়ার্কিং", icon: Neticon },
      { name: "সফটওয়্যার", icon: Softicon },
      { name: "ফিল্ম মিডিয়া", icon: Filmicon },
      { name: "গ্রাফিকস", icon: Grficon },
      { name: "নেটওয়ার্কিং", icon: Neticon },
      { name: "সফটওয়্যার", icon: Softicon },
      { name: "ফিল্ম মিডিয়া", icon: Filmicon },
   ];

  const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <MdArrowRight
     className={`${className} flex items-center justify-center text-[76px] text-white bg-[#415A77] rounded-full w-[76px] h-[76px] cursor-pointer absolute right-[-78px] top-1/2 transform -translate-y-1/2 z-10`}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
};

  const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <MdArrowLeft 
     className={`${className} flex items-center justify-center text-[76px] text-white bg-[#415A77] rounded-full w-[76px] h-[76px] cursor-pointer absolute left-[-78px] top-1/2 transform -translate-y-1/2 z-10`}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
};

   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
   };

   return (
      <section className="absolute top-[-100px] w-full">
         <Container>
            <div className="mx-14">
              <Slider {...settings}>
               {items.map((cItems) => (
                  <Category_items items={cItems} />
               ))}
            </Slider>
            </div>
         </Container>
      </section>
   );
};

export default Category;
