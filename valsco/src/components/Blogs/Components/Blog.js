import React , {useState} from 'react'
import {auth ,  db} from "../firebase-config";
import { collection , getDocs ,deleteDoc, doc } from "firebase/firestore";
import { Link } from 'react-router-dom';
// import "../../Blogs/Blogs.css";
import "./StyleBlog.css";

// import logoimg from "../../images/logo.png";
const Blog = (currentElement,authenticated , setAlertMsg, setAlertColor) => {


  console.log(authenticated);
  const {author,title,postText,id}=currentElement;


  
  const deleteBlog = async(id)=>{

    const blogdelete = doc(db,"blogPosts",id);
    await deleteDoc(blogdelete);
    window.location.reload(false);

    localStorage.setItem("alertMsg","Your Blog has been successfully deleted!");
    setAlertMsg("Your Blog has been successfully deleted!");

    localStorage.setItem("alertColor","lightgreen");
    setAlertColor("lightgreen");
}

  return (
    <>
    <section className='blog-card'>
      <img src={require("../../../components/images/blog-logo.png")} id='valsco-logo'/>
      <h4 className='blog-card-title'>{title}</h4>
      <p className='blog-card-desc'>{postText.slice(0,180)}...</p>
      <p className='blog-card-author'>@{author.name}</p>
      <div className='blog-card-btn-div'>
      <Link to={`/DetailedBlog/${id}`} className='blog-card-read-btn'>Read Blog</Link>
      {authenticated && auth.currentUser && auth.currentUser.uid==author.id && <button className="blog-card-delete-btn" onClick={()=>deleteBlog(id)}>Delete blog</button>}
      </div>
    </section>
    </>
  )
}

export default Blog;