import React from 'react';
import * as Demo from './demo_user_login'


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
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to Yep!
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
    );
  }
}

export default SessionForm;
