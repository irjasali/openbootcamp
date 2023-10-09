import React, { Component } from "react";
import PropTypes from "prop-types";

class Gretting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 29,
    };
  }
  render() {
    return (
      <div>
        <h1>Hola tu nombre es: {this.props.name} </h1>
        <h2>La edad: {this.state.age}</h2>
      </div>
    );
  }
}

// eslint-disable-next-line react/no-typos
Gretting.PropTypes = {};

export default Gretting;
