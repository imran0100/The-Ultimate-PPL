import React, { useEffect, useState } from "react";
import "./Tttt.css";
import CircleProgress from "./CircleProgress";
import { useNavigate } from "react-router-dom";

const Tttt = () => {
  const [questions, setQuestions] = useState([
    {
      question_id: 1,
      question_text: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Madrid"],
      correct_option: 1,
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

  const navigate = useNavigate();

  const handleTestAgain = () => {
    navigate("/Dashboard");
  };

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    const currentQuestionObj = questions[currentQuestion];
    const correctAnswerIndex = currentQuestionObj.correct_option;
    const isAnswerCorrect = selectedAnswer === correctAnswerIndex;

    if (isAnswerCorrect) {
      setScore(score + 1);
    }

    const questionData = {
      question: currentQuestionObj.question_text,
      correctAnswer: currentQuestionObj.options[correctAnswerIndex],
      userAnswer: currentQuestionObj.options[selectedAnswer],
      isCorrect: isAnswerCorrect,
    };

    setResultData((prevResultData) => [...prevResultData, questionData]);

    setSelectedAnswer("");
    setCurrentQuestion(currentQuestion + 1);
  };

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
        <span>{currentQuestionObj.question_text}</span>
      </div>
      <ul className="questionOptionList">
        {options.map((option, index) => (
          <li
            key={index}
            className={`questionOption ${
              selectedAnswer !== "" &&
              (selectedAnswer === index
                ? "answerColor" +
                  (index === currentQuestionObj.correct_option
                    ? "True"
                    : "False")
                : index === currentQuestionObj.correct_option
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

export default Tttt;
