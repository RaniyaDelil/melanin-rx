import React, { useState } from 'react';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';

export function Home() {
  // state to store sign ups
  const [signUps, setSignUps] = useState([]);

  // state to store inputs
  const [phoneNumber, setPhoneNumber] = useState('');

  // state to check valid input
  const [inputError, setInputError] = useState(false);

  // handle sign-up submission via entry of button
  const handleAction = (inputPhoneNumber) => {
    if (inputPhoneNumber && inputPhoneNumber.length === 10 && !isNaN(inputPhoneNumber)) {
      setSignUps(prevSignUps => [...prevSignUps, inputPhoneNumber]);
      setInputError(false);
      alert(`Thank you! We will notify you at ${inputPhoneNumber} when Spark! BookPals is ready for WhatsApp`);
      setPhoneNumber('');
    } else {
      setInputError(true); // bad submission
      setPhoneNumber('');
      alert('You didn\'t enter a valid 10 digit number. Please try again if you wish to be notified.');
    }
  };

  // handle sign-up submission
  const handleSignUp = () => {
    handleAction(phoneNumber);
  };

  // handle WhatsApp button click
  const handleWhatsAppButtonClick = () => {
    const phoneNumberInput = prompt('Please enter a phone number to be used for notification by WhatsApp:');
    setPhoneNumber(phoneNumberInput);
    handleAction(phoneNumberInput);
  };

  return (
    <div className="overall">
      <NavBar />
      <div>
        <h1> Welcome to Spark! BookPals</h1>
        <p>Spark! BookPals is a revolutionary platform for Boston University's community.
          BU students and affiliates can connect with each other to share book recommendations,
          start in-depth discussions, and more! Our unique features allows users to filter books
          based on genres and complexity, among other things. Stay up-to-date through SMS,
          Signal, and whatsapp notifications whenever a book you may be interested in is discussed!</p>

        <h2>Sign Up</h2>
        <p>Sign up for notifications</p>
        <div>
          <input
            type="text"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button onClick={handleSignUp}>Add</button>
          <p style={{color:'red'}}>Please enter a valid 10-digit phone number.</p>
        </div>

        <h2>Numbers that have signed up</h2>
        <ul>
          {signUps.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>

        <div className="signup-section">
          <h2>Want to try it out?</h2>
            <center>
              <button className="whatsapp" onClick={handleWhatsAppButtonClick}>
                <img src="..\..\public\whatsapp.svg" className="logo"/>Join for WhatsApp
              </button>
            </center>
        </div>

      </div>
      <Footer />
    </div>
  );
}
