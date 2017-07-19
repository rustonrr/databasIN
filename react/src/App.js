import React, {Component} from 'react';
import Papa from "papaparse"
import './App.css';
import { NavLink } from "react-router-dom";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      buttonInvisible: true,
      accountList: []
    }
  }

  componentDidMount() {
    axios.get("http://localhost:8001/accounts").then(response => response.data).then(
      (result) => {
        // console.log(result);
        this.setState({
          accountList: result
        })
    })
  }

  processCSV() {
    var fileInput = document.getElementById("csv-input")
    if(!fileInput.value){
      alert("No file")
      return;
    }
    Papa.parse(fileInput.files[0], {
      error: (err, file, inputElem, reason) => {
        alert(reason)
      },
      complete: (results) => {

        fileInput.value = "";
        this.setState({
          accountList: this.state.accountList.concat(results.data),
          buttonInvisible: true
        })
      }
    });
  }

  onInputFileChange() {
    this.setState({buttonInvisible: false})
  }

  render() {
    return (
      <div>
        <img className="App-logo" src="http://pledgie.com/assets/campaigns/23315/medium/database-logo.png?1390316899" alt="BOOM HEADSHOT" />

        <div className="App">
          <h1 className="databasIN">databasIN</h1>
          <input className="Input-spreadsheet" onChange={this.onInputFileChange.bind(this)} id="csv-input" type="file"></input>
          <button className="Input-spreadsheet" hidden={this.state.buttonInvisible} onClick={this.processCSV.bind(this)}>Upload</button>
        </div>

        <div className="Account-list">
          {this.state.accountList.map(function (account) {
            return <div>Account: {account.accountNumber}  SSN: {account.ssn} Branch: {account.branch} Employee: {account.employee} Open Date: {account.accountOpenDate}</div>
          })}
        </div>

        <NavLink to={"/"}>Back To Home</NavLink>

      </div>
    );
  }
}

export default App;
