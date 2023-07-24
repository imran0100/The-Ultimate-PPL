// // import React from "react";

// // function Dashboard() {
// //   return (
// //     <div>
// //       Choose Subject

// //     </div>
// //   );
// // }

// // export default Dashboard;
// // import React, { useState } from "react";
// import "./Dashboard.css";

// const Dashboard = () => {
//   const [username, setUsername] = useState("");
//   const [isLoggedOut, setIsLoggedOut] = useState(false);

//   const handleUsernameClick = () => {
//     setIsLoggedOut(true);
//   };

//   const handleLogout = () => {
//     setUsername("");
//     setIsLoggedOut(false);
//   };

//   const handleBookSelection = (book) => {
//     // Handle book selection logic here
//     console.log("Selected book:", book);
//   };

//   return (
//     <div className="dashboard-container">
//       <div className="sidebar">
//         <div className="username" onClick={handleUsernameClick}>
//           {isLoggedOut ? "Logged Out" : username || "Guest"}
//         </div>
//         {username && !isLoggedOut && (
//           <button className="logout-btn" onClick={handleLogout}>
//             Logout
//           </button>
//         )}
//       </div>
//       <div className="main-content">
//         <h2>Dashboard</h2>
//         <div className="book-options">

//         </div>
//       </div>
//     </div>
//   );
// };

// import "./Dashboard.css";
// const data = [
//   {
//     id: 1,
//     subject: "Air Law",
//   },
//   {
//     id: 2,
//     subject: "Principles of Flight",
//   },
//   {
//     id: 3,
//     subject: "Operational procedures",
//   },
//   {
//     id: 4,
//     subject: "Meteorology",
//   },
//   {
//     id: 5,
//     subject: "Flight planning and performance",
// //   },
// //   {
// //     id: 6,
// //     subject: "Navigation",
// //   },
// //   {
// //     id: 7,
// //     subject: "Human performance and limitations",
// //   },
// //   {
// //     id: 8,
// //     subject: "Human performance and limitations",
// //   },
// //   {
// //     id: 9,
// //     subject: "Aircraft general knowledge",
// //   },
// // ];

// const Dashboard = () => {
//   return (
//     <div className="dashboard-container">
//       <div className="dashboard-section">
//         <h2>Dashboard</h2>

//         <div className="dashboard-section">
//           <h3>User</h3>
//         </div>
//       </div>

//       <hr className="dashboard-divider" />
//       <h3>Select a Subject:</h3>
//       <div className="dashboard-section">
//         <div className="subject-options">
//           {data.map((item) => {
//             return <div>{item.subject}</div>;
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// export default Dashboard;

import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://13.127.37.70:5000/api/v1/get_allsubjectlist"
        );

        setSubjects(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const navigate = useNavigate();

  const handleProgress = () => {
    navigate("/progress");
  };
  const handleLogout = () => {
    localStorage.removeItem("user_322");
    navigate("/");
  };
  const handleTest = (id) => {
    navigate(`/tttt/${id}`);
  };
  let user = JSON.parse(localStorage.getItem("user_322"));
  console.log(user.first_name);
  return (
    <div className="dashboard-container">
      <div className="dashboard-section">
        <h2>Dashboard</h2>

        <div className="dashboard-section">
          <h3>{user.first_name}</h3>
          <div>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
            <button onClick={handleProgress} className="see-progress-btn">
              See Your Progress
            </button>
          </div>
        </div>
      </div>

      <hr className="dashboard-divider" />

      <div className="dashboard-section">
        <div className="book-table">
          <table>
            <thead>
              <tr>
                <th> Select a Subject</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((book, index) => (
                <tr onClick={() => handleTest(book.sub_id)} key={book.sub_id}>
                  <td>{book.sub_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
//////////////////////////////////////////////////////////////////////////////////////////////
