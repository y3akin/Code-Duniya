import React, { useState } from "react";
import Container from "./Layouts/Container";
import Title from "./Layouts/UI/Title";
import Descrip from "./Layouts/UI/Descrip";
import Course_card from "./Layouts/Course_card";
import Mern from "../assets/Image/mern.png";
import Uxui from "../assets/Image/ux_ui.png";
import Videdt from "../assets/Image/Vid.png";
import Button from "./Layouts/Button";

const Course = () => {

   let [courseCount, setCourseCount] = useState(3)

   let courselist = [
      {
         thm: Mern,
         name: "MERN Stack Development",
         dept: "Web and Software",
         enrolled: "৩০০০ স্টুডেন্ট",
         ratting: "Rating | 450 Reviews",
         price: "৳  50,000 BDT",
      },

      {
         thm: Uxui,
         name: "UI/UX Design",
         dept: "Graphics & Multimedia",
         enrolled: "৩০০০ স্টুডেন্ট",
         ratting: "Rating | 450 Reviews",
         price: "৳  30000 BDT",
      },

      {
         thm: Videdt,
         name: "Professional Video Editing",
         dept: "Films & Media",
         enrolled: "৩০০০ স্টুডেন্ট",
         ratting: "Rating | 450 Reviews",
         price: "৳  20,000 BDT",
      },

      {
         thm: Mern,
         name: "MERN Stack Development",
         dept: "Web and Software",
         enrolled: "৩০০০ স্টুডেন্ট",
         ratting: "Rating | 450 Reviews",
         price: "৳  50,000 BDT",
      },

      {
         thm: Uxui,
         name: "UI/UX Design",
         dept: "Graphics & Multimedia",
         enrolled: "৩০০০ স্টুডেন্ট",
         ratting: "Rating | 450 Reviews",
         price: "৳  30,000 BDT",
      }
   ];


   let showCourse = courselist.slice(0,courseCount)
   let handleShowCourse = ()=>{
      if (courseCount === courselist.length) {
         setCourseCount(3);
      } else {
         setCourseCount(courselist.length);
      }
   }

   return (
      <section id="course">
         <Container>
         <div className="mt-[170px] text-center">
            <Title title_text={"আমাদের কোর্স সমুহ"} />
            <Descrip
               title_p={
                  "আমাদের সমস্ত কোর্স সুদক্ষ মেন্টর দ্বারা পরিচালিত  এবং সমৃদ্ধ রিসোর্স দ্বারা পরিপূর্ণ"
               }
            />
         </div>

         <div className="grid grid-cols-3 gap-3 pt-[62px]">
            {showCourse.map((Citems) => (
               <Course_card courseitem={Citems} />
            ))}
         </div>
         <Button
            onClick={handleShowCourse}
            btn={ courseCount === courselist.length ? "কম দেখান" : "আরও কোর্স দেখুন"}
            className={"bg-[#415A77] block mx-auto mt-11"}
         />
      </Container>
      </section>
   );
};

export default Course;
