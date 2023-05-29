import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import "../../Blogs/Blogs.css";
export default function CreateBlog(props) {
  useEffect(() => {
    if (!props.authenticated) {
      navigate("/Login");
    }
  });
  const [title, setTitle] = useState("");
  const [temp,setTemp] = useState(false);
  const [postText, setPostText] = useState("");
  let navigate = useNavigate();
  const postsCollectionRef = collection(db, "blogPosts");

  if(temp===true){
    return (
      <div className="loader d-flex flex-column align-items-center justify-content-center my-5">
        <div className="p-4 border rounded-circle shadow">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        <span className="mt-4 fw-bold">... Submitting your blog ...</span>
      </div>
    );
  }

  const createBlogPost = async () => {
    setTemp(true);
    await addDoc(postsCollectionRef, {
      title: title,
      postText: postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    setTemp(false);
    navigate("/BlogHome");
    window.location.reload(false);
  };

  return (
    <>
      <div className="create-div d-flex flex-column mx-auto align-items-center m-5">
        <h1>Post Your Own Blog</h1>
        <input
          type="text"
          onChange={(event) => {
            setTitle(event.target.value);

          }}
          placeholder="Enter The Title Of The Blog"
          className="title-blog p-2 m-3 text-center"
        ></input>
        <textarea
          type="text"
          onChange={(event) => {
            setPostText(event.target.value);
          }}
          placeholder="Type Your Blog"
          className="type-blog p-2 m-3 text-center"
        ></textarea>
        <button className="btn btn-outline-dark" onClick={createBlogPost}>
          Submit Blog
        </button>
      </div>
    </>
  );
}
