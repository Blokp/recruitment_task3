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

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {style: {visibility: "visible"}};
}


  render() {
    return (
      <Router>
        <div className="container" >
          <ul>
            <button>
              <Link to="/" style={{textDecoration: 'none'}}>Home</Link>
            </button>
            <button>
              <Link to="/policy"   style={{textDecoration: 'none'}}>Privacy Policy</Link>
            </button>
          </ul>

          <Route exact path="/" component={Home} />
          <Route path="/form" component={Form} />
          <Route exact path="/policy" component={Privacy_Policy} />
        </div>
      </Router>
    );
  }
}

export default App;
