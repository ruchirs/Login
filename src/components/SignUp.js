import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Create account</h3>

                <div class="row">
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
                    Already have an account? <a href="#">Sign in</a>
                </p>
            </form>
        );
    }
}