import "./LandingPage.css"
import React from "react"
import imgvalsco from '../images/img2.png'
import { Link } from "react-router-dom"

function LandingPage() {
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
                      <img src={require("../../components/images/newlogo.png")} id="tl" alt="Logo" />
                    </div>
                    <div className="col-md-3 up">
                      <div className="heading">
                        Valsco Technology
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
                          Home
                        </button>
                      </div>
                    </div>
                    <div className="col-1 a">
                      <div className="btn-group dropend">
                        <a
                          href="#productsrow2"
                          className="btn btn-info"
                          role="button"
                          id="productsb"
                          >Products</a
                        >
                      </div>
                    </div>
                    <div className="col-1 a">
                      <div className="btn-group dropend">
                        <a
                          href="#productsrow2"
                          className="btn btn-info"
                          role="button"
                          id="aboutusb"
                          >About us</a
                        >
                      </div>
                    </div>
                    <div className="col-1 a">
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
                </nav>
              </div>
            </div>
          </div>

          
          <div className="front">
            <div className="para">
              <h1 style={{ fontSize: "8vw" }}>VALSCO</h1>
              <p style={{ fontSize: "1.2vw" }} className="para1">
                Our company provides software products and services to businesses
                individuals to help them meet their software needs. We strive to
                specialize in developing software solutions tailored to the unique
                needs of our clients.
              </p>
            </div>
            <div className="img">
              <img src={require("../../components/images/newlogo.png")} alt="gb" />
            </div>
          </div>
        </div>
      </div>
 
      {/* <div className='imghovercontainer'>
      <img className="imghover" src={imgvalsco} alt="" />
    </div> */}

    </>
  )
}

export default LandingPage
