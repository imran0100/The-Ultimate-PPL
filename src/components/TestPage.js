// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Tttt.css"; // Import the CSS file for styling
// import QuestionMenu from "./QuestionMenu";

// const TestPage = () => {
//   const [questions, setQuestions] = useState([
//     {
//       question_name: "What is the capital of France?",
//       options: ["London", "Paris", "Berlin", "Madrid"],
//       correct_answer: "Paris",
//     },
//     {
//       question_name: 'Which planet is known as the "Red Planet"?',
//       options: ["Mars", "Venus", "Jupiter", "Saturn"],
//       correct_answer: "Mars",
//     },
//     {
//       question_name: 'Who wrote the play "Romeo and Juliet"?',
//       options: [
//         "William Shakespeare",
//         "Jane Austen",
//         "Charles Dickens",
//         "Mark Twain",
//       ],
//       correct_answer: "William Shakespeare",
//     },
//     {
//       question_name: "What is the chemical symbol for water?",
//       options: ["H2O", "CO2", "O2", "NaCl"],
//       correct_answer: "H2O",
//     },
//     {
//       question_name: "Which country is famous for the Taj Mahal?",
//       options: ["India", "China", "Egypt", "Italy"],
//       correct_answer: "India",
//     },
//     // Add more questions as needed...
//   ]);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selectedAnswer, setSelectedAnswer] = useState("");
//   const [score, setScore] = useState(0);
//   const [resultData, setResultData] = useState([]);
//   const [submitted, setSubmitted] = useState(false);
//   useEffect(() => {
//     // fetchQuestions();
//   }, []);

//   const fetchQuestions = async () => {
//     try {
//       const response = await axios.get(
//         "http://13.127.37.70:5000/api/v1/getallquestion"
//       );
//       setQuestions(response.data.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleSubmit = () => {
//     setSubmitted(true);
//   };
//   const handleAnswerSelect = (answer) => {
//     setSelectedAnswer(answer);
//   };

//   const handleNextQuestion = () => {
//     const currentQuestionObj = questions[currentQuestion];
//     const correctAnswer = currentQuestionObj.correct_answer;
//     if (selectedAnswer === correctAnswer) {
//       setScore(score + 1);
//     }

//     const questionData = {
//       question_Id: currentQuestionObj.quesion_Id,
//       question: currentQuestionObj.question_name,
//       correctAnswer,
//       userAnswer: selectedAnswer,
//       isCorrect: selectedAnswer === correctAnswer,
//     };

//     setResultData((prevResultData) => [...prevResultData, questionData]);

//     setSelectedAnswer("");
//     setCurrentQuestion(currentQuestion + 1);
//     if (currentQuestion === questions.length - 1) {
//       // If it's the last question, automatically submit the test
//       handleSubmit();
//     }
//   };

//   if (questions.length === 0) {
//     return <div>Loading...</div>;
//   }
//   const handleQuestionChange = (questionNumber) => {
//     if (questionNumber >= 0 && questionNumber < questions.length) {
//       setCurrentQuestion(questionNumber);
//     }
//   };
//   if (submitted) {
//     return (
//       <div className="result-container">
//         <h1>Test Results</h1>
//         <p style={{ fontSize: "2rem" }}>Score: {score}</p>
//         {resultData.map((questionData, index) => (
//           <div className="result-data" key={index}>
//             {console.log(questionData, "hgughgb")}
//             <h4> {questionData.question}</h4>
//             <p>
//               Correct Answer:{" "}
//               <span style={{ color: "green", fontWeight: "600" }}>
//                 {questionData.correctAnswer}
//               </span>
//             </p>
//             <p>
//               Your Answer:{" "}
//               <span
//                 style={{
//                   fontWeight: "600",
//                   color: questionData.isCorrect ? "green" : "red",
//                 }}
//               >
//                 {questionData.userAnswer || "Not attempted"}
//               </span>
//             </p>
//           </div>
//         ))}
//       </div>
//     );
//   }

//   const currentQuestionObj = questions[currentQuestion];
//   return (
//     <div className="Test-Container">
//       <div className="tabcontent">
//         <p>Question {currentQuestion + 1}</p>
//         <p style={{ marginBottom: "15px" }}>
//           {currentQuestionObj.question_name}
//         </p>
//         <ul className="questionOptionList">
//           {currentQuestionObj.options.map((answer, index) => (
//             <li
//               className={`questionOption ${
//                 selectedAnswer === answer ? "selected" : ""
//               }`}
//               key={index}
//               onClick={() => handleAnswerSelect(answer)}
//               disabled={selectedAnswer !== ""}
//             >
//               <a className="cursor">{String.fromCharCode(65 + index)}</a>
//               <div className="texter">
//                 <span> {answer}</span>
//               </div>
//             </li>
//           ))}
//         </ul>
//         <button
//           className="next"
//           onClick={handleNextQuestion}
//           disabled={selectedAnswer === ""}
//         >
//           Next Question
//         </button>
//         <button onClick={handleSubmit} className="next">
//           Submit
//         </button>
//       </div>
//       <QuestionMenu
//         totalQuestions={questions.length}
//         currentQuestion={currentQuestion}
//         handleQuestionChange={handleQuestionChange}
//         resultData={resultData}
//       />
//     </div>
//   );
// };

// export default TestPage;
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Tttt.css"; // Import the CSS file for styling
import QuestionMenu from "./QuestionMenu";
import CircleProgress from "./CircleProgress";

const TestPage = () => {
  const [questions, setQuestions] = useState([
    {
      question_name: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Madrid"],
      correct_answer: "Paris",
    },
    {
      question_name: 'Which planet is known as the "Red Planet"?',
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      correct_answer: "Mars",
    },
    {
      question_name: 'Who wrote the play "Romeo and Juliet"?',
      options: [
        "William Shakespeare",
        "Jane Austen",
        "Charles Dickens",
        "Mark Twain",
      ],
      correct_answer: "William Shakespeare",
    },
    {
      question_name: "What is the chemical symbol for water?",
      options: ["H2O", "CO2", "O2", "NaCl"],
      correct_answer: "H2O",
    },
    {
      question_name: "Which country is famous for the Taj Mahal?",
      options: ["India", "China", "Egypt", "Italy"],
      correct_answer: "India",
    },
    // Add more questions as needed...
  ]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [resultData, setResultData] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    // fetchQuestions();
  }, []);
  useEffect(() => {
    if (selectedAnswer !== "") {
      handleNextQuestion();
    }
  }, [selectedAnswer]);
  const fetchQuestions = async () => {
    try {
      const response = await axios.get(
        "http://13.127.37.70:5000/api/v1/getallquestion"
      );
      setQuestions(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };
  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    const currentQuestionObj = questions[currentQuestion];
    const correctAnswer = currentQuestionObj.correct_answer;
    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
    }

    const questionData = {
      question_Id: currentQuestionObj.quesion_Id,
      question: currentQuestionObj.question_name,
      correctAnswer,
      userAnswer: selectedAnswer,
      isCorrect: selectedAnswer === correctAnswer,
    };

    setResultData((prevResultData) => [...prevResultData, questionData]);

    setSelectedAnswer("");
    setCurrentQuestion(currentQuestion + 1);
    if (currentQuestion === questions.length - 1) {
      // If it's the last question, automatically submit the test
      handleSubmit();
    }
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }
  const handleQuestionChange = (questionNumber) => {
    if (questionNumber >= 0 && questionNumber < questions.length) {
      setCurrentQuestion(questionNumber);
    }
  };
  if (submitted) {
    return (
      <div className="result-container">
        <h1>Test Results</h1>
        <div className="result-heading">
          {" "}
          <p style={{ fontSize: "2rem" }}>
            Score:{" "}
            <span
              style={{ color: "green", fontWeight: "600", fontSize: "2rem" }}
            >
              {score}
            </span>
          </p>
          <p style={{ fontSize: "2rem" }}>Progress</p>
          <div className="cirle-inside">
            <div>
              <CircleProgress percentage={(score / resultData.length) * 100} />
            </div>
            <p className="circle-percentage">
              {(score / resultData.length) * 100}%
            </p>
          </div>
        </div>
        {resultData.map((questionData, index) => (
          <div className="result-data" key={index}>
            <h4> {questionData.question}</h4>
            <p>
              Correct Answer:{" "}
              <span style={{ color: "green", fontWeight: "600" }}>
                {questionData.correctAnswer}
              </span>
            </p>
            <p>
              Your Answer:{" "}
              <span
                style={{
                  fontWeight: "600",
                  color: questionData.isCorrect ? "green" : "red",
                }}
              >
                {questionData.userAnswer || "Not attempted"}
              </span>
            </p>
          </div>
        ))}
      </div>
    );
  }

  const currentQuestionObj = questions[currentQuestion];
  return (
    <div className="Test-Container">
      <div className="tabcontent">
        <p>Question {currentQuestion + 1}</p>
        <p style={{ marginBottom: "15px" }}>
          {currentQuestionObj.question_name}
        </p>
        <ul className="questionOptionList">
          {currentQuestionObj.options.map((answer, index) => (
            <li
              className={`questionOption ${
                selectedAnswer === answer ? "selected" : ""
              }`}
              key={index}
              onClick={() => handleAnswerSelect(answer)}
              disabled={selectedAnswer !== ""}
            >
              <a className="cursor">{String.fromCharCode(65 + index)}</a>
              <div className="texter">
                <span> {answer}</span>
              </div>
            </li>
          ))}
        </ul>

        <div>
          <button onClick={handleSubmit} className="next">
            Submit
          </button>
        </div>
      </div>
      <QuestionMenu
        totalQuestions={questions.length}
        currentQuestion={currentQuestion}
        handleQuestionChange={handleQuestionChange}
        resultData={resultData}
      />
    </div>
  );
};

export default TestPage;
