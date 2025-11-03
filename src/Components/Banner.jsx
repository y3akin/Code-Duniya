import React from "react";
import Container from "./Layouts/Container";
import Flex from "./Layouts/Flex";
import Button from "./Layouts/Button";
import Image from "./Layouts/Image";
import Banner_img from "../assets/Image/banner.png";

const Banner = () => {
   return (
      <section className="bg-primary pt-[81.62px] pb-[173.83px]">
         <Container>
            <Flex className={"justify-between items-center"}>
               <div>
                  <h1 className="font-Anek max-w-[435px] font-bold text-[50px] text-white">
                     দেশের সর্ব বৃহৎ আইটি ট্রেনিং প্লাটফর্ম
                  </h1>

                  <p className="pt-[35.49px] pb-[41.37px] font-Anek max-w-[457px] font-normal text-[20px] text-white">
                     আইটি ট্রেনিং এর মাধ্যমে নিজেকে স্বাবলম্বী করুন। নিজেকে আইটি
                     এক্সপার্ট হিসেবে গড়ে তুলুন
                  </p>

                  <Button btn={"কোর্স দেখুন"} className={"bg-[#415A77]"} />
               </div>

               <Image src={Banner_img} alt={"Banner_Image"} />
            </Flex>
         </Container>
      </section>
   );
};

export default Banner;
