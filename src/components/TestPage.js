// // // // // import React, { useEffect, useState } from "react";
// // // // // import axios from "axios";

// // // // // const TestPage = () => {
// // // // //   const [questions, setQuestions] = useState([]);
// // // // //   const [currentQuestion, setCurrentQuestion] = useState(0);
// // // // //   const [selectedAnswer, setSelectedAnswer] = useState("");
// // // // //   const [score, setScore] = useState(0);

// // // // //   useEffect(() => {
// // // // //     fetchQuestions();
// // // // //   }, []);

// // // // //   const fetchQuestions = async () => {
// // // // //     try {
// // // // //       const response = await axios.get(
// // // // //         "https://quizapi.io/api/v1/questions?apiKey=27Oq86sOJzXSirTCHBLro09qXN478a9gHhGUOx5J"
// // // // //       );
// // // // //       setQuestions(response.data);
// // // // //     } catch (error) {
// // // // //       console.log(error);
// // // // //     }
// // // // //   };

// // // // //   const handleAnswerSelect = (answer) => {
// // // // //     setSelectedAnswer(answer);
// // // // //   };
// // // // //   const handleNextQuestion = () => {
// // // // //     const currentQuestionObj = questions[currentQuestion];
// // // // //     const correctAnswerKey = currentQuestionObj.correct_answer; // e.g., 'answer_a'
// // // // //     const correctAnswer = currentQuestionObj.answers[correctAnswerKey]; // e.g., 'Scripting language'

// // // // //     if (selectedAnswer === correctAnswer) {
// // // // //       setScore(score + 1);
// // // // //     }

// // // // //     setSelectedAnswer("");
// // // // //     setCurrentQuestion(currentQuestion + 1);
// // // // //   };

// // // // //   if (questions.length === 0) {
// // // // //     return <div>Loading...</div>;
// // // // //   }

// // // // //   if (currentQuestion >= questions.length) {
// // // // //     return (
// // // // //       <div>
// // // // //         <h1>Quiz Completed!</h1>
// // // // //         <p>Your Score: {score}</p>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   const currentQuestionObj = questions[currentQuestion];

// // // // //   if (!currentQuestionObj.hasOwnProperty("answers")) {
// // // // //     return <div>Invalid question format</div>;
// // // // //   }
// // // // //   const answers = Object.values(currentQuestionObj.answers).filter(
// // // // //     (answer) => answer !== null
// // // // //   );
// // // // //   console.log(answers);
// // // // //   // const answers = Object.values(currentQuestionObj.answers);
// // // // //   console.log(questions);
// // // // //   console.log(score);
// // // // //   return (
// // // // //     <div>
// // // // //       <h2>Question {currentQuestion + 1}</h2>
// // // // //       <p>{currentQuestionObj.question}</p>
// // // // //       <ul>
// // // // //         {answers.map((answer, index) => (
// // // // //           <li key={index}>
// // // // //             <button
// // // // //               onClick={() => handleAnswerSelect(answer)}
// // // // //               disabled={selectedAnswer !== ""}
// // // // //             >
// // // // //               {answer}
// // // // //             </button>
// // // // //           </li>
// // // // //         ))}
// // // // //       </ul>
// // // // //       <button onClick={handleNextQuestion} disabled={selectedAnswer === ""}>
// // // // //         Next Question
// // // // //       </button>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default TestPage;
// // // // import React, { useEffect, useState } from "react";
// // // // import axios from "axios";

// // // // const TestPage = () => {
// // // //   const [questions, setQuestions] = useState([]);
// // // //   const [currentQuestion, setCurrentQuestion] = useState(0);
// // // //   const [selectedAnswer, setSelectedAnswer] = useState("");
// // // //   const [score, setScore] = useState(0);
// // // //   const [resultData, setResultData] = useState([]);

// // // //   useEffect(() => {
// // // //     fetchQuestions();
// // // //   }, []);

// // // //   const fetchQuestions = async () => {
// // // //     try {
// // // //       const response = await axios.get(
// // // //         "https://quizapi.io/api/v1/questions?apiKey=27Oq86sOJzXSirTCHBLro09qXN478a9gHhGUOx5J"
// // // //       );
// // // //       setQuestions(response.data);
// // // //     } catch (error) {
// // // //       console.log(error);
// // // //     }
// // // //   };

// // // //   const handleAnswerSelect = (answer) => {
// // // //     setSelectedAnswer(answer);
// // // //   };

// // // //   // const handleNextQuestion = () => {
// // // //   //   const currentQuestionObj = questions[currentQuestion];
// // // //   //   const correctAnswerKey = currentQuestionObj.correct_answer;
// // // //   //   const correctAnswer = currentQuestionObj.answers[correctAnswerKey];

// // // //   //   if (selectedAnswer === correctAnswer) {
// // // //   //     setScore(score + 1);
// // // //   //   }

// // // //   //   const questionData = {
// // // //   //     question: currentQuestionObj.question,
// // // //   //     correctAnswer,
// // // //   //     userAnswer: selectedAnswer,
// // // //   //     isCorrect: selectedAnswer === correctAnswer,
// // // //   //   };

// // // //   //   setResultData((prevResultData) => [...prevResultData, questionData]);

// // // //   //   setSelectedAnswer("");
// // // //   //   setCurrentQuestion(currentQuestion + 1);
// // // //   // };
// // // //   const handleNextQuestion = () => {
// // // //     const currentQuestionObj = questions[currentQuestion];
// // // //     const correctAnswerKey = currentQuestionObj.correct_answer;
// // // //     const correctAnswer = currentQuestionObj.answers[correctAnswerKey];

// // // //     if (selectedAnswer === correctAnswer) {
// // // //       setScore(score + 1);
// // // //     }

// // // //     const questionData = {
// // // //       question: currentQuestionObj.question,
// // // //       correctAnswer,
// // // //       userAnswer: selectedAnswer,
// // // //       isCorrect: selectedAnswer === correctAnswer,
// // // //       answerOptions: currentQuestionObj.answers, // Add answerOptions property
// // // //       correctAnswerKey, // Add correctAnswerKey property
// // // //       userAnswerKey: selectedAnswer, // Add userAnswerKey property
// // // //     };

// // // //     setResultData((prevResultData) => [...prevResultData, questionData]);

// // // //     setSelectedAnswer("");
// // // //     setCurrentQuestion(currentQuestion + 1);
// // // //   };

// // // //   // const renderResultPage = () => {
// // // //   //   // Render the result page component with score and result data
// // // //   //   return (
// // // //   //     <div>
// // // //   //       <h1>Quiz Results</h1>
// // // //   //       {resultData.map((questionData, index) => (
// // // //   //         <div key={index}>
// // // //   //           <h3>Question: {questionData.question}</h3>
// // // //   //           <p>
// // // //   //             Correct Answer:{" "}
// // // //   //             <span style={{ color: "green" }}>
// // // //   //               {questionData.correctAnswer}
// // // //   //             </span>
// // // //   //           </p>
// // // //   //           <p>
// // // //   //             Your Answer:{" "}
// // // //   //             <span style={{ color: questionData.isCorrect ? "green" : "red" }}>
// // // //   //               {questionData.userAnswer}
// // // //   //             </span>
// // // //   //           </p>
// // // //   //         </div>
// // // //   //       ))}
// // // //   //     </div>
// // // //   //   );
// // // //   // };
// // // //   const renderResultPage = () => {
// // // //     return (
// // // //       <div>
// // // //         <h1>Quiz Results</h1>
// // // //         {resultData.map((questionData, index) => (
// // // //           <div key={index}>
// // // //             <h3>Question: {questionData.question}</h3>
// // // //             <p>
// // // //               {Object.entries(questionData.answerOptions).map(
// // // //                 ([optionKey, optionValue]) => (
// // // //                   <span
// // // //                     key={optionKey}
// // // //                     style={{
// // // //                       color:
// // // //                         optionKey === questionData.correctAnswerKey
// // // //                           ? "green"
// // // //                           : questionData.userAnswerKey === optionKey
// // // //                           ? "red"
// // // //                           : "black",
// // // //                     }}
// // // //                   >
// // // //                     {optionKey}-{optionValue}
// // // //                     <br />
// // // //                   </span>
// // // //                 )
// // // //               )}
// // // //             </p>
// // // //             <p>
// // // //               Your Answer:{" "}
// // // //               <span
// // // //                 style={{
// // // //                   color: questionData.isCorrect ? "green" : "red",
// // // //                 }}
// // // //               >
// // // //                 {questionData.userAnswer}
// // // //               </span>
// // // //             </p>
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     );
// // // //   };

// // // //   if (questions.length === 0) {
// // // //     return <div>Loading...</div>;
// // // //   }

// // // //   if (currentQuestion >= questions.length) {
// // // //     return renderResultPage();
// // // //   }

// // // //   const currentQuestionObj = questions[currentQuestion];

// // // //   if (!currentQuestionObj.hasOwnProperty("answers")) {
// // // //     return <div>Invalid question format</div>;
// // // //   }
// // // //   const answers = Object.values(currentQuestionObj.answers).filter(
// // // //     (answer) => answer !== null
// // // //   );

// // // //   return (
// // // //     <div>
// // // //       <h2>Question {currentQuestion + 1}</h2>
// // // //       <p>{currentQuestionObj.question}</p>
// // // //       <ul>
// // // //         {answers.map((answer, index) => (
// // // //           <li key={index}>
// // // //             <button
// // // //               onClick={() => handleAnswerSelect(answer)}
// // // //               disabled={selectedAnswer !== ""}
// // // //             >
// // // //               {answer}
// // // //             </button>
// // // //           </li>
// // // //         ))}
// // // //       </ul>
// // // //       <button onClick={handleNextQuestion} disabled={selectedAnswer === ""}>
// // // //         Next Question
// // // //       </button>
// // // //       <button onClick={() => setCurrentQuestion(questions.length + 1)}>
// // // //         Submit
// // // //       </button>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default TestPage;
// // // import React, { useEffect, useState } from "react";
// // // import axios from "axios";

// // // const TestPage = () => {
// // //   const [questions, setQuestions] = useState([]);
// // //   const [currentQuestion, setCurrentQuestion] = useState(0);
// // //   const [selectedAnswer, setSelectedAnswer] = useState("");
// // //   const [score, setScore] = useState(0);
// // //   const [resultData, setResultData] = useState([]);
// // //   const [filter, setFilter] = useState("all");

// // //   useEffect(() => {
// // //     fetchQuestions();
// // //   }, []);

// // //   const fetchQuestions = async () => {
// // //     try {
// // //       const response = await axios.get(
// // //         "https://quizapi.io/api/v1/questions?apiKey=27Oq86sOJzXSirTCHBLro09qXN478a9gHhGUOx5J"
// // //       );
// // //       setQuestions(response.data);
// // //     } catch (error) {
// // //       console.log(error);
// // //     }
// // //   };

// // //   const handleAnswerSelect = (answer) => {
// // //     setSelectedAnswer(answer);
// // //   };

// // //   const handleNextQuestion = () => {
// // //     const currentQuestionObj = questions[currentQuestion];
// // //     const correctAnswerKey = currentQuestionObj.correct_answer;
// // //     const correctAnswer = currentQuestionObj.answers[correctAnswerKey];

// // //     if (selectedAnswer === correctAnswer) {
// // //       setScore(score + 1);
// // //     }

// // //     const questionData = {
// // //       question: currentQuestionObj.question,
// // //       correctAnswer,
// // //       userAnswer: selectedAnswer,
// // //       isCorrect: selectedAnswer === correctAnswer,
// // //     };

// // //     setResultData((prevResultData) => [...prevResultData, questionData]);

// // //     setSelectedAnswer("");
// // //     setCurrentQuestion(currentQuestion + 1);
// // //   };

// // //   const renderResultPage = () => {
// // //     const filteredQuestions = resultData.filter((questionData) => {
// // //       if (filter === "not-attempted") {
// // //         return !questionData.userAnswer;
// // //       } else if (filter === "recent") {
// // //         return true;
// // //       } else if (filter === "incorrect") {
// // //         return !questionData.isCorrect;
// // //       }
// // //       return true;
// // //     });

// // //     return (
// // //       <div>
// // //         <h1>Quiz Results</h1>
// // //         <label htmlFor="filter">Filter:</label>
// // //         <select
// // //           id="filter"
// // //           value={filter}
// // //           onChange={(e) => setFilter(e.target.value)}
// // //         >
// // //           <option value="all">All</option>
// // //           <option value="not-attempted">Not Attempted</option>
// // //           <option value="recent">Recent</option>
// // //           <option value="incorrect">Incorrect</option>
// // //         </select>
// // //         {filteredQuestions.map((questionData, index) => (
// // //           <div key={index}>
// // //             <h3>Question: {questionData.question}</h3>
// // //             <p>
// // //               Correct Answer:{" "}
// // //               <span style={{ color: "green" }}>
// // //                 {questionData.correctAnswer}
// // //               </span>
// // //             </p>
// // //             <p>
// // //               Your Answer:{" "}
// // //               <span
// // //                 style={{
// // //                   color: questionData.isCorrect ? "green" : "red",
// // //                 }}
// // //               >
// // //                 {questionData.userAnswer || "Not attempted"}
// // //               </span>
// // //             </p>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     );
// // //   };

// // //   if (questions.length === 0) {
// // //     return <div>Loading...</div>;
// // //   }

// // //   if (currentQuestion >= questions.length) {
// // //     return renderResultPage();
// // //   }

// // //   const currentQuestionObj = questions[currentQuestion];

// // //   if (!currentQuestionObj.hasOwnProperty("answers")) {
// // //     return <div>Invalid question format</div>;
// // //   }

// // //   const answers = Object.values(currentQuestionObj.answers).filter(
// // //     (answer) => answer !== null
// // //   );

// // //   return (
// // //     <div>
// // //       <h2>Question {currentQuestion + 1}</h2>
// // //       <p>{currentQuestionObj.question}</p>
// // //       <ul>
// // //         {answers.map((answer, index) => (
// // //           <li key={index}>
// // //             <button
// // //               onClick={() => handleAnswerSelect(answer)}
// // //               disabled={selectedAnswer !== ""}
// // //             >
// // //               {answer}
// // //             </button>
// // //           </li>
// // //         ))}
// // //       </ul>
// // //       <button onClick={handleNextQuestion} disabled={selectedAnswer === ""}>
// // //         Next Question
// // //       </button>
// // //     </div>
// // //   );
// // // };

// // // export default TestPage;
// // import React, { useEffect, useState } from "react";
// // import axios from "axios";

// // const TestPage = () => {
// //   const [questions, setQuestions] = useState([]);
// //   const [filteredQuestions, setFilteredQuestions] = useState([]);
// //   const [currentQuestion, setCurrentQuestion] = useState(0);
// //   const [selectedAnswer, setSelectedAnswer] = useState("");
// //   const [score, setScore] = useState(0);
// //   const [resultData, setResultData] = useState([]);
// //   const [filter, setFilter] = useState("all");

// //   useEffect(() => {
// //     fetchQuestions();
// //   }, []);

// //   useEffect(() => {
// //     applyFilter();
// //   }, [questions, filter]);

// //   const fetchQuestions = async () => {
// //     try {
// //       const response = await axios.get(
// //         "https://quizapi.io/api/v1/questions?apiKey=27Oq86sOJzXSirTCHBLro09qXN478a9gHhGUOx5J"
// //       );
// //       setQuestions(response.data);
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// //   const applyFilter = () => {
// //     if (filter === "not-attempted") {
// //       setFilteredQuestions(
// //         questions.filter((question) => !isQuestionAttempted(question))
// //       );
// //     } else if (filter === "recent") {
// //       setFilteredQuestions(questions);
// //     } else if (filter === "incorrect") {
// //       setFilteredQuestions(
// //         questions.filter((question) => !isQuestionCorrect(question))
// //       );
// //     } else {
// //       setFilteredQuestions(questions);
// //     }
// //   };

// //   const isQuestionAttempted = (question) => {
// //     return resultData.some((result) => result.question === question.question);
// //   };

// //   const isQuestionCorrect = (question) => {
// //     const correctAnswerKey = question.correct_answer;
// //     const correctAnswer = question.answers[correctAnswerKey];
// //     return resultData.some(
// //       (result) =>
// //         result.question === question.question &&
// //         result.userAnswer === correctAnswer
// //     );
// //   };

// //   const handleAnswerSelect = (answer) => {
// //     setSelectedAnswer(answer);
// //   };

// //   const handleNextQuestion = () => {
// //     const currentQuestionObj = filteredQuestions[currentQuestion];
// //     const correctAnswerKey = currentQuestionObj.correct_answer;
// //     const correctAnswer = currentQuestionObj.answers[correctAnswerKey];

// //     if (selectedAnswer === correctAnswer) {
// //       setScore(score + 1);
// //     }

// //     const questionData = {
// //       question: currentQuestionObj.question,
// //       correctAnswer,
// //       userAnswer: selectedAnswer,
// //       isCorrect: selectedAnswer === correctAnswer,
// //     };

// //     setResultData((prevResultData) => [...prevResultData, questionData]);

// //     setSelectedAnswer("");
// //     setCurrentQuestion(currentQuestion + 1);
// //   };

// //   const renderResultPage = () => {
// //     return (
// //       <div>
// //         <h1>Quiz Results</h1>
// //         <label htmlFor="filter">Filter:</label>
// //         <select
// //           id="filter"
// //           value={filter}
// //           onChange={(e) => setFilter(e.target.value)}
// //         >
// //           <option value="all">All</option>
// //           <option value="not-attempted">Not Attempted</option>
// //           <option value="recent">Recent</option>
// //           <option value="incorrect">Incorrect</option>
// //         </select>
// //         {resultData.map((questionData, index) => (
// //           <div key={index}>
// //             <h3>Question: {questionData.question}</h3>
// //             <p>
// //               Correct Answer:{" "}
// //               <span style={{ color: "green" }}>
// //                 {questionData.correctAnswer}
// //               </span>
// //             </p>
// //             <p>
// //               Your Answer:{" "}
// //               <span
// //                 style={{
// //                   color: questionData.isCorrect ? "green" : "red",
// //                 }}
// //               >
// //                 {questionData.userAnswer || "Not attempted"}
// //               </span>
// //             </p>
// //           </div>
// //         ))}
// //       </div>
// //     );
// //   };

// //   if (questions.length === 0) {
// //     return <div>Loading...</div>;
// //   }

// //   if (currentQuestion >= filteredQuestions.length) {
// //     return renderResultPage();
// //   }

// //   const currentQuestionObj = filteredQuestions[currentQuestion];

// //   if (!currentQuestionObj.hasOwnProperty("answers")) {
// //     return <div>Invalid question format</div>;
// //   }

// //   const answers = Object.values(currentQuestionObj.answers).filter(
// //     (answer) => answer !== null
// //   );

// //   return (
// //     <div>
// //       <h2>Question {currentQuestion + 1}</h2>
// //       <p>{currentQuestionObj.question}</p>
// //       <ul>
// //         {answers.map((answer, index) => (
// //           <li key={index}>
// //             <button
// //               onClick={() => handleAnswerSelect(answer)}
// //               disabled={selectedAnswer !== ""}
// //             >
// //               {answer}
// //             </button>
// //           </li>
// //         ))}
// //       </ul>
// //       <button onClick={handleNextQuestion} disabled={selectedAnswer === ""}>
// //         Next Question
// //       </button>
// //     </div>
// //   );
// // };

// // export default TestPage;
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const TestPage = () => {
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selectedAnswer, setSelectedAnswer] = useState("");
//   const [score, setScore] = useState(0);
//   const [resultData, setResultData] = useState([]);
//   const [filter, setFilter] = useState("all");

//   useEffect(() => {
//     fetchQuestions();
//   }, []);

//   useEffect(() => {
//     applyFilter();
//   }, [questions, filter]);

//   const fetchQuestions = async () => {
//     try {
//       const response = await axios.get(
//         "https://quizapi.io/api/v1/questions?apiKey=27Oq86sOJzXSirTCHBLro09qXN478a9gHhGUOx5J"
//       );
//       setQuestions(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const applyFilter = () => {
//     if (filter === "recent") {
//       const recentQuestions = questions.filter((question) =>
//         isQuestionRecentlySeen(question)
//       );
//       setQuestions(recentQuestions);
//     } else if (filter === "incorrect") {
//       const incorrectQuestions = questions.filter((question) =>
//         isQuestionIncorrect(question)
//       );
//       setQuestions(incorrectQuestions);
//     } else if (filter === "not-answered") {
//       const notAnsweredQuestions = questions.filter((question) =>
//         isQuestionNotAnswered(question)
//       );
//       setQuestions(notAnsweredQuestions);
//     }
//   };

//   const isQuestionRecentlySeen = (question) => {
//     // Logic to determine if the question has been recently seen by the student
//     // You can implement your own logic here based on your requirements
//     // For example, you can track the timestamps of when the questions were accessed
//     // and compare it to the current time
//     return question.recentlySeen; // Replace with your own logic
//   };

//   const isQuestionIncorrect = (question) => {
//     return resultData.some(
//       (result) => result.question === question.question && !result.isCorrect
//     );
//   };

//   const isQuestionNotAnswered = (question) => {
//     return !resultData.some((result) => result.question === question.question);
//   };

//   const handleAnswerSelect = (answer) => {
//     setSelectedAnswer(answer);
//   };

//   const handleNextQuestion = () => {
//     const currentQuestionObj = questions[currentQuestion];
//     const correctAnswerKey = currentQuestionObj.correct_answer;
//     const correctAnswer = currentQuestionObj.answers[correctAnswerKey];

//     if (selectedAnswer === correctAnswer) {
//       setScore(score + 1);
//     }

//     const questionData = {
//       question: currentQuestionObj.question,
//       correctAnswer,
//       userAnswer: selectedAnswer,
//       isCorrect: selectedAnswer === correctAnswer,
//     };

//     setResultData((prevResultData) => [...prevResultData, questionData]);

//     setSelectedAnswer("");
//     setCurrentQuestion(currentQuestion + 1);
//   };

//   if (questions.length === 0) {
//     return <div>Loading...</div>;
//   }

//   if (currentQuestion >= questions.length) {
//     return (
//       <div>
//         <h1>Quiz Results</h1>
//         {resultData.map((questionData, index) => (
//           <div key={index}>
//             <h3>Question: {questionData.question}</h3>
//             <p>
//               Correct Answer:{" "}
//               <span style={{ color: "green" }}>
//                 {questionData.correctAnswer}
//               </span>
//             </p>
//             <p>
//               Your Answer:{" "}
//               <span
//                 style={{
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

//   if (!currentQuestionObj.hasOwnProperty("answers")) {
//     return <div>Invalid question format</div>;
//   }

//   const answers = Object.values(currentQuestionObj.answers).filter(
//     (answer) => answer !== null
//   );

//   return (
//     <div>
//       <h2>Question {currentQuestion + 1}</h2>
//       <p>{currentQuestionObj.question}</p>
//       <label htmlFor="filter">Filter:</label>
//       <select
//         id="filter"
//         value={filter}
//         onChange={(e) => setFilter(e.target.value)}
//       >
//         <option value="all">All</option>
//         <option value="recent">Recently Seen</option>
//         <option value="incorrect">Incorrectly Answered</option>
//         <option value="not-answered">Not Answered Before</option>
//       </select>
//       <ul>
//         {answers.map((answer, index) => (
//           <li key={index}>
//             <button
//               onClick={() => handleAnswerSelect(answer)}
//               disabled={selectedAnswer !== ""}
//             >
//               {answer}
//             </button>
//           </li>
//         ))}
//       </ul>
//       <button onClick={handleNextQuestion} disabled={selectedAnswer === ""}>
//         Next Question
//       </button>
//     </div>
//   );
// };

// export default TestPage;

// Tttt.js
// Tttt.js
// components/Quiz.js
import React, { useEffect, useState } from "react";
import CircleProgress from "./CircleProgress";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TestPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [resultData, setResultData] = useState([]);

  const navigate = useNavigate();

  const handleTestAgain = () => {
    navigate("/Dashboard");
  };

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    const currentQuestionObj = questions[currentQuestion];
    const correctAnswerIndex = currentQuestionObj.options.indexOf(
      currentQuestionObj.correct_answer
    );
    const isAnswerCorrect = selectedAnswer === correctAnswerIndex;

    if (isAnswerCorrect) {
      setScore(score + 1);
    }

    const questionData = {
      question: currentQuestionObj.qustion_name,
      correctAnswer: currentQuestionObj.options[correctAnswerIndex],
      userAnswer: currentQuestionObj.options[selectedAnswer],
      isCorrect: isAnswerCorrect,
    };

    setResultData((prevResultData) => [...prevResultData, questionData]);

    setSelectedAnswer("");
    setCurrentQuestion(currentQuestion + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://13.127.37.70:5000/api/v1/getallquestion"
        );
        setQuestions(response.data.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  if (currentQuestion >= questions.length) {
    const progressPercentage = Math.round((score / questions.length) * 100);

    return (
      <div className="quizCompletedContainer">
        <h1 className="quizCompleteHeading">Test Completed!</h1>
        <p className="quizCompleteScore">Your Score: {score}</p>
        <div className="progressCircleContainer">
          <CircleProgress percentage={progressPercentage} />
          <span className="progressPercentage">{progressPercentage}%</span>
        </div>
        <button onClick={handleTestAgain} className="next">
          Start Again
        </button>
      </div>
    );
  }

  const currentQuestionObj = questions[currentQuestion];

  if (!currentQuestionObj.hasOwnProperty("options")) {
    return <div>Invalid question format</div>;
  }

  const options = currentQuestionObj.options;

  return (
    <div className="tabcontent">
      <div className="QuestionFilter">
        <span>Filter Questions</span>
        <select id="filter">
          <option value="all">All</option>
          <option value="recent">Recently Seen</option>
          <option value="incorrect">Incorrectly Answered</option>
          <option value="not-answered">Not Answered Before</option>
        </select>
      </div>

      <div className="questionText">
        <span>{currentQuestionObj.qustion_name}</span>
      </div>
      <ul className="questionOptionList">
        {options.map((option, index) => (
          <li
            key={index}
            className={`questionOption ${
              selectedAnswer !== "" &&
              (selectedAnswer === index
                ? "answerColor" +
                  (index === options.indexOf(currentQuestionObj.correct_answer)
                    ? "True"
                    : "False")
                : index === options.indexOf(currentQuestionObj.correct_answer)
                ? "answerColorTrue"
                : "")
            }`}
            onClick={() => handleAnswerSelect(index)}
          >
            <a className="cursor">{String.fromCharCode(65 + index)}</a>
            <div className="texter">
              <span>{option}</span>
            </div>
          </li>
        ))}
      </ul>
      <button
        className="next"
        onClick={handleNextQuestion}
        disabled={selectedAnswer === ""}
      >
        Next Question
      </button>
    </div>
  );
};

export default TestPage;
