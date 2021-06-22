import React, { Component } from "react";
import NavButton from "./NavButton";

export class EventInfo extends Component {
  render() {
    const { events, currentCard } = this.props;
    const event = events[currentCard].item;
    console.log(event);
    return (
      <div className="container p-3 my-3 border  event-info">
        <div className="row event-info-top">
          <div className="col event-info-name">
            <h1>{event.eventName}</h1>
          </div>
          <div className="col event-info-cost">
            <h2>
              $ {event.minCost} - {event.maxCost}
            </h2>
          </div>
        </div>
        <div className="row border event-info-image"></div>
        <div className="row event-info-middle">
          <div className="col border event-about">
            <h4>About</h4>
            <p>{event.description}</p>
          </div>
          <div className="col border event-details">
            <h4>Date & Time</h4>
            <p>
              {event.startDate} - {event.endDate}
            </p>
            <p>
              {event.startTime} - {event.endTime}
            </p>
            <h4>Location</h4>
            <p>{event.location}</p>
            <a>View on Map</a>
            <h4>Age Restrictions</h4>
            <p>{event.ageRestriction}</p>
          </div>
        </div>
        <div className="row event-info-bottom">
          <NavButton
            action={this.props.toggleInfo}
            label="Back"
            color="btn BrewLogixBlue "
          />
        </div>
      </div>
    );
  }
}

export default EventInfo;
