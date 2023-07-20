import React, { useState } from "react";
import "./Login.css"; // Import the CSS file
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };
  const validateForm = () => {
    let isValid = true;
    const errors = {};

    // Email validation
    if (!email) {
      isValid = false;
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      isValid = false;
      errors.email = "Email is invalid";
    }

    // Password validation
    if (!password) {
      isValid = false;
      errors.password = "Password is required";
    }

    setErrors(errors);
    return isValid;
  };
  ////////////////////////////////////////////////////////////////////////

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, proceed with login logic
      // For example, make an API call to authenticate the user
      const dummyUserData = {
        email: "testuser@example.com",
        password: "testpassword",
      };

      localStorage.setItem("user", JSON.stringify(dummyUserData));
      handleLogin();
      console.log("Login successful!");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <button type="submit" className="submit">
          Login
        </button>
        <p className="signup-message">
          Don't have an account? <Link to="/signup">Sign up here</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
