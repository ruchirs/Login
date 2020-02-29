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
        this.props.history.push('/log-in');
    }

    render() {
        return (
            <div className="container p-0">
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="email" className="form-control" placeholder="Enter Username" />
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={this.submitHandler}>{this.state.labelText}</button>
                <p className="forgot-password text-center">
                    New to Autodesk? <Link to="sign-up">Create account</Link>
                </p>
                </form>
                <Footer />
            </div>
        );
    }
}