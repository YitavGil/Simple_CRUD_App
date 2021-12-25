import React, { Component } from "react";

class Input extends Component {
  state = { updatedName: "" };
  handleSubmit = () => {
    this.props.handleCallback(this.state.updatedName, this.props.id);
  };
  handleOnChange = (e) => {
    this.setState({ updatedName: e.target.value });
  };
  render() {
    return (
      <div>
        <label htmlFor={this.props.type}></label>
        <input
          type="text"
          id={this.props.type}
          placeholder={"this.props.type"}
          value={this.state.updatedName}
          onChange={this.handleOnChange}
        />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}
export default Input;