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

import React, { useEffect, useState } from "react";

const TestPage = () => {
  const [questions, setQuestions] = useState([
    {
      question_id: 1,
      question_text: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Madrid"],
      correct_option: 2,
    },
    {
      question_id: 2,
      question_text: "Who painted the Mona Lisa?",
      options: [
        "Leonardo da Vinci",
        "Pablo Picasso",
        "Vincent van Gogh",
        "Michelangelo",
      ],
      correct_option: 0,
    },
    {
      question_id: 3,
      question_text: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correct_option: 1,
    },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [resultData, setResultData] = useState([]);
  const [filter, setFilter] = useState("all");
  const userData = {
    userId: 124,
    recently_attempted: [
      { question_id: 5 },
      { question_id: 2 },
      { question_id: 3 },
    ],
    not_attempted: [{ question_id: 4 }, { question_id: 5 }, { question_id: 6 }],
    wrong_answered: [{ question_id: 9 }],
  };

  useEffect(() => {
    applyFilter();
  }, [questions, filter]);

  const applyFilter = () => {
    let filteredQuestions = [];

    if (filter === "recent") {
      filteredQuestions = questions.filter((question) =>
        userData.recently_attempted.some(
          (attempted) => attempted.question_id === question.question_id
        )
      );
    } else if (filter === "incorrect") {
      filteredQuestions = questions.filter((question) =>
        userData.wrong_answered.some(
          (wrong) => wrong.question_id === question.question_id
        )
      );
    } else if (filter === "not-answered") {
      filteredQuestions = questions.filter((question) =>
        userData.not_attempted.some(
          (notAttempted) => notAttempted.question_id === question.question_id
        )
      );
    } else {
      filteredQuestions = questions;
    }

    setQuestions(filteredQuestions);
    setCurrentQuestion(0);
  };

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    const currentQuestionObj = questions[currentQuestion];
    const correctAnswerIndex = currentQuestionObj.correct_option;
    const correctAnswer = currentQuestionObj.options[correctAnswerIndex];

    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
    }

    const questionData = {
      question: currentQuestionObj.question_text,
      correctAnswer,
      userAnswer: selectedAnswer,
      isCorrect: selectedAnswer === correctAnswer,
    };

    setResultData((prevResultData) => [...prevResultData, questionData]);

    setSelectedAnswer("");
    setCurrentQuestion(currentQuestion + 1);
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  const currentQuestionObj = questions[currentQuestion];

  if (!currentQuestionObj.hasOwnProperty("options")) {
    return <div>Invalid question format</div>;
  }

  const options = currentQuestionObj.options;

  if (options.length === 0) {
    return <div>No questions found.</div>;
  }

  return (
    <div>
      <h2>Question {currentQuestion + 1}</h2>
      <p>{currentQuestionObj.question_text}</p>
      <label htmlFor="filter">Filter:</label>
      <select
        id="filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="recent">Recently Seen</option>
        <option value="incorrect">Incorrectly Answered</option>
        <option value="not-answered">Not Answered Before</option>
      </select>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <button
              onClick={() => handleAnswerSelect(option)}
              disabled={selectedAnswer !== ""}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handleNextQuestion} disabled={selectedAnswer === ""}>
        Next Question
      </button>
    </div>
  );
};

export default TestPage;
