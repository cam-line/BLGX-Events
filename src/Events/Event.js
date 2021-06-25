import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Confirm from "../SharedComponents/Confirm";

export class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deletePopup: false,
    };
  }
  toggleConfirm = () => {
    this.setState({ deletePopup: !this.state.deletePopup });
  };
  delete = (e) => {
    e.preventDefault();
    this.props.deleteEvent({
      index: this.props.id,
    });
  };
  render() {
    const { event, id } = this.props;

    return (
      <Card
        style={{ width: "18rem", minHeight: "300px" }}
        border="dark"
        className="event-card-container"
      >
        <div className="delete-event">
          {this.state.deletePopup === true ? (
            <Confirm delete={this.delete} toggleConfirm={this.toggleConfirm} />
          ) : (
            <button className="btn reddy-brown" onClick={this.toggleConfirm}>
              X
            </button>
          )}
        </div>
        <div
          className="clickable-event-card"
          onClick={this.props.toggleInfo}
          value={id}
        >
          <div style={{ width: "18rem" }}>
            <div className="event-image-container">
              <img className="event-image" src={event.image} alt="#" />
            </div>
          </div>
          <div className="event-body">
            <h3>{event.name}</h3>
            <h5>{event.startDate}</h5>
            <h6>{event.location}</h6>
          </div>
          <div className="btn-group navButtons">
            <div>
              <button
                value={id}
                onClick={this.props.toggleInfo}
                className="btn brewGreen"
              >
                Info
              </button>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

export default Event;
