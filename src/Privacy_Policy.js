import React, { Component } from "react";

import './Privacy_Policy.css';
class Privacy_Policy extends Component {
  constructor() {
    super();
    this.state = {
      textAreaContent: [],
      isLoaded: false
    };
  }

  componentDidMount() {
     fetch('https://baconipsum.com/api/?type=all-meat&paras=5')
     .then(results => results.json())
     .then(json => {
             this.setState({
                 isLoaded: true,
                 textAreaContent: json
             })
         });
  }



  render() {
    let {
    isLoaded,
    items
    } = this.state;
    if (!isLoaded) {
      return (
        <div class="policy">
        <h1>Privacy Policy</h1>
        <p>
          Loading...
        </p>
        </div>
    )
    }
    else  { return (
      <div class="policy">
      <h1>Privacy Policy</h1>
        <p>
          {this.state.textAreaContent}
        </p>
      </div>
    );
    }
  }
}



export default Privacy_Policy;
