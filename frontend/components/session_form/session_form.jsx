import React from 'react';
import * as Demo from './demo_user_login'
import { Link } from 'react-router-dom';
import Header from '../header/header';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      // email:'',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoUser = this.handleDemoUser.bind(this)
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleDemoUser(e) {
    e.preventDefault();
    // debugger
    const user = Demo.setDemoUser()
    // debugger
    this.props.processForm(user)
    // debugger
  }


  renderErrors() {
    // debugger
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
    // debugger
  }

  render() {

    const demoLogin = (
      <button className="session-submit" onClick={this.handleDemoUser}>
        Demo User Login
      </button>
    )

    return (
      <div className="session-form-container">

     <div>
      <Header/>
     </div>
     <div className='session-body'>
      <div className='session-form-left'>
        <form onSubmit={this.handleSubmit} className="session-form-box">
          <h2 className='session-form-header'>Welcome to Yep!</h2>
          <br/>
          Please {this.props.formType} or {this.props.navLink}
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
          { (this.props.formType === "login") && demoLogin }
        </form>
        </div>
        <div className='session-form-right'>
          <img src="https://yep-seeds.s3.amazonaws.com/images/session-pic.png" width="280" height="250" />
        </div>
        </div>
      </div>
    );
  }
}

export default SessionForm;
