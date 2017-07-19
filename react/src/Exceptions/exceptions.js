import React, { Component } from 'react';
import './exceptions.css';
import { NavLink } from "react-router-dom";
import axios from "axios";

class Exceptions extends Component {
    constructor() {
        super();
        this.state = {
            exceptionList: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8001/exceptions").then(response => response.data).then(
        (result) => {
            // console.log(result);
            this.setState({
            exceptionList: result
            })
        })
    }

    render() {
        return (
            <div className="Exception-list">
                <h1>Exceptions</h1>

                <div>
                    {this.state.exceptionList.map(function (exception) {
                    return <div>Account: {exception.accountNumber}  SSN: {exception.ssn} Branch: {exception.branch} Employee: {exception.employee} Open Date: {exception.accountOpenDate}</div>
                    })}
                </div>
                <NavLink to={"/"}>Back To Home</NavLink>
            </div>
        );
    }
}

export default Exceptions