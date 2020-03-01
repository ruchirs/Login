import React, { Component } from "react";
import Footer from './Footer'
import { Link } from "react-router-dom";

export default class SignUp extends Component {

    constructor(props){
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            password: '',
            rePassword:'',
            username:'',
            reUsername:'',
            invalidForm: true,
            isError: {
                firstName: '',
                lastName: '',
                password: '',
                rePassword:'',
                username:'',
                reUsername:'',
            }
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        this.formValChange(e)
    };

    onSubmit = e => {
        e.preventDefault();
        if (formValid(this.state)) {
            this.props.history.push({ pathname: "/sign-in", state: { successful: true}})
        } else {
            console.log("Form is invalid!");
        }
    };

    formValChange = e => {
        // e.preventDefault();
        //console.log('e.target', e.target)
        const { name, value } = e.target;
        //console.log('value', value)
        let isError = { ...this.state.isError };

        switch (name) {
            case "firstName":
                isError.firstName =
                    value.length < 2 ? "Please enter your first name" : "";
                break;
            case "lastName":
                isError.lastName =
                    value.length < 2 ? "Please enter your last name" : "";
                break;
            case "username":
                isError.username =
                    value.length < 4 ? "Please enter a valid username" : "";
                break;
            case "reUsername":
                const { username } = this.state
                isError.reUsername =
                    (username === e.target.value) ? "" : "Please enter the same username";
                break;
            case "password":
                isError.password =
                    value.length < 4 ? "Please enter a password" : "";
                break;
            case "rePassword":
                const { password } = this.state
                isError.rePassword =
                    (password === e.target.value) ? "" :"Please enter the same password";
                break;
            default:
                break;
        }

        this.setState({
            isError,
            [name]: value
        })
    };


    render() {
        const { isError } = this.state;
        return (
            <div className="container">
            <form onSubmit={this.onSubmit} noValidate>
                <h3>Create account</h3>

                <div className="row align">
                    <div className="form-group col-md-6">
                        <label>First name</label>
                        <input type="text" className={isError.firstName.length > 0 ? "is-invalid form-control" : "form-control"} onChange={(e) => this.handleChange(e)} name="firstName" />
                        {isError.firstName.length > 0 && (
                        <span className="invalidInput">{isError.firstName}</span>
                    )}
                    </div>

                    <div className="form-group col-md-6">
                        <label>Last name</label>
                        <input type="text" className={isError.lastName.length > 0 ? "is-invalid form-control" : "form-control"} onChange={(e) => this.handleChange(e)} name="lastName" />
                        {isError.lastName.length > 0 && (
                        <span className="invalidInput">{isError.lastName}</span>
                    )}
                    </div>
                </div>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className={isError.username.length > 0 ? "is-invalid form-control" : "form-control"} onChange={(e) => this.handleChange(e)} name="username"/>
                    {isError.username.length > 0 && (
                        <span className="invalidInput">{isError.username}</span>
                    )}
                </div>

                <div className="form-group">
                    <label>Re-type Username</label>
                    <input type="text" className={isError.reUsername.length > 0 ? "is-invalid form-control" : "form-control"} onChange={(e) => this.handleChange(e)} name="reUsername" />
                    {isError.reUsername.length > 0 && (
                        <span className="invalidInput">{isError.reUsername}</span>
                    )}
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className={isError.password.length > 0 ? "is-invalid form-control" : "form-control"} onChange={(e) => this.handleChange(e)} name="password" />
                    {isError.password.length > 0 && (
                        <span className="invalidInput">{isError.password}</span>
                    )}
                </div>

                <div className="form-group">
                    <label>Re-type Password</label>
                    <input type="password" className={isError.rePassword.length > 0 ? "is-invalid form-control" : "form-control"} onChange={(e) => this.handleChange(e)} name="rePassword" />
                    {isError.rePassword.length > 0 && (
                        <span className="invalidInput">{isError.rePassword}</span>
                    )}
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

const formValid = ({ isError, ...rest }) => {
    let isValid = false;
    // console.log('form-valid');
    
    Object.values(isError).forEach(val => {
        console.log('val', val);
        
        if (val.length > 0) {
            isValid = false
        } else {
            isValid = true
        }
    });

    Object.values(rest).forEach(val => {
        // console.log('val2', val);
        
        if (!val) {
            isValid = false
        } else {
            isValid = true
        }
    });

    return isValid;
};