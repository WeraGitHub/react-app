import React , {Component} from 'react';
import flask_logo from './images/flask-logo.png';
import python_logo from './images/python-logo.jpg';
import react_logo from './images/react-logo.png';

class AboutUs extends Component {
    render(){
        return (
        <div>
        <h1>About Us</h1>
          <p> The is a simple application to demonstrate ReactJS using a Python / Flask API</p> 
          <img src={python_logo} className="App-small" alt="python logo" />
          <img src={flask_logo} className="App-small" alt="flask logo" />
          <img src={react_logo} className="App-small" alt="react logo" />
        </div>
        );
    }
}

export default AboutUs;