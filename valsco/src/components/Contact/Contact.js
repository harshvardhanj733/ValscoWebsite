import React, { useState } from "react";
import "./Contact.css";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import validator from 'validator';

const backendURL = "http://localhost:5000";

const PHONE_REGEX = new RegExp(
  /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,3}[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,4}$/
);

function Contact() {
  // const {
  //   handleSubmit,
  //   formState: { errors },
  //   control
  // } = useForm();

  const [newContact, setNewContact] = useState({ name: '', email: '', number: '', company: '' })

  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true
    }
    return false
  }

  function phonenumber(inputtxt) {
    var phoneno = /^\d{10}$/;
    if (inputtxt.match(phoneno)) {
      return true;
    }
    else {
      return false;
    }
  }

  const handleOnChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value })
  }

  // const [isButtonClicked, setIsButtonClicked] = useState(false); // State variable to track button click
  // const [num, setnum] = useState(0);

  // const [errorMessage, setErrorMessage] = useState(null); // State variable to track button click
  // const [bi, setbi] = useState(0);

  // function Convert(event) {
  //   setnum(event.target.value);
  // }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // setIsButtonClicked(true); // Set the state to indicate button click
    // console.log(data.phoneInput); // Log the phone input value
    // Perform form submission logic here

    // const isIndianNumber = data.phoneInput.startsWith('+91');
    // const isValidIndianNumber = isIndianNumber && data.phoneInput.length === 13;

    // if (isIndianNumber && !isValidIndianNumber) {
    //   // Invalid Indian phone number, display error message
    //   setErrorMessage('*Invalid number');
    //   return;
    // }

    // // Non-Indian phone number or valid Indian phone number, continue with form submission logic
    // setbi(1);
    // setErrorMessage(null);
    // Perform your form submission logic here

    const url = "https://website-bad9f-default-rtdb.asia-southeast1.firebasedatabase.app/contactUsRecords.json"

    try {
      if (ValidateEmail(newContact.email) && phonenumber(newContact.number) && newContact.name.length >= 3 && newContact.company.length >= 3) {
        const response = await fetch(url, {
          method: "POST",
          mode: "cors",
          headers: {
            'Content-Type': "application/json"
          },
          body: JSON.stringify({ name: newContact.name, email: newContact.email, number: newContact.number, company: newContact.company })
        })
        console.log(response);
        alert("Succesfully submitted");

        let savedEmail = newContact.email;
        let savedName = newContact.name;
        setNewContact({ name: '', email: '', number: '', company: '' });
        // const response2 = await fetch(backendURL, {
        //   method: "POST",
        //   mode: "cors",
        //   headers: {
        //     'Content-Type': "application/json"
        //   },
        //   body: JSON.stringify({ name:savedName, email: savedEmail })
        // })


      }
      else {
        if(newContact.name.length < 3){
          alert("Please Fill The Name Correctly. Name Should Be Atleast 3 Characters Long");
        }
        else if(!ValidateEmail(newContact.email)){
          alert("Please Fill The Email Correctly")
        }
        else if(!phonenumber(newContact.number)){
         
          if(!isNaN(newContact.number)){
             alert(`Please Fill Phone Number Correctly. Phone Number Must Be Only 10 Digits Long. Currently You Have Filled ${newContact.number.length} digits.`)
          }
          else{
            alert('Please Fill Phone Number Correctly. Phone Number Must Be Only 10 Digits Long. It should not contain any Alphabets or Special Characters.')
          }
        }
        else{
          alert("Company Should Be Atleast 3 Characters Long")
        }
      }

    } catch (error) {
      alert(`The Following Error Occured: ${error}.\nKindly Try Again!`)
      setNewContact({ name: '', email: '', number: '', company: '' });
    }

  };


  // const handleValidate = (phoneNumber) => {
  //   if (PHONE_REGEX.test(phoneNumber)) {
  //     errors["phone-input"] && delete errors["phone-input"];
  //     if (
  //       phoneNumber.length === 10 &&
  //       phoneNumber.startsWith("91")
  //     ) {
  //       // Valid Indian phone number
  //       return true;
  //     } else {
  //       // Valid phone number (non-Indian)
  //       return true;
  //     }
  //   } else {
  //     errors["phone-input"] = {
  //       type: "manual",
  //       message: "Invalid phone number. Please try again."
  //     };
  //     return false;
  //   }
  // };
  return (
    <div id="aboutuspage" className="complete">
      <div className="abtus">
        <div className="header">
          <h1>WHO WE ARE</h1>
        </div>
        <div className="content">
          <p>We excel in creating personalized software solutions designed to cater specifically to our clients' individual requirements. We recognize that committing to software investments is a significant choice for any business.</p>
        </div>
        <div className="info">
          <img src={require("../../components/images/abt.jpeg")} className="float-left" alt="y" />
          <p1>OUR PEOPLE COME FIRST</p1><br></br>
          <p className="peoppara">Valsco specializes in developing custom software solutions that are tailored to meet the
            unique needs of the clients. We understand that investing in software solutions is a big
            decision for any business. That is why we offer a comprehensive range of services that
            go beyond just software development. Our consulting, training, and support services are
            designed to ensure that our clients can get the most out of their needs and visions.
            Valsco focuses on innovation and development. This involves constantly exploring new
            technologies, methods, and processes to create software solutions that are more
            efficient, effective, and user-friendly.
            In addition to innovation, we as a company also focus on improving its products,
            processes, and services. This involves regularly evaluating the effectiveness of existing
            solutions and identifying areas for improvement. Continuous improvement ensures that
            our company is always of the highest quality and offers maximum value to customers.
            Our team of experienced developers, designers, and project managers work closely with
            our clients to ensure that their software solutions are not only user-friendly, but also
            efficient and effective.</p>
        </div>
      </div>
      <div className="App">
        <div className="card-group" id="aboutus">
          <div className="card">
            <img src={require("../../components/images/i2.jpg")} className="cardu" alt="y" />
            <div className="card-body">
              <h5 className="card-title">Ayan Bhowal</h5>
              <p className="card-text">
                Co-Founder
              </p>
              <p className="ap">Ayan Bhowal is our approachable, dependable, and vastly talented Director. With his composed and collected demeanor and persistent drive, Valsco is positioned to prosper and thrive.</p>
            </div>
          </div>
          <div className="card">
            <img src={require("../../components/images/i11.jpg")} className="car" alt="tp" />
            <div className="card-body">
              <h5 className="card-title">Sanidhya Agarwal</h5>
              <p className="card-text">
                Founder
              </p>
              <p className="sap">Sanidhya Agarwal, our Managing Director, has amazing leadership qualities and a very advanced and holistic vision for Valsco. With his keen eye for detall and strive for perfection, he Is the perfect captain of the Valsco ship.</p>
            </div>
          </div>
          <div className="card">
            <img src={require("../../components/images/i32.jpg")} className="cardui" alt="p" />
            <div className="card-body">
              <h5 className="card-title">Srishti Jain</h5>
              <p className="card-text">
                Co-Founder
              </p>
              <p className="sp">Srishti Jain, our Director, is dependable, resourceful and always ready to take up challenges. With an amazing team spirit, she brings to the Valsco table amazing skills and proficiency</p>
            </div>
          </div>
        </div>
      </div>
      <div id="contactuspage" className="form">
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
        <div  className="b-form" id="contactusrow2">
          {/* <form onSubmit={handleFormSubmit}> */}
          <form method="POST" action={backendURL}>
            <div className="form-row">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                onChange={handleOnChange}
                value={newContact.name}
                placeholder="Your Name"
                name="name"
              />
            </div>
            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                onChange={handleOnChange}
                value={newContact.email}
                placeholder="Your Email"
                name="email"
              />
            </div>
            <div className="form-row">
              <div>
                <label htmlFor="number">Phone Number</label>
                <input
                type="tel"
                className="form-control"
                id="number"
                onChange={handleOnChange}
                value={newContact.number}
                placeholder="Your Phone Number"
                name="number"
              />
                {/* <Controller
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
                {errorMessage && <p className="error-message">{errorMessage}</p>} */}
                {/* {!!errors["phone-input"] && (
                  <p style={{ color: "red" }}>{errors["phone-input"].message}</p>
                )} */}
              </div>
            </div>
            <div className="form-row">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                className="form-control"
                id="company"
                onChange={handleOnChange}
                value={newContact.company}
                placeholder="Your Company/Organisation"
                name="company"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary transparent-button"
              id="buton"
              onClick={handleFormSubmit}
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