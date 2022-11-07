import React, { useState } from "react";
import "./App.css";
import "./components/Lr.css";
import Login from "./components/Login";
import Register from "./components/Register";
import logo from "./components/logo/logo.png";

function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const toggleForm = (forEmail) => {
    setCurrentForm(forEmail);
  };

  return (
    <div className="App">
      <img src={logo} alt="" />
      {currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />}
    </div>
  );
}

export default App;
