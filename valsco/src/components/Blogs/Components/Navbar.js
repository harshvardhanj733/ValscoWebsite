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
      localStorage.setItem(
        "alertMsg",
        "You have been successfully logged out!"
      );
      props.setAlertMsg("You have been successfully logged out!");
      localStorage.setItem("alertColor", "lightgreen");
      props.setAlertColor("lightgreen");
      navigate("/Login");
    });
  };
  return (
    <>
      <div className="wrapper">
        <div className="main">
          <div className="container-fluid">
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
                      <Link to="/" className="navbarLink">Home</Link>
                    </button>
                    <div className="btn-group dropend">
                      <Link
                        to="/BlogHome"
                        className="btn btn-info"
                        role="button"
                        id="productsb"
                      >
                        Read-Blogs
                      </Link>
                    </div>
                    <div className="btn-group dropend">
                      {!props.authenticated ? (
                        <Link
                          to="/Login"
                          className="btn btn-info"
                          role="button"
                          id="aboutusb"
                        >
                          Create-Blog
                        </Link>
                      ) : (
                        <Link
                          to="/CreateBlog"
                          className="btn btn-info"
                          role="button"
                          id="aboutusb"
                        >
                          Create-Blog
                        </Link>
                      )}
                    </div>
                    <div className="btn-group dropend">
                      {props.authenticated ? (
                        <Link
                          onClick={signUserOut}
                          className="btn btn-info"
                          role="button"
                          id="contactus"
                        >
                          Logout
                        </Link>
                      ) : (
                        <Link
                          to="/Login"
                          className="btn btn-info"
                          role="button"
                          id="contactus"
                        >
                          Login
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
                <nav className="navbar" id="pl">
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
                      <img
                        src={require("../../../components/images/newlogo.png")}
                        id="tl"
                        alt="Logo"
                      />
                    </div>
                    <div className="col-md-3 up">
                      <div className="heading">Valsco Technology</div>
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
                          <Link to="/" className="navbarLink">
                            Home
                          </Link>
                        </button>
                      </div>
                    </div>
                    <div className="col-1 a">
                      <div className="btn-group dropend">
                        <Link
                          to="/BlogHome"
                          className="btn btn-info"
                          role="button"
                          id="productsb"
                        >
                          Read-Blog
                        </Link>
                      </div>
                    </div>
                    <div className="col-1 a">
                      <div className="btn-group dropend">
                        {!props.authenticated ? (
                          <Link
                            to="/Login"
                            className="btn btn-info"
                            role="button"
                            id="aboutusb"
                          >
                            Create-Blog
                          </Link>
                        ) : (
                          <Link
                            to="/CreateBlog"
                            className="btn btn-info"
                            role="button"
                            id="aboutusb"
                          >
                            Create-Blog
                          </Link>
                        )}
                      </div>
                    </div>
                    <div className="col-1 a">
                      <div className="btn-group dropend">
                        {props.authenticated ? (
                          <Link
                            onClick={signUserOut}
                            className="btn btn-info"
                            role="button"
                            id="contactus"
                          >
                            Logout
                          </Link>
                        ) : (
                          <Link
                            to="/Login"
                            className="btn btn-info"
                            role="button"
                            id="contactus"
                          >
                            Login
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <nav className={click ? "nav-bar" : "nav-bar-hamburger"}>
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
    </nav> */}
    </>
  );
}
