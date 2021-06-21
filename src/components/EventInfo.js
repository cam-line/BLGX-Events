import React, { Component } from "react";
import NavButton from "./NavButton";

export class EventInfo extends Component {
  render() {
    const { events, currentCard } = this.props;
    const event = events[currentCard].item;
    console.log(event);
    return (
      <div className="container p-3 my-3 border event-info">
        <NavButton action={this.props.toggleInfo} label="Back" />
        <h1>{currentCard}</h1>
        <h1>{event.eventName}</h1>
      </div>
    );
  }
}

export default EventInfo;
