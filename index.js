import React, { Component } from "react";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            logged: false,
        };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSubmit = (event) =>
    event.preventDefault();
    const {email, password} = this.state;

    if (password === "beway") {
        this.setState({logged: true});
    }
        else {
            this.setState({logged: false});
        }
    };

    render() {
        const {email, password, logged} = this.state;

    
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                    name="email"
                    id="email"
                    type="email"
                    value={email}
                    onChange={this.handleChange}/>
                </div>

                <div>
                    <label htmlFor="username">Username</label>
                    <input
                    name="username"
                    id="username"
                    type="text"
                    value={username}
                    onChange={this.handleChange}/>
                </div>

                <div>
                <label htmlFor="password">Password</label>
                    <input
                    name="password"
                    id="password"
                    type="password"
                    value={password}
                    onChange={this.handleChange}/>
                </div>

                <button type="submit">Log-in</button>
                    {logged && <LoginMessage/>}    
            </form>
            );
        };
    }

    class LoginMessage extends Component {
        render() {
            return(
                <div>
                    <h1>Welcome to BeWay Login View</h1>
                </div>
            );
        }
    };


    class ErrorMessage extends Component {
        render() {
            return(
                <div>
                    <h1>Sorry, this is not correct</h1>
                    <p>Make sure you're using your valid credentials and try again</p>
                </div>
            );
        }
    }

    class App extends Component {
        render() {
            return(
                <div>
                    <Login/>
                </div>
            );
        }

    }

export default App;
