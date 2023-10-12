import React, { useState, useEffect } from "react";

import "./App.css";

const LoginForm = () => {
 const [email, setEmail] = useState("");
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const [loggedIn, setLoggedIn] = useState(false);

 const [passwordCorrect, setPasswordCorrect] = useState(null);

 const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "username":
        setUsername(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
 };

 const handleSubmit = (event) => {
    console.log(event);
    setUsername(event.target[1].value);
    console.log(username);
    setPassword(event.target[2].value);
    console.log(password);
    event.preventDefault();
    if (event.target[2].value === "beway") {
      setPasswordCorrect(true);
    } else {
      setPasswordCorrect(false);
    }
 };

 if (passwordCorrect === null) {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form_container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            style={{ margin: 10 }}
          />

          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleChange}
            style={{ margin: 10 }}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            style={{ margin: 10 }}
          />
          <div>
            <button type="submit" style={{ color: "green" }}>
              Login
            </button>
            {loggedIn && <WelcomeMessage />}
          </div>
        </div>
      </form>
    );
 } else if (passwordCorrect) {
    let saludo = `Hola, ${username}. Bienvenido a BeWay`;
    return (
      <div className="circle_container">
        <img src="https://www.beway.org/wp-content/uploads/2022/11/Beway-logo-black.png" />
        <h1>{saludo}</h1>
        <p>¡Es un placer tenerte aquí!</p>
      </div>
    );
 } else {
    return (
      <div>
        <h1>Oops, seguro no eres tú</h1>
        <p>Por favor, intenta de nuevo.</p>
      </div>
    );
 }
};

export default LoginForm;
