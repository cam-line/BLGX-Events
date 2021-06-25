/* Cameron Line
 * Mock Events Application for Market my Brewery @ BrewLogix
 *
 */
import React, { Component } from "react";
import AddEventForm1 from "./AddEventForm1";
import AddEventForm2 from "./AddEventForm2";
import AddEventForm3 from "./AddEventForm3";
import EventsView from "../Events/EventsView";
export class AddEventControl extends Component {
  // state containing event information
  state = {
    step: 3,
    events: [],
    name: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    location: "",
    description: "",
    ageRestriction: "",
    minCost: 0,
    maxCost: 0,
    link: "",
    noEndDate: true,
    image: "https://brewlogix.com/wp-content/uploads/2021/03/X_Logo_Color.png",
    categories: [],
  };

  componentDidMount() {
    /*
    // retrieve json data from server
    fetch("http://localhost:3000/events")
      .then((response) => response.json())
      .then((data) => this.setState({ events: data.total }));*/
  }

  //------------Callbacks------------//
  nextStep = () => {
    // callback used to change to next page of the form
    const { step } = this.state;
    step === 2 ? this.setState({ step: 3 }) : this.setState({ step: step + 1 });
    console.log(step);
  };

  prevStep = () => {
    // callback used to change to the previous page
    const { step } = this.state;
    this.setState({ step: step - 1 });
    step === -1
      ? this.setState({ step: 3 })
      : this.setState({ step: step - 1 });
    console.log(step);
  };

  addEvent = () => {
    // called on events page when user wants to add an event
    // renders the first page of the form
    this.setState({ step: 0 });
  };

  editEvent = () => {
    // TODO -
  };

  handleChange = (input) => (e) => {
    // sets input value to the corresponding variable in state
    // called in the forms
    this.setState({ [input]: e.target.value });
  };

  addEndDate = () => {
    // flips boolean value to be true so that the user can add an end date when they press a button on form 1
    this.setState({ noEndDate: !this.state.noEndDate });
  };

  deleteEvent = (index) => {
    let newEvents = this.state.events; // store events in a new var
    newEvents.splice(index, 1); // remove the event from the specified index parameter
    // update events in state
    this.setState({
      events: newEvents,
    });
  };

  saveEvent = (event) => {
    // called on the third form when the user submits their info

    let newEvents = this.state.events; // store events in a new var
    newEvents.push(event);

    // convert data to json and use POST method
    /*
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    };

    // upload json data to the rest server
    fetch("http://localhost:3000/events", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        newEvents.push(event);
        this.setState({ events: data });
        console.log(newEvents);
      })
      .catch((error) => {
        this.setState({ errorMessage: error.toString() });
        console.error("Error", error);
      });
      */

    // reset state values so that input fields on the forms reset
    this.setState({
      events: newEvents,
      step: 3,
      name: "",
      startDate: "",
      startTime: "",
      endDate: "",
      endTime: "",
      location: "",
      description: "",
      ageRestriction: "",
      minCost: 0,
      maxCost: 0,
      link: "",
      noEndDate: true,
    });
    //this.setState({ events: [...this.state.events, item] });
  };

  saveImage = (e) => {
    // updates image state when user adds an image
    this.setState({
      image: URL.createObjectURL(e.target.files[0]),
    });
  };

  getEventInfo = () => {
    // renders event information component
    this.setState({ step: 4 });
  };

  render() {
    // destructure state elements
    const {
      step,
      name,
      startDate,
      startTime,
      endDate,
      endTime,
      location,
      description,
      ageRestriction,
      minCost,
      maxCost,
      categories,
      link,
      events,
      noEndDate,
      image,
    } = this.state;
    // create an object containing all the elements from this events state
    const values = {
      name,
      startDate,
      startTime,
      endDate,
      endTime,
      location,
      description,
      ageRestriction,
      minCost,
      maxCost,
      categories,
      link,
      noEndDate,
      image,
    };
    console.log(step);
    // switch/case that uses the step variable to determine which component to render
    switch (step) {
      case 0: // form 1
        return (
          <div className="add-form">
            <AddEventForm1
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              addEndDate={this.addEndDate}
              values={values}
              showButtons={true}
            />
          </div>
        );
      case 1: // form 2
        return (
          <div className="add-form">
            <AddEventForm2
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
              showButtons={true}
            />
          </div>
        );
      case 2: // form 3
        return (
          <div className="add-form">
            <AddEventForm3
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
              saveEvent={this.saveEvent}
              saveImage={this.saveImage}
              showButtons={true}
            />
          </div>
        );
      default:
        // events page
        return (
          <div>
            <EventsView
              addEvent={this.addEvent}
              deleteEvent={this.deleteEvent}
              values={values}
              events={events}
              editEvent={this.editEvent}
              handleChange={this.handleChange}
              addEndDate={this.addEndDate}
              showButtons={true}
              saveImage={this.saveImage}
            />
          </div>
        );
    }
  }
}

export default AddEventControl;
