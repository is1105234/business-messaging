// dependencies
import React, { Component } from 'react';

class LogIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Log In</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="text"
              name="email"
              autoComplete="off"
              required
            />
          </label>
          <label>
            Password:
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              autoComplete="off"
              required
            />
          </label>
          <input type="submit" value="Log In"></input>
        </form>
      </div>
    );
  }
}

export default LogIn;
