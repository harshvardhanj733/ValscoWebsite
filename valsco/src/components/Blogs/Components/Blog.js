import React , {useState} from 'react'
import {auth ,  db} from "../firebase-config";
import { collection , getDocs ,deleteDoc, doc } from "firebase/firestore";
import { Link } from 'react-router-dom';
import "../../Blogs/Blogs.css";
const Blog = (currentElement,authenticated) => {


  console.log(authenticated);
  const {author,title,postText,id}=currentElement;


  
  const deleteBlog = async(id)=>{

    const blogdelete = doc(db,"blogPosts",id);
    await deleteDoc(blogdelete);
    window.location.reload(false);
}

  return (
    <>
    <section className='d-flex flex-column align-items-center blog-card border border-dark p-3 m-3 text-center'>
      <img src="./logo.png" id='valsco-logo'/>
      <h3>{title}</h3>
      <p>{postText.slice(0,200)}...</p>
      <p className='fw-bold'>@{author.name}</p>
      <div>
      <Link to={`/DetailedBlog/${id}`} className='btn btn-outline-success me-2'>Read Blog</Link>
      {authenticated && auth.currentUser && auth.currentUser.uid==author.id && <button className="btn btn-outline-danger ms-2" onClick={()=>deleteBlog(id)}>Delete blog</button>}
      </div>
    </section>
    </>
  )
}

export default Blog;