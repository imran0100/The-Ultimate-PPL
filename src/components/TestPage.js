import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Tttt.css"; // Import the CSS file for styling

const TestPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [resultData, setResultData] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    fetchQuestions();
  }, []);

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
      question: currentQuestionObj.qustion_name,
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

  if (submitted) {
    return (
      <div>
        <h1>Test Results</h1>
        <p style={{ fontSize: "2.5rem" }}>Score: {score}</p>
        {resultData.map((questionData, index) => (
          <div style={{ marginTop: "1rem", marginBottom: "1rem" }} key={index}>
            <h3>Question: {questionData.question}</h3>
            <p>
              Correct Answer:{" "}
              <span style={{ color: "green" }}>
                {questionData.correctAnswer}
              </span>
            </p>
            <p>
              Your Answer:{" "}
              <span
                style={{
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
    <div className="tabcontent">
      <p>Question {currentQuestion + 1}</p>
      <p style={{ marginBottom: "15px" }}>{currentQuestionObj.qustion_name}</p>
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
      <button
        className="next"
        onClick={handleNextQuestion}
        disabled={selectedAnswer === ""}
      >
        Next Question
      </button>
      <button onClick={handleSubmit} className="next">
        Submit
      </button>
    </div>
  );
};

export default TestPage;
