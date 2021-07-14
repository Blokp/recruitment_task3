import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home';
import Form from './Form';
import Privacy_Policy from './Privacy_Policy';
import Summary from './Summary'

class App extends Component {
  constructor(props) {
  super(props);
  //this.handleChange = this.handleChange.bind(this);
  this.state = {style: {visibility: "visible"}};
  this.handleClick = this.handleClick.bind(this);
  var handleToUpdate = this.handleToUpdate.bind(this);
}

handleToUpdate(arg){
      alert('We pass argument from Child to Parent: ' + arg);
      this.setState({style: {visibility: arg}});
  }


handleClick() {
  this.setState(prevState => ({
    isToggleOn: !prevState.isToggleOn
  }));
}


  render() {
    return (
      <Router>
        <div className="container"  parentCallback = {this.callbackFunction}>
          <ul>
            <button onClick={this.handleClick}>
              <Link to="/" style={{textDecoration: 'none'}}>Home</Link>
            </button>
            <button onClick={this.handleClick}>
              <Link to="/policy"   style={{textDecoration: 'none'}}>Privacy Policy</Link>
            </button>
          </ul>

          <Route exact path="/" component={Home} />
          <Route path="/form" component={Form} />
          <Route exact path="/policy" component={Privacy_Policy} />
          <Route path="/summary" component={Summary} />
        <div className="navigation" style={this.state.style}>
        <button id="Back">
          <Link to="/"  style={{textDecoration: 'none'}} >Back</Link>
        </button>
        <button id="Next">
          <Link to="/form"  style={{textDecoration: 'none'}}>Next</Link >
        </button>
        </div>
        </div>
      </Router>
    );
  }
}

export default App;
