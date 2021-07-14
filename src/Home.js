import React, { Component } from "react";
import ReactDOM from 'react-dom'
import './Home.css';
class Home extends Component {
  constructor() {
    super();
    this.divisions= ['XYZ Warszawa, Poland', 'ABC Kraków, Poland', 'RNQ Berlin, Germany'];
    this.state = {
      selectedDivision: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    var handleToUpdate = this.props.handleToUpdate;
return (
      <div class="btn-group">
      <h1>Company Divisions</h1>
      <label>
        Select company division
      </label>
        <button value={this.divisions[0]} onClick={this.handleClick}>{this.divisions[0]} </button>
        <button  value={this.divisions[1]} onClick={this.handleClick}>{this.divisions[1]} </button>
        <button   value={this.divisions[2]} onClick={this.handleClick}>{this.divisions[2]} </button>
        <label>
          {this.state.selectedDivision}
        </label>
      </div>
    );
    }


    handleClick=(e)=>{
           console.log("this is working fine");
           e.preventDefault();
           this.setState({selectedDivision : "Selected: "+e.target.value})
           //handleToUpdate({style: {visibility: "visible"}})
           console.log(e.target);
       }
}
export default Home;
