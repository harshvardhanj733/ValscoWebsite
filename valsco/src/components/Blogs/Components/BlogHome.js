import React from "react";
import { collection , getDocs ,deleteDoc, doc } from "firebase/firestore";
import {auth ,  db} from "../firebase-config";
import { useBlogContext } from "../context/BlogContext";
import Blog from "./Blog";
// import "../../Blogs/Blogs.css";
import "./StyleBlog.css";
export default function BlogHome(props)
{
    const {isLoading,blogs,getPosts} = useBlogContext();
    const postsCollectionRef = collection(db,"blogPosts");
    if(isLoading===true)
    {
      return <div className="loader"><div className="lds-ring"><div></div><div></div><div></div><div></div></div></div>
    }

  

    
    return(
        <div className="blog-card-container">

        {blogs.map((currentElement)=>{
            return <Blog key={currentElement.id}{...currentElement} authenticated={props.authenticated} setAlertMsg={props.setAlertMsg} setAlertColor={props.setAlertColor}/>
        })}
       
        </div>

    );
}