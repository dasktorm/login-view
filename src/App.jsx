import React, { useState, useEffect } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (password === "beway") {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [password]);

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
    event.preventDefault();

    // Iniciar sesión con los datos del formulario
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="username">Nombre de usuario:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Iniciar sesión</button>
      {loggedIn && <WelcomeMessage />}
    </form>
  );
};

const WelcomeMessage = () => {
  return (
    <div>
      <h1>Bienvenido</h1>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default App;
