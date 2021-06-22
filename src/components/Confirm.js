import React, { Component } from "react";

export class Confirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delTask: false,
    };
  }

  render() {
    return (
      <div>
        <div className="container border confirmation-container">
          <div className="confirmation-text">
            Are you sure you want to delete this event?
          </div>
          <div className="button-container">
            <button
              className="cancel-button"
              onClick={this.props.toggleConfirm}
            >
              Cancel
            </button>
            <button className="confirmation-button" onClick={this.props.delete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Confirm;
