import React, { useState , useEffect } from 'react';
import { useBlogContext } from '../context/BlogContext';
import { useParams } from 'react-router-dom'
import { auth , db} from '../firebase-config';
import {deleteDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "../../Blogs/Blogs.css";

const DetailedBlog = ({authenticated}) => {

  let navigate = useNavigate();
  const [temp,setTemp]=useState(false);

  const {ID} = useParams();
  const {isSingleLoading , singleBlog , getSinglePost} = useBlogContext();

  useEffect(()=>{
    getSinglePost(ID);
  },[]);

  const {title,postText,author} = singleBlog;
  console.log(singleBlog);
  if(isSingleLoading===true)
  {
    return <div className='loader d-flex flex-column align-items-center justify-content-center my-5'> 
            <div className='p-4 border rounded-circle shadow'>
            <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
            </div>
            <span className='mt-4 fw-bold'>... Loading ...</span>
            </div>
  }

  if(temp===true)
  {
    return (
      <div className="loader d-flex flex-column align-items-center justify-content-center my-5">
        <div className="p-4 border rounded-circle shadow">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        <span className="mt-4 fw-bold">... Deleting your blog ...</span>
      </div>
    );
  }

  const deleteBlog = async(id)=>{
    setTemp(true);
    const blogdelete = doc(db,"blogPosts",id);
    await deleteDoc(blogdelete);
    setTemp(false);
    navigate("/BlogHome");
    window.location.reload(false);
}


  
  return (
    <>
    <section className='detailed-blog text-center border-bottom my-3 border-success py-5 mx-5'>
    <h1 className='py-3'>{title}</h1>
    <p>{postText}</p>
    {author && author.name && <p className='fw-bold'>@{author.name}</p>}
    {authenticated && author && auth.currentUser && auth.currentUser.uid === author.id && <button className='btn btn-outline-danger' onClick={()=>deleteBlog(ID)}>Delete Blog</button>}
    </section>
    
    </>
  )
}

export default DetailedBlog;