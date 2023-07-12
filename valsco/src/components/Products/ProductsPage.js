import React, { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import styles from "./ProductsPage.css"
import "swiper/css"
import "swiper/css/effect-cards"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { EffectCards } from "swiper"
import "swiper/css"
import "swiper/css/pagination"

function ProductsPage() {
  return (
    <>
      <div className="main" id="productsrow2">
        <h2>Products</h2>
        <div className="main1">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              {" "}
              <a href="https://www.youtube.com/" target="_blank">
                {" "}
                <img
                  src={require("../../components/images/P1.jpg")}
                  alt=""
                />{" "}
              </a>
            </SwiperSlide>

            <SwiperSlide>
              {" "}
              <a href="https://www.youtube.com/" target="_blank">
                {" "}
                <img
                  src={require("../../components/images/P2.jpg")}
                  alt=""
                />
              </a>
            </SwiperSlide>

            <SwiperSlide>
              {" "}
              <a href="https://www.youtube.com/" target="_blank">
                {" "}
                <img
                  src={require("../../components/images/P3.jpg")}
                  alt=""
                />
              </a>
            </SwiperSlide>

            {/* <SwiperSlide>
              {" "}
              <a href="https://www.youtube.com/" target="_blank">
                {" "}
                <img
                  src={require("../../components/images/newlogo.png")}
                  alt=""
                />
              </a>
            </SwiperSlide>

            <SwiperSlide>
              {" "}
              <a href="https://www.youtube.com/" target="_blank">
                {" "}
                <img
                  src={require("../../components/images/newlogo.png")}
                  alt=""
                />
              </a>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default ProductsPage;
