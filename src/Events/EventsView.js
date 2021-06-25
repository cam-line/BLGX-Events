import React, { Component } from "react";
import NavButton from "../SharedComponents/NavButton";
import Event from "./Event.js";
import CardDeck from "react-bootstrap/CardDeck";
import EventInfo from "./EventInfo";

export class EventsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false,
      currentCard: 0,
    };
  }

  toggleInfo = (e) => {
    this.setState({
      showInfo: !this.state.showInfo,
      currentCard: e.target.value,
    });
  };

  render() {
    const { values, events } = this.props;

    return !this.state.showInfo ? (
      <div className="container events">
        <div className="events-head">
          <div className="upcoming">
            <h2>Upcoming Events</h2>
          </div>
          <div className="create-event">
            <NavButton
              action={this.props.addEvent}
              label="Create Event"
              color="btn BrewLogixBlue"
            />
          </div>
        </div>
        <div className="events-body">
          {events.length === 0 ? (
            <div className="no-events-text">
              <h4>There are no current events scheduled yet.</h4>
            </div>
          ) : (
            <CardDeck className="card-deck">
              {events.map((event, index) => {
                return (
                  <div>
                    <Event
                      id={index}
                      event={event}
                      addEvent={this.props.addEvent}
                      deleteEvent={this.props.deleteEvent}
                      toggleInfo={this.toggleInfo}
                      toggleEdit={this.toggleEdit}
                      values={values}
                    />
                  </div>
                );
              })}
            </CardDeck>
          )}
        </div>
      </div>
    ) : (
      <EventInfo
        toggleInfo={this.toggleInfo}
        currentCard={this.state.currentCard}
        events={events}
        nextStep={this.props.nextStep}
        prevStep={this.props.prevStep}
        handleChange={this.props.handleChange}
        addEndDate={this.props.addEndDate}
        values={this.props.values}
        saveImage={this.props.saveImage}
      />
    );
  }
}

export default EventsView;
//<Map />
