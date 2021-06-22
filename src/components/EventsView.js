import React, { Component } from "react";
import NavButton from "./NavButton";
import Event from "./Event.js";
import CardDeck from "react-bootstrap/CardDeck";
import Map from "./Map.js";
import EventInfo from "./EventInfo";
import EditEvent from "./EditEvent";

export class EventsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false,
      isEditing: false,
      currentCard: 0,
    };
  }

  toggleInfo = (e) => {
    this.setState({
      showInfo: !this.state.showInfo,
      isEditing: false,
      currentCard: e.target.value,
    });
  };

  toggleEdit = (e) => {
    this.setState({
      showInfo: false,
      isEditing: !this.state.isEditing,
      currentCard: e.target.value,
    });
  };
  render() {
    const { values, events } = this.props;

    return !this.state.showInfo & !this.state.isEditing ? (
      <div className="container border events-container">
        <div className=" events">
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
              <CardDeck>
                {events.map((event, index) => {
                  return (
                    <div>
                      <Event
                        id={index}
                        event={event.item}
                        addEvent={this.props.addEvent}
                        deleteEvent={this.props.deleteEvent}
                        toggleInfo={this.toggleInfo}
                        toggleEdit={this.toggleEdit}
                      />
                    </div>
                  );
                })}
              </CardDeck>
            )}
          </div>
        </div>
      </div>
    ) : this.state.showInfo ? (
      <EventInfo
        toggleInfo={this.toggleInfo}
        currentCard={this.state.currentCard}
        events={events}
      />
    ) : (
      <EditEvent
        toggleEdit={this.toggleEdit}
        nextStep={this.props.nextStep}
        prevStep={this.props.prevStep}
        handleChange={this.props.handleChange}
        addEndDate={this.props.addEndDate}
        values={values}
      />
    );
  }
}

export default EventsView;
//<Map />
