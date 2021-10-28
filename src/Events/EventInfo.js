import React, { Component } from "react";
import NavButton from "../SharedComponents/NavButton";
import EditEvent from "../EditEvent/EditEvent";

export class EventInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
    };
  }
  toggleEdit = (e) => {
    this.setState({
      edit: !this.state.edit,
    });
  };
  render() {
    const { events, currentCard } = this.props;
    const event = events[currentCard];
    //console.log(event);
    return (
      <div className="container p-3 my-3 border  event-info">
        {this.state.edit === true ? (
          <EditEvent
            toggleEdit={this.toggleEdit}
            handleChange={this.props.handleChange}
            addEndDate={this.props.addEndDate}
            values={this.props.values}
            events={events}
            currentCard={currentCard}
            saveImage={this.props.saveImage}
            editEvent={this.props.editEvent}
          />
        ) : (
          <></>
        )}
        <div className="row event-info-header">
          <button
            onClick={this.props.toggleInfo}
            className="btn BrewLogixBlue "
          >
            Back
          </button>
        </div>
        <div className="row border event-info-top">
          <div className="col event-info-name">
            <h1>{event.name}</h1>
          </div>
          <div className="col event-info-cost">
            <h2>
              $ {event.minCost} - {event.maxCost}
            </h2>
          </div>
        </div>
        <div className="row  event-info-image">
          <img
            src={event.image}
            alt="brewery logo"
            className="col brewery-image"
          />
        </div>
        <div className="row event-info-middle">
          <div className="col border event-about">
            <h4>About</h4>
            <p>{event.description}</p>
            <h4>Tickets</h4>
            <p>{event.link}</p>
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
            <a href="google.com">View on Map</a>
            <h4>Age Restrictions</h4>
            <p>{event.ageRestriction}</p>
          </div>
        </div>
        <div className="row edit-event">
          <button onClick={this.toggleEdit} className="btn brewGreen">
            Edit Event
          </button>
        </div>
      </div>
    );
  }
}

export default EventInfo;
