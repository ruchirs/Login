import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
    render() {
        return (
            <form>
                <label>Sign In</label>

                <div className="form-group">
                    <label>Username</label>
                    <input type="email" className="form-control" placeholder="Enter Username" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Next</button>
                <p className="forgot-password text-center">
                    New to Autodesk? <a href="#">Create account</a>
                </p>
            </form>
        );
    }
}