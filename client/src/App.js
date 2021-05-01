import React, {Component} from "react";
import logo from './logo.svg';
import { useHistory, Router, Switch, Route } from 'react-router-dom';
import './App.css';
import'./Dashboard.js'
import history from './history';


class App extends Component {
  
  // the next three functions are responsible for the backend connection
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
      fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
      this.callAPI();
  }

  render() {
    return (
      <div className="App">

        <title> Student Hours Hub </title>

        <header className="App-Header">
          <div className="rect1"></div>
          <div className="rect2"></div>
        </header>

        <body>
          <div className="Welcome-Text">
            <h1 className="App-title"> Welcome! </h1>
            <h2> Student Hours Hub </h2>
            <h2> North Carolina A&T State University</h2>
            <h2> College of Engineering - Computer Science Department</h2>
          </div>

          <div className="login-button">
            <button variant="primary" onClick={() => history.push('/Dashboard')}> Login with Aggie OneID </button>{' '}
          </div>
        </body>

        < p classname="App-intro">{this.state.apiResponse}</p>

      </div>
    );
  }

}


export default App;
