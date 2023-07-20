// import React from "react";
// import CircleProgress from "./CircleProgress";

// function UserProgress() {

//   return (
//     <div>
//       {data.subjects.map((subject) => (
//         <div key={subject.id}>
//           <p>
//             Subject Name: {subject.name}
//             <CircleProgress percentage={subject.percentage} />
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default UserProgress;
import React from "react";
import CircleProgress from "./CircleProgress";
import "./UserProgress.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";

function UserProgress() {
  // ... your existing code ...
  const data = {
    studentName: "John Doe",
    rollNumber: "12345",
    subjects: [
      {
        id: 1,
        name: "Air Law",
        percentage: 85.5,
      },
      {
        id: 2,
        name: "Principles of Flight",
        percentage: 78.2,
      },
      {
        id: 3,
        name: "Operational procedures",
        percentage: 92.0,
      },
      {
        id: 4,
        name: "Meteorology",
        percentage: 70.8,
      },
      {
        id: 5,
        name: "Communications",
        percentage: 88.5,
      },
      {
        id: 6,
        name: "Flight planning and performance",
        percentage: 94.3,
      },
      {
        id: 7,
        name: "Navigation",
        percentage: 81.7,
      },
      {
        id: 8,
        name: "Human performance and limitations",
        percentage: 76.9,
      },
      {
        id: 9,
        name: "Aircraft general knowledge",
        percentage: 79.5,
      },
    ],
  };
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1); // Navigate back in the browser history
  };
  return (
    <>
      <div className="book-table">
        <table>
          <thead>
            <tr>
              <th>Subject</th>

              <th>Progress</th>
            </tr>
          </thead>
          <tbody>
            {data.subjects.map((book, index) => (
              <tr key={index}>
                <td>{book.name}</td>
                {console.log(book.percentage)}
                <td>{book.percentage}%</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="back" onClick={handleGoBack}>
          Go to Dashboard
        </button>
      </div>
    </>
  );
}

export default UserProgress;
