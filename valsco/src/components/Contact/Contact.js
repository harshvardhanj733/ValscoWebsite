import React, { useState } from "react";
import "./Contact.css";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import validator from 'validator';

const PHONE_REGEX = new RegExp(
  /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,3}[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,4}$/
);

function Contact() {
  const {
    handleSubmit,
    formState: { errors },
    control
  } = useForm();

  const [isButtonClicked, setIsButtonClicked] = useState(false); // State variable to track button click
  const [num, setnum] = useState(0);
  
  const [errorMessage, setErrorMessage] = useState(null); // State variable to track button click
  const [bi, setbi] = useState(0);

  function Convert(event){
    setnum(event.target.value);
  }

  const handleFormSubmit = (data) => {
    setIsButtonClicked(true); // Set the state to indicate button click
    console.log(data.phoneInput); // Log the phone input value
    // Perform form submission logic here
  
    const isIndianNumber = data.phoneInput.startsWith('+91');
    const isValidIndianNumber = isIndianNumber && data.phoneInput.length === 13;
  
    if (isIndianNumber && !isValidIndianNumber) {
      // Invalid Indian phone number, display error message
      setErrorMessage('*Invalid number');
      return;
    }
  
    // Non-Indian phone number or valid Indian phone number, continue with form submission logic
    setbi(1);
    setErrorMessage(null);
    // Perform your form submission logic here
  };  
  

  const handleValidate = (phoneNumber) => {
    if (PHONE_REGEX.test(phoneNumber)) {
      errors["phone-input"] && delete errors["phone-input"];
      if (
        phoneNumber.length === 10 &&
        phoneNumber.startsWith("91")
      ) {
        // Valid Indian phone number
        return true;
      } else {
        // Valid phone number (non-Indian)
        return true;
      }
    } else {
      errors["phone-input"] = {
        type: "manual",
        message: "Invalid phone number. Please try again."
      };
      return false;
    }
  };
  return (
    <div className="complete">
      <div className="App">
        <div className="card-group" id="aboutus">
          <div className="card">
            <img src={require("../../components/images/i2.jpg")} className="cardu" alt="y" />
            <div className="card-body">
              <h5 className="card-title">Ayan Bhowal</h5>
              <p className="card-text">
                Co-Founder
              </p>
            </div>
          </div>
          <div className="card">
            <img src={require("../../components/images/i11.jpg")} className="car" alt="tp" />
            <div className="card-body">
              <h5 className="card-title">Sanidhya Agarwal</h5>
              <p className="card-text">
                Founder
              </p>
            </div>
          </div>
          <div className="card">
            <img src={require("../../components/images/i32.jpg")} className="cardui" alt="p" />
            <div className="card-body">
              <h5 className="card-title">Srishti Jain</h5>
              <p className="card-text">
                Co-Founder
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
        <div className="b-form" id = "contactusrow2">
          <form onSubmit={handleSubmit(handleFormSubmit)}>
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
              <div>
                <label htmlFor="phone-input">Phone Number</label>
                <Controller
                  name="phoneInput" // Make sure this matches the name used in data.phoneInput
                  control={control}
                  rules={{
                    validate: (value) => handleValidate(value)
                  }}
                  render={({ field: { onChange, value } }) => (
                    <PhoneInput
                      value={value}
                      onChange={onChange}
                      defaultCountry="IN"
                      id="phone-input"
                      className={errorMessage !== null ? "yt" : ""}
                    />
                  )}
                />
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                {/* {!!errors["phone-input"] && (
                  <p style={{ color: "red" }}>{errors["phone-input"].message}</p>
                )} */}
              </div>
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
            <button
            type="submit"
            className="btn btn-primary transparent-button"
            id="buton"
            // disabled={!!errors["phone-input"]}
          >
            Click to send your message
          </button>
          </form>
        </div>
      </div>
      <div className="bottom">
        <h1 id="ide">Have an Idea?</h1>
        <h1 id="tell">Tell us about It!</h1>
        <div className="privacy">
          <p1>valscotech@gmail.com</p1>
          <p2>J-3 SHAHABDI ENCLAVE</p2>
          <p2>NOIDA, UTTAR PRADESH 201301</p2>
          <p4>Privacy Policy</p4>
        </div>
      </div>
      <div className="foot">
        <div className="f">
          <div className="flex-center">
            <i className="fa fa-github fa-4x icon-3d" style={{ fontSize: '48px' }}></i>
            <i className="fa fa-twitter fa-4x icon-3d" style={{ fontSize: '48px' }}></i>
            <i className="fa fa-facebook fa-4x icon-3d" style={{ fontSize: '48px' }}></i>
            <a href="https://instagram.com/vals.co_tech?igshid=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram fa-4x icon-3d" style={{ fontSize: '48px' }}></i>
            </a>
            <a href="https://www.linkedin.com/company/valscotech/?fbclid=PAAaZ3ATa670NzIC1DB7OLSwzO9bOqISugzSF9Bs-sWUJjBBKLuYvnkm-qUJw" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin fa-4x icon-3d" style={{ fontSize: '48px' }}></i>
            </a>
          </div>
        </div>
      </div>
    </div>

  );
}


export default Contact;
