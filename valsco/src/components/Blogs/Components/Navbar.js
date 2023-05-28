import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth, provider } from "../firebase-config";
import "../../Blogs/Blogs.css";

export default function Navbar(props) {
  let navigate = useNavigate();
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      props.setAuthenticated(false);
      navigate("/Login");
    });
  };
  return (
    <>
       
 
    {/* <div className="container-fluid">
    <div className="animate_animated animate_slideInDown" id="top">
      <div className="row" id="row1">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-white p-3">
            <button
              type="button"
              className="btn btn dropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              id="homeb"
            >
              Home
            </button>
            <div className="btn-group dropend">
              <a
                href="#productsrow2"
                className="btn btn-info"
                role="button"
                id="productsb"
                >Products</a
              >
            </div>
            <div className="btn-group dropend">
              <a
                href="#productsrow2"
                className="btn btn-info"
                role="button"
                id="aboutusb"
                >About us</a
              >
            </div>
            <div className="btn-group dropend">
              <a
                href="#contactusrow2"
                className="btn btn-info"
                role="button"
                id="contactus"
                >Contact Us</a
              >
            </div>
          </div>
        </div>
        <nav className="navbar navbar-white bg-white">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="col-1 up" id="coll">
              <img src={require("./logooo.png")} id="tl" alt="Logo" />
            </div> 
            <div className="col-md-3 up">
              <div className="heading">
                Valsco Solutions
              </div>
            </div>
            <div className="col-1 offset-3 a" id="home">
              <div className="btn-group dropend">
                <button
                  type="button"
                  className="btn btn dropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  id="homeb"
                >
                  <Link to="/">
                  Home
                  </Link>
                </button>
              </div>
            </div>
            <div className="col-1 a">
              <div className="btn-group dropend">
                <Link
                  href="#productsrow2"
                  className="btn btn-info"
                  role="button"
                  id="productsb"
                  to="/BlogHome"
                  >ReadBlogs</Link>
              </div>
            </div>
            <div className="col-1 a">
              <div className="btn-group dropend">
                <Link
                  href="#productsrow2"
                  className="btn btn-info"
                  role="button"
                  id="aboutusb"
                  to="/CreateBlog"
                  >CreateBlog</Link>
              </div>
            </div>
            <div className="col-1 a">
              <div className="btn-group dropend">
                <Link
                  href="#contactusrow2"
                  className="btn btn-info"
                  role="button"
                  id="contactus"
                  to="/Login"
                  >Login</Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>  */}
  



















      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Valsco
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/BlogHome">
                  Read Blogs
                </Link>
              </li>
              <li className="nav-item">
                {!props.authenticated? (
                  <Link className="nav-link" to="/Login">
                    Create New Blog
                  </Link>
                ) : (
                  <Link className="nav-link" to="/CreateBlog">
                    Create New Blog
                  </Link>
                )}
              </li>
              <li className="nav-item">
                {props.authenticated? (
                  <Link className="nav-link" onClick={signUserOut}>
                    Logout
                  </Link>
                ) : (
                  <Link className="nav-link" to="/Login">
                    Login
                  </Link>
                )}
              </li>
          
                {
                  props.authenticated && auth.currentUser && <li className="nav-item"><Link className="nav-link">Hello {((auth.currentUser.displayName).split(" "))[0]}!</Link></li>
                }


            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
