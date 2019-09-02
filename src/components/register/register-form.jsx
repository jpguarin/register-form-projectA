import React, { Component } from 'react';
import Input from '../common/forms-utilities/input';
import './register-form.scss'
import zxcvbn from 'zxcvbn';


class Register extends Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    sugestions: [],
    strength: 'Invalid',
    validEmail:''
  }


  handleChange = ({ currentTarget: input }) => {
    if (input.name === 'password') {
      this.validatePassword(input.value)
    }
    if (input.name === 'email')
      this.validateEmail(input.value);

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data });
  }

  validatePassword = password => {
    const { score, feedback } = zxcvbn(password);
    let strength;
    switch (score) {
      case 0:
      case 1:
        strength = 'invalid';
        break;;
      case 2:
        strength = 'Weak';
        break;
      case 3:
        strength = 'stong';
        break;
      case 4:
        strength = ' 👑 ';
        break;
      default:
        break;
    }
    this.setState({ score, sugestions: feedback.suggestions, strength });
  }

  renderLevelsIndicators = (active, score) => {
    const indicator = (active) ? 'level-indicator active score-' + score : 'level-indicator';
    return indicator;
  }

  validateEmail = email => {
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailReg.test(email)) 
      this.setState({ error : "This not a valid Email"});
    else
      this.setState({ error: '' });
  }

  render() {
    const { data, score, sugestions, strength, error  } = this.state;
    
    return ( 
      <form className="register-form">
        <Input
          name="email"
          label="Email"
          type="email"
          onChange={this.handleChange}
          error={error}
        />
        <Input
          name="password"
          label="Paswword"
          type="password"
          onChange={this.handleChange}
          error={(score >= 0 && score <= 2)}
        />
        <div className="password-validation-level">
          <span className={this.renderLevelsIndicators(score >= 0, score)}></span>
          <span className={this.renderLevelsIndicators(score > 1, score)}></span>
          <span className={this.renderLevelsIndicators(score >= 3, score)}></span>
        </div>
        <p>Strength:&nbsp;{strength}</p>
        <section className="password-sugestions">
          <ul>
          {sugestions.map( (item, idx) => (
            <li key={idx}>{item}</li>
          ))}
          </ul>
        </section>
        <button className="btn btn-primary" type="submit"
          disabled={!(data.email && score >= 3)}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default Register;