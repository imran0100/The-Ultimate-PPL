import React from "react";
import "./BookTable.css";
import ReactScrollAnimation from "react-scroll-animation";
import "animate.css/animate.min.css"; // Import the animation styles

function BookTable() {
  const books = [
    {
      name: "Air Law",
      questions: 50,
      marks: 100,
    },
    {
      name: "Principles of Flight",
      questions: 60,
      marks: 120,
    },
    {
      name: "Operational Procedures",
      questions: 45,
      marks: 90,
    },
    {
      name: "Meteorology",
      questions: 70,
      marks: 140,
    },
    {
      name: "Communications",
      questions: 40,
      marks: 80,
    },
    {
      name: "Flight Planning and Performance",
      questions: 55,
      marks: 110,
    },
    {
      name: "Navigation",
      questions: 65,
      marks: 130,
    },
    {
      name: "Human Performance and Limitations",
      questions: 30,
      marks: 60,
    },
    {
      name: "Aircraft General Knowledge",
      questions: 75,
      marks: 150,
    },
  ];

  return (
    <ReactScrollAnimation animateIn="zoomIn" animateOnce={true}>
      <div className="table-container">
        <div className="book-table">
          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>No. of Questions</th>
                <th>Marks</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr key={index}>
                  <td>{book.name}</td>
                  <td>{book.questions}</td>
                  <td>{book.marks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </ReactScrollAnimation>
  );
}

export default BookTable;
