import React, { Component } from "react";
import ReactDOM from 'react-dom'
import Form from './Form';
import './Home.css';
import {
  Link
} from 'react-router-dom';
class Home extends Component {
  constructor() {
    super();
    this.divisions= ['XYZ Warszawa, Poland', 'ABC Kraków, Poland', 'RNQ Berlin, Germany'];
    this.state = {
      selectedDivision: "",
      style: {visibility: 'hidden'}
    };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    var handleToUpdate = this.props.handleToUpdate;
return (
      <div>
      <div className="btn-group">
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
      <div  style={this.state.style}>
      <button>
        <Link to="/form"   style={{textDecoration: 'none'}}>Next</Link >
      </button>
      </div>
      </div>
    );
    }


    handleClick=(e)=>{
           e.preventDefault();
           this.setState({selectedDivision : "Selected: "+e.target.value})
           this.setState({style : {visibility: 'visible'}})
       }
}
export default Home;
