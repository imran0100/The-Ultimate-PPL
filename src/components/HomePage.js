import React, { useState } from "react";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import logo from "../logo/WhatsApp Image 2023-07-12 at 9.58.35 AM.jpeg";
function HomePage() {
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [showSignUpPage, setShowSignUpPage] = useState(false);

  const handleShowSignUp = () => {
    setShowSignUpPage(!showSignUpPage);
    setShowLoginPage(false);
  };

  const handleShowLogin = () => {
    setShowLoginPage(!showLoginPage);
    setShowSignUpPage(false);
  };

  return (
    <div className="container">
      <div id="container-nav">
        <nav>
          <img className="link-item" src={logo} alt="logo" />

          <div>
            <a className="link-item" href="#" alt="login">
              Login
            </a>
            <a className="link-item" href="#">
              Signup
            </a>
          </div>
        </nav>
      </div>
      <section className="section">
        {showLoginPage && <LoginPage />}
        {showSignUpPage && <SignUpPage />}
        <div className="side">
          <h1>Latest Version Of EASA 2016 And 2021 Question Bank</h1>
          <p>
            Our database contains high percentage of REAL EXAM QUESTIONS.
            Students mark questions after their examination, then we eliminate
            questions according to feedback.
          </p>
          <div className="div-button">
            <button onClick={handleShowLogin}>Login</button>
            <button onClick={handleShowSignUp}>Signup</button>
          </div>
        </div>
        <div className="side-content"></div>
      </section>
    </div>
  );
}

export default HomePage;
