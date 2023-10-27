import React from "react"

const Form = () => {

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
            <div className="login_button">
              <button type="submit">
                Login
              </button>
              {loggedIn && <WelcomeMessage />}
            </div>
          </div>
        </form>
    }

export default Form