import React, { useState } from "react";
import "./App.css";
import "./components/Lr.css";
import Login from "./components/Login";
import Register from "./components/Register";
import logo from "./components/logo/logo.png";
import Navbar from "./Navbar";

function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const toggleForm = (forEmail) => {
    setCurrentForm(forEmail);
  };

  return (
    <div className="App">
      <Navbar />
      <img src={logo} alt="" />

      {currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />}
      <Navbar />
    </div>
  );
}

export default App;
