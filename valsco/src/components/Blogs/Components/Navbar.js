import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth, provider } from "../firebase-config";
import "../../Blogs/Blogs.css";
import "./StyleBlog.css";

export default function Navbar(props) {


  let [click, setClick] = useState(true);
  let navigate = useNavigate();
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      props.setAuthenticated(false);
      localStorage.setItem("alertMsg","You have been successfully logged out!");
      props.setAlertMsg("You have been successfully logged out!");
      localStorage.setItem("alertColor","lightgreen");
      props.setAlertColor("lightgreen");
      navigate("/Login");
    });
  };
  return (
    <>

    <nav className={click ? "nav-bar" : "nav-bar-hamburger"}>
      <Link to="/" className="nav-bar-head">Valsco</Link>
      <ul>
        <li className="nav-li"><Link to="/" className="nav-Link">Home</Link></li>
        <li className="nav-li"><Link to="/BlogHome" className="nav-Link">Read-Blogs</Link></li>
        <li className="nav-li">
                {!props.authenticated? (
                  <Link className="nav-Link" to="/Login">
                    Create-New-Blog
                  </Link>
                ) : (
                  <Link className="nav-Link" to="/CreateBlog">
                    Create-New-Blog
                  </Link>
                )}
          </li>
          <li className="nav-li">
                {props.authenticated? (
                  <Link className="nav-Link" onClick={signUserOut}>
                    Logout
                  </Link>
                ) : (
                  <Link className="nav-Link" to="/Login">
                    Login
                  </Link>
                )}
          </li>
      
      </ul>

      <div className="hamburger-btn" onClick={() => setClick(!click)}>
          <div className="hamburger-d"></div>
          <div className="hamburger-d"></div>
          <div className="hamburger-d"></div>
        </div>
    </nav>
      

    </>
  );
}


