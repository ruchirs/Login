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
        this.props.history.push('/sign-up');
    }

    render() {
        return (
            <div className="container p-0">
            <form>
                <Link to="/sign-in">
                <FontAwesomeIcon icon="angle-left" size="2x" color="#0696d7" style={{position: "absolute"}}/>
                </Link>
                <h3 className="text-center">Welcome</h3>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter Username" />
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={this.submitHandler}>{this.state.labelText}</button>
                </form>
                <Footer />
            </div>
        );
    }
}