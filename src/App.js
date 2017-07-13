import React, {Component} from 'react';
import Papa from "papaparse"
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      buttonInvisible: true,
      accountList: [
        [
          "923485101", "945-23-6845"
        ],
        [
          "924357534", "945-23-6843"
        ],
        [
          "934537654", "945-23-2345"
        ],
        [
          "905934245", "945-23-6543"
        ],
        [
          "920349101", "945-23-2453"
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
          accountList: this
            .state
            .accountList
            .concat(results.data),
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
      <div className="App">
        <img className="App-logo" src="http://pledgie.com/assets/campaigns/23315/medium/database-logo.png?1390316899" alt="BOOM HEADSHOT" />

        <h1 className="databasIN">databasIN</h1>

        <input onChange={this.onInputFileChange.bind(this)} id="csv-input" type="file"></input>
        <button hidden={this.state.buttonInvisible} onClick={this.processCSV.bind(this)}>Upload</button>

        <div>
          {this
            .state
            .accountList
            .map(function (account) {
              return <div>Account: {account[0]}  SSN: {account[1]}</div>
            })}

        </div>

      </div>
    );
  }
}

export default App;
