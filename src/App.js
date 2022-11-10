import React, { useState } from "react";
import "./App.css";
import "./components/Lr.css";
import Login from "./components/Login";
import Register from "./components/Register";
import logo from "./components/logo/logo.png";
import Navbar from "./Navbar";
import Showcase from "./Showcase";
import { ApiClient } from "./apiClient";

function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const [token, changeToken] = useState(undefined);
  const client = new ApiClient(
    () => token,
    () => logout()
  );

  const logout = () => {
    changeToken(undefined);
  };

  const Login = (authToken) => {
    changeToken(authToken);
  };

  const toggleForm = (forEmail) => {
    setCurrentForm(forEmail);
  };

  return (
    <div className="App">
      <img src={logo} alt="" />

      {token ? <Showcase client={client} /> : <Login loggedIn={(token) => Login(token)} client={client} />}

      {currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />}
    </div>
  );
}

export default App;
