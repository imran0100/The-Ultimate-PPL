import React from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();

  const handleAddQuestion = () => {
    navigate("/choose");
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <button onClick={handleAddQuestion}>Add Question</button>
      <br />
      <button>Edit Question</button>
      <br />

      <button>view students Progress</button>
      <br />

      <button>logout</button>
    </div>
  );
}

export default Admin;
