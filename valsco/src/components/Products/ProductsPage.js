import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './ProductsPage.css'
import 'swiper/css';
import "swiper/css/effect-cards";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/pagination";


function ProductsPage() {
  return (
    <>
      <div className="main">
        <h2>Products</h2>
        <div className="main1">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >

            <SwiperSlide > <a href="https://www.youtube.com/" target="_blank"  > <img src="https://images.unsplash.com/photo-1589216532372-1c2a367900d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="" /> </a></SwiperSlide>


            <SwiperSlide > <a href="https://www.youtube.com/" target="_blank"  > <img src="https://images.unsplash.com/photo-1505664063603-28e48ca204eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" /></a></SwiperSlide>


            <SwiperSlide > <a href="https://www.youtube.com/" target="_blank"  > <img src="https://images.unsplash.com/photo-1593115057322-e94b77572f20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" /></a></SwiperSlide>


            <SwiperSlide > <a href="https://www.youtube.com/" target="_blank"  > <img src="https://images.unsplash.com/photo-1528747008803-f9f5cc8f1a64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGxhd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" /></a></SwiperSlide>


            <SwiperSlide > <a href="https://www.youtube.com/" target="_blank"  > <img src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" /></a></SwiperSlide>
          </Swiper>
        </div>
      </div >


    </>
  );
}

export default ProductsPage;
