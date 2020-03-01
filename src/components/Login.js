import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from './Footer'

export default class Login extends Component {

    constructor(props) {
        super()
        this.state = {
            username: '',
            labelText: 'Next',
            showToast: false
        }
    }

    componentDidMount () {
        let state = this.props.location.state
        console.log('state', state)
        if(state){
            if(state.successful === true) {
            this.setState({
                showToast: true
            })

            setTimeout(() => {
                this.setState({ showToast: false }, () => {
                    this.props.location.state.successful = false
                });
              }, 5000);
            }
        }
    }

    submitHandler = () => {
        this.setState({
            labelText: 'Verifying'
        })
        this.props.history.push({pathname: '/log-in', state: {name: this.state.username?this.state.username:this.props.location.state.name}});
    }

    usernameChanged = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    render() {
        console.log('this.props', this.props);
        return (
            <div className="container p-0">
            { this.state.showToast && 
                <p className="toast-message">Account Created Successfully</p>
            }
            <form onSubmit={this.submitHandler}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control"
                     placeholder="Enter Username" 
                     value={this.state.username?this.state.username:(this.props.location.state?this.props.location.state.name:'')}
                     onChange={(e) => this.usernameChanged(e)}/>
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