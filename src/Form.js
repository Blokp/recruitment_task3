import React, { Component } from "react";
import './Form.css';
import { useHistory } from 'react-router-dom';
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {styleForm: {visibility: "show"},
                styleSuccess: { visibility: "hidden"},
          name: '', email: '',  textAreaContent: '',
          maxLen: 5000, errors: {
            fullName: '', mail:'', data:''
          }};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
     fetch('https://baconipsum.com/api/?type=all-meat&paras=2')
     .then(results => results.json())
     .then(json => {
             this.setState({
                 isLoaded: true,
                 textAreaContent: json
             })
         });
  }


  handleChange = (event) => {
    //event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'fullName':
        errors.fullName =
          value.length > 32 || !validFullName.test(value)
            ? 'Please insert correct Name!'
            : '';
          this.setState({name: value});
        break;
      case 'mail':
        errors.mail =
          value.length > 32 || !validEmailRegex.test(value)
            ? 'Email is not valid!'
            : '';
            this.setState({email: value});
        break;
      case 'textField':
        errors.data =
          value.length === 0
            ? 'Content cannot be empty!'
            : '';
            this.setState({textAreaContent: value});
        break;
      default:
        break;
        this.setState({errors, [name]: value});
    }

    this.setState({errors, [name]: value}, ()=> {
        console.log(errors)
    })
  }


  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)
            && this.state.name.length > 0 && this.state.email.length > 0 ) {
      console.info('Valid Form');
      this.setState({styleForm: {visibility: "hidden"}});
      this.setState({styleSuccess: {visibility: "visible"}});
    }else{
      alert("Please insert valid data");
      console.error('Invalid Form');
    }
  }

  render() {
    const {errors} = this.state;
    const {textAreaContent} = this.state;
    return (
      <div className="form" >
      <div className="success" style={this.state.styleSuccess}>
          <label>
         Data succesfully sent
         </label>
      </div>

      <form onSubmit={this.handleSubmit} style={this.state.styleForm}>
        <div>
          <label>
            Name and Surname:
          </label>
        </div>
        <div>
          <input name="fullName" type="text" onChange={this.handleChange} noValidate />
          <div>{errors.fullName.length > 0 &&
            <span className='error'>{errors.fullName}</span>}</div>
        </div>
        <div>
          <label>
            Email:
          </label>
        </div>
        <div>
                <input  name="mail" type="text" onChange={this.handleChange} noValidate />
                    <div>{errors.mail.length > 0 &&
                    <span className='error'>{errors.mail}</span>}</div>
        </div>
        <div>
          <label>
            Content:

          </label>
        </div>
        <div>
          <textarea name="textField" className="textfield" defaultValue={this.state.textAreaContent} maxlength={this.state.maxLen} onChange={this.handleChange} noValidate></textarea>
          <div>{errors.data.length > 0 &&
            <span className='error'>{errors.data}</span>}</div>


        </div>
        <div >
            <input className="submitBtn" type="submit" value="Send"/>
        </div>
      </form>
      </div>
    );
  }
}

const validFullName = RegExp(/^[A-Za-z ,.'+]+$/);
const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

export default Form;
