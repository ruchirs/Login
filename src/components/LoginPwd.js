import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class LoginPwd extends Component {

    constructor(props) {
        super()
        this.state = {
            username: '',
            labelText: 'Sign in'
        }
    }

    submitHandler = () => {
        this.setState({
            labelText: 'Verifying'
        })
        this.props.history.push('/dashboard');
    }

    render() {
        console.log('this.props', this.props);
        
        return (
            <div className="container p-0">
            <form>
                <Link to={{ pathname: "/sign-in", state: { name: this.props.location.state.name}}}>
                <FontAwesomeIcon icon="angle-left" size="2x" color="#0696d7" style={{position: "absolute"}}/>
                </Link>
                <h3 className="text-center p-0">Welcome</h3>
                <p className="usernameStyle text-center">{this.props.location.state.name}</p>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter Password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={this.submitHandler}>{this.state.labelText}</button>
                </form>
                <Footer />
            </div>
        );
    }
}