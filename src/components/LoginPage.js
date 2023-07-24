// // import React, { useState } from "react";
// // import "./Login.css"; // Import the CSS file
// // import { Link } from "react-router-dom";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";
// // const LoginPage = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [errors, setErrors] = useState({});
// //   const navigate = useNavigate();

// //   const handleLogin = () => {
// //     let admin = false;
// //     if (admin) {
// //       navigate("/admin");
// //     } else {
// //       navigate("/dashboard");
// //     }
// //   };
// //   const validateForm = () => {
// //     let isValid = true;
// //     const errors = {};

// //     // Email validation
// //     if (!email) {
// //       isValid = false;
// //       errors.email = "Email is required";
// //     } else if (!/\S+@\S+\.\S+/.test(email)) {
// //       isValid = false;
// //       errors.email = "Email is invalid";
// //     }

// //     // Password validation
// //     if (!password) {
// //       isValid = false;
// //       errors.password = "Password is required";
// //     }

// //     setErrors(errors);
// //     return isValid;
// //   };
// //   ////////////////////////////////////////////////////////////////////////

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     if (validateForm()) {
// //       //I3ran3@gmail.com //8820768204
// //       // Form is valid, proceed with login logic
// //       const userData = {
// //         email,
// //         password,
// //       };

// //       axios
// //         .post("http://13.127.37.70:5000/api/v1/signin", userData)
// //         .then((response) => {
// //           // Handle the successful response from the API
// //           console.log("Login successful!");
// //           console.log(response.data); // You may log the response or perform other actions as needed
// //           localStorage.setItem("user_322", JSON.stringify(response.data.data));
// //         })
// //         .catch((error) => {
// //           // Handle errors that occur during the API call
// //           console.error("Error during login:", error.massage);
// //         });
// //       // For example, make an API call to authenticate the user

// //       handleLogin();
// //       console.log("Login successful!");
// //     }
// //   };

// //   return (
// //     <div className="login-container">
// //       <form className="login-form" onSubmit={handleSubmit}>
// //         <div className="form-group">
// //           <label>Email:</label>
// //           <input
// //             type="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //           />
// //           {errors.email && <span className="error">{errors.email}</span>}
// //         </div>
// //         <div className="form-group">
// //           <label>Password:</label>
// //           <input
// //             type="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //           />
// //           {errors.password && <span className="error">{errors.password}</span>}
// //         </div>
// //         <button type="submit" className="submit">
// //           Login
// //         </button>
// //         <p className="signup-message">
// //           Don't have an account? <Link to="/signup">Sign up here</Link>
// //         </p>
// //       </form>
// //     </div>
// //   );
// // };

// // export default LoginPage;
// import React, { useState } from "react";
// import "./Login.css"; // Import the CSS file
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     let admin = false;
//     if (admin) {
//       navigate("/admin");
//     } else {
//       navigate("/dashboard");
//     }
//   };

//   const validateForm = () => {
//     let isValid = true;
//     const errors = {};

//     // Email validation
//     if (!email) {
//       isValid = false;
//       errors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       isValid = false;
//       errors.email = "Email is invalid";
//     }

//     // Password validation
//     if (!password) {
//       isValid = false;
//       errors.password = "Password is required";
//     }

//     setErrors(errors);
//     return isValid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       const userData = {
//         email,
//         password,
//       };

//       axios
//         .post("http://13.127.37.70:5000/api/v1/signin", userData)
//         .then((response) => {
//           console.log("Login successful!");
//           console.log(response.data);
//           localStorage.setItem("user_322", JSON.stringify(response.data.data));
//           handleLogin();
//         })
//         .catch((error) => {
//           console.error("Error during login:", error.response.data.massage);
//           if (error.response && error.response.data) {
//             setErrors(error.response.data); // Update the errors state with the API response error data
//           } else {
//             setErrors({ general: "An error occurred during login." });
//           }
//         });
//     }
//   };

//   return (
//     <div className="login-container">
//       <form className="login-form" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           {errors.email && <span className="error">{errors.email}</span>}
//         </div>
//         <div className="form-group">
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           {errors.password && <span className="error">{errors.password}</span>}
//         </div>
//         {errors.general && <span className="error">{errors.general}</span>}
//         <button type="submit" className="submit">
//           Login
//         </button>
//         <p className="signup-message">
//           Don't have an account? <Link to="/signup">Sign up here</Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;
import React, { useState } from "react";
import "./Login.css"; // Import the CSS file
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleLogin = () => {
    let admin = false;
    if (admin) {
      navigate("/admin");
    } else {
      navigate("/dashboard");
    }
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const userData = {
        email,
        password,
      };

      axios
        .post("http://13.127.37.70:5000/api/v1/signin", userData)
        .then((response) => {
          console.log("Login successful!");
          console.log(response.data);
          localStorage.setItem("user_322", JSON.stringify(response.data.data));
          handleLogin();
        })
        .catch((error) => {
          console.error("Error during login:", error.response?.data);

          if (
            error.response &&
            error.response.data &&
            error.response.data.message
          ) {
            setErrors({ general: error.response.data.message });
          } else {
            setErrors({ general: "An error occurred during login." });
          }
        });
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
        {errors.general && <span className="error">{errors.general}</span>}
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
