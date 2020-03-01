import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class LoginPwd extends Component {

    constructor(props) {
        super()
        this.state = {
            username: '',
            labelText: 'Sign in',
            password: '',
            isError: {
                password: ''
            }
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submitHandler = (e) => {
        e.preventDefault()
        this.setState({
            labelText: 'Verifying'
        })

        fetch('http://localhost:4000/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            body: JSON.stringify({ "username": this.props.location.state.name, "password": this.state.password }),
        })
        .then((response) => response.json())
        .then((data) => {
        console.log('Success:', data);
        if (data.token) {
            this.props.history.push('/dashboard');
        }
        
        else {
            this.setState(prevState => ({
                isError: {                   
                    ...prevState.isError,    
                    password: 'The password does not match!'
                },
                labelText: 'Next'
            }))
        }
        })
        .catch((error) => {
        console.error('Error:', error);
        });


    }

    render() {
        console.log('this.props', this.props);
        const { isError } = this.state 
        return (
            <div className="container p-0">
            <form onSubmit={(e) => this.submitHandler(e)}>
                <Link to={{ pathname: "/sign-in", state: { name: this.props.location.state.name}}}>
                <FontAwesomeIcon icon="angle-left" size="2x" color="#0696d7" style={{position: "absolute"}}/>
                </Link>
                <h3 className="text-center p-0">Welcome</h3>
                <p className="usernameStyle text-center">{this.props.location.state.name}</p>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" 
                    className={isError.password.length > 0 ? "is-invalid form-control" : "form-control"} 
                    placeholder="Enter Password"
                    onChange={(e) => this.handleChange(e)} name="password" />
                    {isError.password.length > 0 && (
                        <span className="invalidInput">{isError.password}</span>
                    )}
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={this.submitHandler}>{this.state.labelText}</button>
                </form>
                <Footer />
            </div>
        );
    }
}