import React, { Component } from "react";
import Footer from './Footer'
import { Link } from "react-router-dom";

export default class SignUp extends Component {
    render() {
        return (
            <div className="container">
            <form>
                <h3>Create account</h3>

                <div className="row align">
                    <div className="form-group col-md-6">
                        <label>First name</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="form-group col-md-6">
                        <label>Last name</label>
                        <input type="text" className="form-control" />
                    </div>
                </div>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <label>Re-type Username</label>
                    <input type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="email" className="form-control" />
                </div>

                <div className="form-group">
                    <label>Re-type Password</label>
                    <input type="password" className="form-control" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Create account</button>
                <p className="forgot-password text-center">
                    Already have an account? <Link to="sign-in">Sign in</Link>
                </p>
            </form>
            <Footer />
            </div>
        );
    }
}