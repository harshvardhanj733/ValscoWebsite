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
import { Pagination } from "swiper";
import Iphone from './images/juri.png';
import Client from './images/client.png';
import Login from './images/login.png'

function ProductsPage() {
  return (
    <>
      <div className="lap"> <div className="lap1">
        <div className="full">
          <div className="iphone1">
            <img className="mock1" src={Iphone} alt="" />
          </div>
          <div className="iphone2">
            <img className="mock1"src={Client} alt="" />
          </div>
          <div className="iphone3">
            <img className="mock1"src={Login} alt="" />
          </div>
        </div >
      </div></div>
      <div className="phone">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwipe"
        >

          <SwiperSlide>   <div >
            <img  className="mock" src={Iphone} alt="" />

          </div></SwiperSlide>


          <SwiperSlide> <div >
            <img  className="mock"src={Client} alt="" />
          </div></SwiperSlide>


          <SwiperSlide>  <div>
            <img className="mock" src={Login} alt="" />
          </div></SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default ProductsPage;
