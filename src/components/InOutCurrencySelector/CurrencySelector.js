import React, { Component } from "react";
import PropTypes from "prop-types";
import "./__style.scss";

export default class CurrencySelector extends Component {
  onChange = event => {
    // sent out just the numbers
    this.props.onChange(event.target.value);
  };

  render() {
    return (
      <div className="currency-selector">
        <select value={this.props.value} onChange={this.onChange}>
          {this.props.currencies.map(c => {
            return (
              <option key={c} value={c}>
                {c}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

CurrencySelector.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
  currencies: PropTypes.array.isRequired
};
