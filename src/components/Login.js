import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from './Footer'

export default class Login extends Component {

    constructor(props) {
        super()
        this.state = {
            username: '',
            labelText: 'Next'
        }
    }

    submitHandler = () => {
        this.setState({
            labelText: 'Verifying'
        })
        this.props.history.push({pathname: '/log-in', state: {name: this.state.username}});
    }

    usernameChanged = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    render() {
        return (
            <div className="container p-0">
            <form onSubmit={this.submitHandler}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Enter Username" onChange={(e) => this.usernameChanged(e)}/>
                </div>

                <button type="submit" className="btn btn-primary btn-block">{this.state.labelText}</button>
                <p className="forgot-password text-center">
                    New to Autodesk? <Link to="sign-up">Create account</Link>
                </p>
                </form>
                <Footer />
            </div>
        );
    }
}