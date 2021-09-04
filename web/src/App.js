import logo from "./logo.svg";
import "./App.css";
import React from "react";

const BACKEND_API_URL = process.env.BACKEND_API_URL || "http://localhost:3001";

const fetchContent = async (updateContent: (content: string) => void) => {
  const response = await fetch(`${BACKEND_API_URL}/greetings/hello`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  updateContent(data.content);
};

function App() {
  const [content, updateContent] = React.useState(
    "Waiting for a response from Rails..."
  );
  React.useEffect(() => {
    fetchContent(updateContent);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{content}</p>
      </header>
    </div>
  );
}

export default App;
