import React, { Component } from 'react';
import Input from '../common/forms-utilities/input';

class Register extends Component {
  state = {  }
  render() { 
    return ( 
      <form className="register-form">
        <Input
          name="email"
          label="Email"
          type="email"
        />
        <Input
          name="password"
          label="Paswword"
          type="password"
        />
        <button className="btn btn-primary" type="submit" >
          Submit
        </button>
      </form>
    );
  }
}

export default Register;