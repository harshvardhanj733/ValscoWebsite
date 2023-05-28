import React from "react";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { Link } from "react-router-dom";
import "../../Blogs/Blogs.css";
import { useBlogContext } from "../context/BlogContext";
SwiperCore.use([EffectCoverflow, Autoplay, Pagination]);

export default function Slider({ authenticated }) {
  const { isLoading, blogs, getPosts } = useBlogContext();
  const postsCollectionRef = collection(db, "blogPosts");

  if (isLoading === true) {
    return (
      <div className="loader d-flex flex-column align-items-center justify-content-center my-5">
        <div className="p-4 border rounded-circle shadow">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        <span className="mt-4 fw-bold">... Loading ...</span>
      </div>
    );
  }

  const deleteBlog = async (id) => {
    const blogdelete = doc(db, "blogPosts", id);
    await deleteDoc(blogdelete);
    window.location.reload(false);
  };

  return (
    <>
      <div className="swiper-container my-5">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          EffectCoverflow={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 5,
            slideShadows: true,
          }}
          pagination={false}
          className="mySwiper"
        >
          {blogs.map((currentElement) => {
            return (
              <SwiperSlide className="swiperslide">
                <section className="d-flex flex-column align-items-center blog-card border border-dark p-3 m-2 swiper-slide">
                  <img src="./logo.png" id="valsco-logo" />
                  <h3>{currentElement.title}</h3>
                  <p>{currentElement.postText.slice(0, 200)}...</p>
                  <p className="fw-bold">@{currentElement.author.name}</p>
                  <div>
                    <Link
                      to={`/DetailedBlog/${currentElement.id}`}
                      className="btn btn-outline-success me-2"
                    >
                      Read Blog
                    </Link>
                    {authenticated &&
                      auth.currentUser &&
                      auth.currentUser.uid == currentElement.author.id && (
                        <button
                          className="btn btn-outline-danger ms-2"
                          onClick={() => deleteBlog(currentElement.id)}
                        >
                          Delete blog
                        </button>
                      )}
                  </div>
                </section>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <p className="text-center my-5">...Drag to swipe the blog cards...</p>
      </div>
    </>
  );
}
