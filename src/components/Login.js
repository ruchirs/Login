import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from './Footer'

export default class Login extends Component {

    constructor(props) {
        super()
        this.state = {
            username: '',
            labelText: 'Next',
            showToast: false,
            invalid: false,
            isError: {
                username: ''
            }
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

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        this.formValChange(e)
    };

    formValChange = e => {
        console.log('e', e.target)
        const { name, value } = e.target;
        let isError = { ...this.state.isError };

        switch (name) {
            
            case "username":
                isError.username = (this.state.invalid) ? "The username is not recognized" : "";
                break;
            default:
                break;
        }

        this.setState({
            isError,
            [name]: value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.setState({
            labelText: 'Verifying'
        })
        
        fetch('http://localhost:4000/user/username', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            body: JSON.stringify({"username": this.state.username}),
        })
        .then((response) => response.json())
        .then((data) => {
        console.log('Success:', data.message);
        if (data.token) {
            this.props.history.push({pathname: '/log-in', state: {name: this.state.username?this.state.username:this.props.location.state.name}});
        }
        
        else {
            this.setState(prevState => ({
                isError: {                   
                    ...prevState.isError,    
                    username: 'The username is not recognized'
                },
                labelText: 'Next'
            }))
        }
        })
        .catch((error) => {
        console.error('Error:', error);
        });
    }
    
    usernameChanged = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    render() {
        const { isError } = this.state;
        console.log('this.props', isError);
        return (
            <div className="container p-0">
            { this.state.showToast && 
                <p className="toast-message">Account Created Successfully</p>
            }
            <form onSubmit={(e) => this.submitHandler(e)}>
                <h3>Sign In</h3>

                { /* <div className="form-group">
                    <label>Username</label>
                    <input type="text" className={isError.username.length > 0 ? "is-invalid form-control" : "form-control"}
                     name="username"
                     placeholder="Enter Username" 
                     value={this.state.username?this.state.username:(this.props.location.state?this.props.location.state.name:'')}
                     onChange={(e) => this.handleChange(e)}/>
                     {isError.username.length > 0 && (
                        <span className="invalidInput">{isError.username}</span>
                    )}
                     </div> */}
                     <div className="form-group">
                     <label>Username</label>
                     <input type="text" 
                     className={isError.username.length > 0 ? "is-invalid form-control" : "form-control"} 
                     onChange={(e) => this.handleChange(e)} 
                     name="username"/>
                     {isError.username.length > 0 && (
                         <span className="invalidInput">{isError.username}</span>
                     )}
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