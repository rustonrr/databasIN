import React, {Component} from 'react';
import Papa from "papaparse"
import './App.css';
import { NavLink } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      buttonInvisible: true,
      accountList: [
        [
          "923485101", "945-23-6845", "0047", "Jon Snow", '07/04/2017'
        ],
        [
          "924357534", "945-23-4725", "0053", "Ned Stark", '07/04/2017'
        ],
        [
          "934537654", "945-23-1235", "0053", "Ned Stark", '07/04/2017'
        ],
        [
          "905934245", "945-23-6343", "0014", "Jaime Lannister", '07/04/2017'
        ],
        [
          "920349101", "945-23-2940", "0047", "Jon Snow", '07/04/2017'
          ]
      ]
    }
    // It looks like you can bind down on the onChange/onClick

    // this.processCSV = this
    //   .processCSV
    //   .bind(this);
    // this.onInputFileChange = this
    //   .onInputFileChange
    //   .bind(this);
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
        <NavLink to={"/landing"}> Test</NavLink>
        <div className="Account-list">
          {this.state.accountList.map(function (account) {
            return <div>Account: {account[0]}  SSN: {account[1]} Branch: {account[2]} Employee: {account[3]} Open Date: {account[4]}</div>
          })}
        </div>

        

      </div>
    );
  }
}

export default App;
