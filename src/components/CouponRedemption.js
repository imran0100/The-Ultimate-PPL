import React, { useState } from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
const stripePromise = loadStripe(
  "pk_test_51MYrlQSBOK5WbW7oyfnjX5kZbxcMFV0bcfTQlDOLxemgSnVMod572mbTTfiwZhOrcQBxJFKuXZUi0Avnc9x7E1ao006ElkCEjY"
);

const CouponRedemption = () => {
  const [couponCode, setCouponCode] = useState("");
  const [redeemError, setRedeemError] = useState("");

  const handleRedeem = async () => {
    try {
      const stripe = await stripePromise;

      // Send the coupon code to the backend to verify and apply the coupon
      const response = await axios.post(
        "http://localhost:3001/api/redeem-coupon",
        { couponCode }
      );

      // If the backend responds with a client_secret, initiate the payment
      if (response.data.client_secret) {
        const result = await stripe.confirmCardPayment(
          response.data.client_secret,
          {
            payment_method: {
              card: elements.getElement(CardElement),
              billing_details: {
                // Add billing details here
              },
            },
          }
        );

        // Handle the payment result, show success or error message to the user
        if (result.error) {
          // Payment failed
        } else {
          // Payment succeeded
        }
      }
    } catch (error) {
      setRedeemError("Error redeeming coupon.");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
        placeholder="Enter Coupon Code"
      />
      <button onClick={handleRedeem}>Redeem Coupon</button>
      {redeemError && <p>{redeemError}</p>}
    </div>
  );
};

export default CouponRedemption;
