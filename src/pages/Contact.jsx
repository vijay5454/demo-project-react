import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeName,
  changePhone,
  changeEmail,
  changeTelephone,
  checkForm,
} from "../features/contact/contactSlice";

const Contact = () => {
  // const [selectedAccount, setSelectedAccount] = useState("");

  // const handleRadio = (e) => {
  //   setSelectedAccount(e.target.value);
  // };
  const { name, phoneNumber, email, telephone } = useSelector((store) => {
    return store.contact;
  });
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();
    const id = e.target.id;
    const value = e.target.value;
    if (id === "name") {
      dispatch(changeName(value));
    }
    if (id === "phoneNumber") {
      dispatch(changePhone(value));
    }
    if (id === "email") {
      dispatch(changeEmail(value));
    }
    if (id === "telephone") {
      dispatch(changeTelephone(value));
    }
  };

  return (
    <section className="contact">
      <div className="section-center">
        <div className="page-heading">
          <h1>Contact</h1>
          <span className="underline"></span>
        </div>
        <p>
          Name: Vijay K <br /> Phone Number: 9003324408 <br /> Email:
          vijayk90033@gmail.com
        </p>
        <form className="form-container">
          <h3>Your contact details</h3>
          <div className="inputs">
            <div className="input-container">
              <span className="input-detail">name</span>
              <input type="text" value={name} onChange={handleForm} id="name" />
            </div>
            <div className="input-container">
              <span className="input-detail">phone number</span>
              <input
                type="text"
                value={phoneNumber}
                onChange={handleForm}
                id="phoneNumber"
                placeholder="Enter 10 Digit"
              />
            </div>
            <div className="input-container">
              <span className="input-detail">email</span>
              <input
                type="text"
                value={email}
                onChange={handleForm}
                id="email"
              />
            </div>
            <div className="input-container">
              <span className="input-detail">telephone</span>
              <input
                type="text"
                value={telephone}
                onChange={handleForm}
                id="telephone"
                placeholder="Enter 10 digit"
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              dispatch(checkForm());
            }}
          >
            submit
          </button>
        </form>
        {/* <div className="account-details-list">
          <div className="account-details">
            <h4>1235525</h4>
            <h4>Every-day Savings</h4>
            <input
              type="radio"
              name="account-list"
              value="Every-day Savings"
              onClick={handleRadio}
            />
          </div>
          <div className="account-details">
            <h4>1235525</h4>
            <h4>Flexi Saver</h4>
            <input
              type="radio"
              name="account-list"
              value="Flexi Saver"
              onClick={handleRadio}
            />
          </div>
          <div className="account-details">
            <h4>1235525</h4>
            <h4>Club LLoyds Current</h4>
            <input
              type="radio"
              name="account-list"
              value="Club LLoyds Current"
              onClick={handleRadio}
            />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
