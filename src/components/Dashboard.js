// import React from "react";

// function Dashboard() {
//   return (
//     <div>
//       Choose Subject

//     </div>
//   );
// }

// export default Dashboard;
// import React, { useState } from "react";
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
//   },
//   {
//     id: 6,
//     subject: "Navigation",
//   },
//   {
//     id: 7,
//     subject: "Human performance and limitations",
//   },
//   {
//     id: 8,
//     subject: "Human performance and limitations",
//   },
//   {
//     id: 9,
//     subject: "Aircraft general knowledge",
//   },
// ];

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
//
import React from "react";
import "./Dashboard.css";

const data = [
  {
    id: 1,
    subject: "Air Law",
  },
  {
    id: 2,
    subject: "Principles of Flight",
  },
  {
    id: 3,
    subject: "Operational procedures",
  },
  {
    id: 4,
    subject: "Meteorology",
  },
  {
    id: 5,
    subject: "Flight planning and performance",
  },
  {
    id: 6,
    subject: "Navigation",
  },
  {
    id: 7,
    subject: "Human performance and limitations",
  },
  {
    id: 8,
    subject: "Human performance and limitations",
  },
  {
    id: 9,
    subject: "Aircraft general knowledge",
  },
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-section">
        <h2>Dashboard</h2>

        <div className="dashboard-section">
          <h3>User</h3>
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
              {data.map((book, index) => (
                <tr key={index}>
                  <td>{book.subject}</td>
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
