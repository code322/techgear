import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slides.scss";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const Slides = () => {
   return (
      <>
         <Swiper
            // slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
               clickable: true,
            }}
            navigation={true}
            className="mySwiper"
            breakpoints={{
               640: {
                  slidesPerView: 1,
               },
               768: {
                  slidesPerView: 2,
               },
               1024: {
                  slidesPerView: 4,
               },
            }}
         >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
         </Swiper>
      </>
   );
};

export default Slides;
