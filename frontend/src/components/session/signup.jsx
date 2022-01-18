import React from 'react';
import "../../stylesheets/signup.css";
import { Link } from 'react-router-dom';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      handle: '',
      password: '',
      password2: '',
      height: '',
      weight: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let newWeight = Number(this.state.weight);
    let newHeight = Number(this.state.height);

    let user = {
      username : this.state.username,
      email: this.state.email,
      handle: this.state.handle,
      password: this.state.password,
      password2: this.state.password2,
      weight: newWeight,
      height: newHeight
    };

    this.props.signup(user, this.props.history); 
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
      <div className="signup-form-container">

        <video src="https://gitfit-app-images.s3.amazonaws.com/cooking-vid.mp4" 
        autoPlay = {true} loop muted className = "signup-video-background"></video>
        
        <form onSubmit={this.handleSubmit}>
          <div className="signup-form">
              

              <Link to = "/">            
                <span className = "signup-logo">GitFit</span>
              </Link>

               <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="Username"
                className = "signup-input"
              />

              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
                className = "signup-input"
              />
              <input type="text"
                value={this.state.handle}
                onChange={this.update('handle')}
                placeholder="Handle"
                className = "signup-input"
              />
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
                className = "signup-input"
              />
              <input type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm Password"
                className = "signup-input"
              />
              <input type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Height in centimeters (optional)"
                className = "signup-input"
              />
              <input type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Weight in pounds (optional)"
                className = "signup-input"
              />
            <input type="submit" value="Create Account" className = "signup-button"/>
            {this.renderErrors()}
            </div>
        </form>

        
      </div>
    );
  }
}

export default Signup;