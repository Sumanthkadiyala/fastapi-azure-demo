import React, { useState } from "react";

function App() {
  const [hello, setHello] = useState("");
  const [health, setHealth] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  // 👉 Replace with your Azure backend URL
  const BASE_URL = "fastapi-demo-xyz-dubeg2h8c4accea6.canadacentral-01.azurewebsites.net";

  const getHello = async () => {
    const res = await fetch(`${BASE_URL}/`);
    const data = await res.json();
    setHello(data.message);
  };

  const getHealth = async () => {
    const res = await fetch(`${BASE_URL}/health`);
    const data = await res.json();
    setHealth(data.status);
  };

  const askQuestion = async () => {
    const res = await fetch(`${BASE_URL}/ask?q=${question}`);
    const data = await res.json();
    setAnswer(data.answer);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>FastAPI + React Demo</h1>

      {/* Hello World */}
      <button onClick={getHello}>Get Hello</button>
      <p>{hello}</p>

      {/* Health Check */}
      <button onClick={getHealth}>Check Health</button>
      <p>{health}</p>

      {/* Ask Question */}
      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Ask something..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button onClick={askQuestion}>Submit</button>
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default App;