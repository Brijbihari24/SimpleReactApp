import React from "react";
import "./App.css"
import Button from "./button";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Hello World !!</h1>
      <p style={{ textAlign: "center" }}>Welcome to our React App</p>
      <Button title="App Store" />
      <Button title="Play Store" />
      <Button />
    </div>
  );
};
export default App;
