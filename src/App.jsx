import React, { useState, useEffect } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const [passwordCorrect, setPasswordCorrect] = useState(null)


  // useEffect(() => {
  //   if (password === "beway") {
  //     setLoggedIn(true);
  //   } else {
  //     setLoggedIn(false);
  //   }
  // }, [password]);



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
    console.log(event.target[2].value);
    event.preventDefault();
    if (event.target[2].value == "beway") {
      setPasswordCorrect(true)
    }
  };

  if (!passwordCorrect) {
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
        {loggedIn && <WelcomeMessage />}
      </form>
    );
  } else if (passwordCorrect) {
    return (
      <div>
        <h1>Bienvenido a <img src="https://www.beway.org/wp-content/uploads/2022/11/Beway-logo-black.png"/></h1>
      </div>
    )
  } else if (!passwordCorrect && event.target[2].value != "") {
    return (
      <div>
        <h1>Oops, seguro no eres tú</h1>
        <p>Por favor, intenta de nuevo.</p>
      </div>
    )
  }
};

const WelcomeMessage = () => {
  return (
    <div>
      <h1>Bienvenido a BeWay</h1>
    </div>
  );
};

// const ErrorMessage = () => {
//   return (
//     <div>
//       <h1>Oops, seguro no eres tú</h1>
//       <p>Por favor, intenta de nuevo.</p>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <LoginForm />
//     </div>
//   );
// };

export default LoginForm;