import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../../Blogs/Blogs.css";
import google from "../../images/google.png"
export default function Login(props) {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("authenticated", true);
      props.setAuthenticated(true);
      navigate("/BlogHome");
    });
  };
  return (
    <>
      <h3 className="text-center pt-5">Login to create your own blogs.</h3>
      <div className="login-div d-flex flex-column align-items-center my-5 mx-auto border border-dark p-5 shadow">
        <img src="./login-img.png" id="login-img" alt="login-img" />
        <h1>Login</h1>
        <p>Login With Google</p>
        <button
          className="btn btn-warning text-center login-btn"
          onClick={signInWithGoogle}
        >
          <img src={google} id="google-img" className="mx-2" />
          Login
        </button>
      </div>
    </>
  );
}
