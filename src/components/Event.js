import React, { Component } from "react";
import { Card } from "react-bootstrap";
import NavButton from "./NavButton";
export class Event extends Component {
  render() {
    const { event, id } = this.props;

    return (
      <Card style={{ width: "18rem", minHeight: "300px" }} border="dark">
        <div style={{ width: "18rem" }}>
          <div className="event-image" style={{ width: 300 }}>
            <img style={{ width: "18rem" }} src={event.image} alt="#" />
          </div>
        </div>
        <div className="event-body">
          <h3>{event.eventName}</h3>
          <h5>{event.startDate}</h5>
          <h6>{event.location}</h6>
        </div>
        <div className="btn-group navButtons">
          <div>
            <button
              value={id}
              onClick={this.props.toggleInfo}
              className="btn brewGreen "
            >
              Info
            </button>
          </div>
          <div>
            <NavButton
              className="edit-btn"
              label="Edit"
              action={this.props.addEvent}
              color="btn BrewLogixBlue "
            />
          </div>
        </div>
      </Card>
    );
  }
}

export default Event;
