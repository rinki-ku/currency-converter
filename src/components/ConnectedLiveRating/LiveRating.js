import React, { Component } from "react";
import PropTypes from "prop-types";
import "./__style.scss";
import repeat from "./repeat.svg";

export default class LiveRating extends Component {
  render() {
    return (
      <div className="live-rating">
        <img src={repeat} alt="icon" />
        {this.props.in} = {this.props.out}
      </div>
    );
  }
}

LiveRating.propTypes = {
  in: PropTypes.string.isRequired,
  out: PropTypes.string.isRequired
};
