import React, { useState } from "react";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (n) => {
    n.preventDefault();
  };

  return (
    <div className="authentification-form-container">
      <h2>Sign in</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email"></label>
        <input value={email} onChange={(n) => setEmail(n.target.value)} type="email" placeholder="Email" id="email" name="email" />
        <label htmlFor="password"></label>
        <input value={password} onChange={(n) => setPassword(n.target.value)} type="password" placeholder="Password" id="password" name="password" />
        <button type="submit">Login</button>
      </form>
      <button className="link-button" onClick={() => props.onFormSwitch("register")}>
        Don't have an account? Please Register here.
      </button>
    </div>
  );
}

export default Login;
