import React, { Component } from "react";
import PropTypes from "prop-types";
import "./__style.scss";

export default class Panel extends Component {
  onInputChange = event => {
    // sent out just the numbers
    this.props.onChange(event.target.value.replace(/\D/g, ""));
  };

  render() {
    return (
      <div
        className={`panel ${
          this.props.selected ? "active-panel" : "inactive-panel"
        }`}
      >
        <input
          value={this.props.value}
          type="text"
          placeholder="0"
          onChange={this.onInputChange}
        />
        {/* <div>
          {this.props.outputValue} equals {this.props.inputValue}
        </div> */}
      </div>
    );
  }
}

Panel.propTypes = {
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  value: PropTypes.any.isRequired
};
