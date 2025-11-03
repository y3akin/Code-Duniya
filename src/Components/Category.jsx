import React from "react";
import Container from "./Layouts/Container";
import Category_items from "./Layouts/UI/Category_items";
import Grficon from "../assets/Image/grficon.png";
import Neticon from "../assets/Image/neticon.png";
import Softicon from "../assets/Image/softicon.png";
import Filmicon from "../assets/Image/filmicon.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

   function NextArrow(props) {
      const { className, style, onClick } = props;
      return (
         <div
            className={`${className}`}
            style={{ ...style, display: "block", background: "#415A77", width:"50px", height: "50px", position:"absolute", right:"-50px" }}
            onClick={onClick}
         />
      );
   }

   function PrevArrow(props) {
      const { className, style, onClick } = props;
      return (
         <div
            className={className}
            style={{ ...style, display: "block", background: "#415A77", width:"50px", height: "50px", position:"absolute", left:"-50px"  }}
            onClick={onClick}
         />
      );
   }

   var settings = {
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
      <section className=" absolute top-[710px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
