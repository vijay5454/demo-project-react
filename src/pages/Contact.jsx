import { useState } from "react";

const Contact = () => {
  // const [selectedAccount, setSelectedAccount] = useState("");

  // const handleRadio = (e) => {
  //   setSelectedAccount(e.target.value);
  // };
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
