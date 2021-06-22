import React, { Component } from "react";
import NavButton from "./NavButton";
import Event from "./Event.js";
import CardDeck from "react-bootstrap/CardDeck";
import Map from "./Map.js";
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
    const { values } = this.props;

    return !this.state.showInfo ? (
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
            {values.events.length === 0 ? (
              <div className="no-events-text">
                <h4>There are no current events scheduled yet.</h4>
              </div>
            ) : (
              <CardDeck>
                {values.events.map((event, index) => {
                  return (
                    <div>
                      <Event
                        id={index}
                        event={event.item}
                        addEvent={this.props.addEvent}
                        deleteEvent={this.props.deleteEvent}
                        toggleInfo={this.toggleInfo}
                      />
                    </div>
                  );
                })}
              </CardDeck>
            )}
          </div>
        </div>
      </div>
    ) : (
      <EventInfo
        toggleInfo={this.toggleInfo}
        currentCard={this.state.currentCard}
        events={values.events}
      />
    );
  }
}

export default EventsView;
//<Map />
