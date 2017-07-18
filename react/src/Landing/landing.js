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
            <div className="hello-world">
                <p>Hello World Landing</p>            
            </div>
        );
    }
}


export default Landing