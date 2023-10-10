import import React, { Component } from "react";

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
    },

    handleSubmit = (event) =>
    event.preventDefault();
    const {email, password} = this.state;

    }
}