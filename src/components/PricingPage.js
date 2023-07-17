import React from "react";
import "./PricingPage.css";
import ReactScrollAnimation from "react-scroll-animation";
import "animate.css/animate.min.css"; // Import the animation styles

const PricingPage = () => {
  return (
    <div className="Pricing-Section">
      <h2>Choose Pricing</h2>
      <ReactScrollAnimation animateIn="slideInRight" animateOnce={true}>
        <div className="pricing-page">
          <div className="pricing-plan">
            <h2 className="plan-name">Basic Plan</h2>
            <p className="plan-price">$9.99/month</p>
            <ul className="plan-features">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <div className="button-wrapper">
              <button className="plan-button">Select Plan</button>
            </div>
          </div>
          {/* <ReactScrollAnimation animateIn="zoomIn" animateOnce={true}> */}
          <div className="pricing-plan">
            <h2 className="plan-name">Pro Plan</h2>
            <p className="plan-price">$19.99/month</p>
            <ul className="plan-features">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <div className="button-wrapper">
              <button className="plan-button">Select Plan</button>
            </div>
          </div>
          {/* </ReactScrollAnimation> */}
          {/* <ReactScrollAnimation animateIn="slideInLeft" animateOnce={true}> */}
          <div className="pricing-plan">
            <h2 className="plan-name">Premium Plan</h2>
            <p className="plan-price">$29.99/month</p>
            <ul className="plan-features">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <div className="button-wrapper">
              <button className="plan-button">Select Plan</button>
            </div>
          </div>
          {/* </ReactScrollAnimation> */}
        </div>
      </ReactScrollAnimation>
    </div>
  );
};

export default PricingPage;
