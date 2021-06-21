import React, { Component } from "react";

export class NavButton extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.action}
          type={this.props.type}
          className={this.props.color}
        >
          {this.props.label}
        </button>
      </div>
    );
  }
}

export default NavButton;
