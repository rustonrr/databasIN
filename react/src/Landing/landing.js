import React, { Component } from 'react';
import './landing.css';
import { NavLink } from "react-router-dom";

class Landing extends Component {
    constructor() {
        super()
        this.state = null
    }

    render() {
        return (
            <div className="Landing-hello">
                <h1>Landing Page Test</h1>
                <NavLink to={"/App"}> Test</NavLink>
            </div>
        );
    }
}


export default Landing