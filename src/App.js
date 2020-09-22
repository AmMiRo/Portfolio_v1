import React from "react";
import Header from "./components/Header.js";

function App() {
  return (
    <div className="App">
      <Header />
      <a target="_blank" href={require("./documents/Amos_Rose_Resume.pdf")}>
        PDF Doc
      </a>
    </div>
  );
}

export default App;
