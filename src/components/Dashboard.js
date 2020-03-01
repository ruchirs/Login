import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from './Footer'

export default class Dashboard extends Component {
    render() {
        return (
            <div className="text-center">
                <h3>Successfully Logged In</h3>
                <Link to="/sign-in" className="mt-2">
                    <button>Logout</button>
                </Link>
                <Footer />
            </div>
        )
    }
}