import './Contact.css';
import React from 'react';

function Contact() {
  return (
    <div className="complete">
      <div className="App">
        <div className="card-group">
          <div className="card">
            <img src={require("../../components/images/anime1.jpg")} className="car" alt="tp" />
            <div className="card-body">
              <h5 className="card-title">Lorem Ipsum</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="card">
            <img src={require("../../components/images/anime2.jpg")} className="cardu" alt="y" />
            <div className="card-body">
              <h5 className="card-title">Lorem Ipsum</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="card">
            <img src={require("../../components/images/anime3.jpg")} className="cardui" alt="p" />
            <div className="card-body">
              <h5 className="card-title">Lorem Ipsum</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="form">
        <h1>FUEL.</h1>
        <h1>ELEVATE.</h1>
        <h1>IGNITE YOUR</h1>
        <h1>SW SOLUTIONS.</h1>
        <div className="p-contact">
          <p>
            "Ready to take your business to the next level?" Contact us today
            and discover how Valsco can empower your success. Our dedicated team
            of experts is here to provide you with cutting-edge software
            solutions tailored to your specific needs. Reach out to us now to
            schedule a consultation and explore the possibilities. Let us
            transform your business and drive it towards greater efficiency,
            productivity, and growth. Don't wait - unlock your full potential
            with Valsco. Contact us today.
          </p>
          <br />
          <p>Experience the Valsco Difference, Request a Consultation Today!</p>
        </div>
        <div className="b-form">
          <form>
            <div className="form-row">
              <label htmlFor="inputEmail4">Name</label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="Your Name"
              />
            </div>
            <div className="form-row">
              <label htmlFor="inputEmail4">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="Your Email"
              />
            </div>
            <div className="form-row">
              <label htmlFor="inputAddress2">Number</label>
              <input
                type="tel"
                className="form-control"
                id="inputAddress2"
                placeholder="Your Contact number"
              />
            </div>
            <div className="form-row">
              <label htmlFor="inputCity">Company</label>
              <input
                type="text"
                className="form-control"
                id="inputCity"
                placeholder="Your Company/Organisation"
              />
            </div>
            <button type="submit" className="btn btn-primary transparent-button">
              Click to send your message
            </button>
          </form>
        </div>
      </div>
      <div className="bottom">
        <h1 id="ide">Have an Idea?</h1>
        <h1 id="tell">Tell us about It!</h1>
        <div className="privacy">
          <p1>valsco@gmail.com</p1>
          <p2>636 Broughton St</p2>
          <p2>Vancouver, BC V6G 3K3</p2>
          <p4>Privacy Policy</p4>
        </div>
      </div>
      <div className="foot">
        <div className="f">
          <div className="flex-center">
            <i className="fa fa-github fa-4x icon-3d" style={{ fontSize: '48px' }}></i>
            <i className="fa fa-twitter fa-4x icon-3d" style={{ fontSize: '48px' }}></i>
            <i className="fa fa-facebook fa-4x icon-3d" style={{ fontSize: '48px' }}></i>
            <i className="fa fa-instagram fa-4x icon-3d" style={{ fontSize: '48px' }}></i>
            <i className="fa fa-whatsapp fa-4x icon-3d" style={{ fontSize: '48px' }}></i>
          </div>
        </div>
      </div>
</div>

  );
}


export default Contact;