import React from 'react';
import "../../stylesheets/login.css";
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleDemo() {
    // e.preventDefault();
    const demo = {
      email: "demo@email.com",
      password: "password"
    }
    this.props.login(demo);
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.currentUser === true) {
    //   this.props.history.push('/tweets');
    // }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user); 
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`} className = "session-errors">
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className = "login-form-container">

         <video src="https://gitfit-app-images.s3.amazonaws.com/team-run.mp4" 
        autoPlay = {true} loop muted className = "login-video-background"></video>
          <div className = "login-form">


            <form onSubmit={this.handleSubmit} className = "form-content">

              <Link to = "/">            
                <span className = "login-logo">GitFit</span>
              </Link>

              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
                className = "login-input"
              />

              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
                className = "login-input"
              />

            <button className = "login-button">Log In</button>
            {this.renderErrors()}

            </form>
            <button className='demo-button' onClick = {this.handleDemo}>Demo</button>
          </div>
      </div>
    );
  }
}

export default Login;