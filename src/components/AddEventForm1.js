import React, { Component } from "react";
import NavButton from "./NavButton";
import { ProgressBar, Row, Col } from "react-bootstrap";
import PlacesAutocomplete from "react-places-autocomplete";
export class AddEventForm1 extends Component {
  /*First form when creating a new event*/
  render() {
    return (
      <form className="container p-3 my-3 border formBackground">
        <Row className="event-header">
          {/*header row with progress bar*/}
          <Col md={4}>
            <h3>Add Event</h3>
          </Col>
          <Col md={{ span: 4, offset: 3 }}>
            <h6>Step 1: Tell us about your event!</h6>
            <ProgressBar now={33} />
          </Col>
        </Row>
        <div>
          {/*name input field*/}
          <div className="form-group">
            <label htmlFor="name">Event Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              onChange={this.props.handleChange("eventName")}
              defaultValue={this.props.values.eventName}
              required
            />
          </div>
          {/*date and time input field*/}
          <div className="form-group">
            <div className="row">
              <div className="col">
                <label htmlFor="startDate">Start Date</label>
                <input
                  type="date"
                  id="startDate"
                  className="form-control"
                  onChange={this.props.handleChange("startDate")}
                  defaultValue={this.props.values.startDate}
                  required
                />
              </div>
              <div className="col">
                <label htmlFor="startTime">Start Time</label>
                <input
                  type="time"
                  id="startTime"
                  className="form-control"
                  onChange={this.props.handleChange("startTime")}
                  defaultValue={this.props.values.startTime}
                  required
                />
              </div>
            </div>
          </div>
          {/*button toggles input for end date/time*/}
          <div className="form-group">
            <div className="add-end-date">
              {this.props.values.noEndDate ? (
                <NavButton
                  action={this.props.addEndDate}
                  label="Add End Date and Time"
                  color="btn seafoamBlue"
                />
              ) : (
                <div className="row">
                  <div className="col">
                    <label htmlFor="endDate">End Date</label>
                    <input
                      type="date"
                      id="endDate"
                      className="form-control"
                      onChange={this.props.handleChange("startDate")}
                      defaultValue={this.props.values.startDate}
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="endTime">End Time</label>
                    <input
                      type="time"
                      id="endTime"
                      className="form-control"
                      onChange={this.props.handleChange("startTime")}
                      defaultValue={this.props.values.startTime}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          {/*location input field, autocomplete using Google Places*/}
          <div className="location-input" id="location-input">
            <div className="form-group">
              <label htmlFor="location">Location</label>

              <PlacesAutocomplete
                onChange={this.props.handleChange.bind(this, "location")}
                onSelect={this.props.handleChange.bind(this, "location")}
                defaultValue={this.props.values.location}
              >
                {({
                  getInputProps,
                  suggestions,
                  getSuggestionItemProps,
                  loading,
                }) => (
                  <div>
                    <input
                      className="form-control"
                      {...getInputProps({ placeholder: "Enter Address" })}
                    />
                    <div>
                      {loading ? <div>...Loading</div> : null}
                      {suggestions.map((suggestion) => {
                        /*const style = {
                          backgroundColor: suggestion.active
                            ? "79add5"
                            : "#fff",
                        };*/
                        return (
                          <div {...getSuggestionItemProps()}>
                            {suggestion.description}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>
            </div>
            <div className="form-group">
              <ul className="location-checkboxes">
                <div className="location-checkbox">
                  <input
                    type="checkbox"
                    value="off-premise"
                    name="location"
                    onClick={this.props.handleChange("location")}
                    defaultValue={this.props.values.location}
                  />
                  Off Premise Location
                </div>
                <div className="location-checkbox">
                  <input
                    type="checkbox"
                    value="online"
                    name="location"
                    onClick={this.props.handleChange("location")}
                    defaultValue={this.props.values.location}
                  />
                  Online
                </div>
                <div className="location-checkbox">
                  <input
                    type="checkbox"
                    value="tba"
                    name="location"
                    onClick={this.props.handleChange("location")}
                    defaultValue={this.props.values.location}
                  />
                  To be Announced
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className="navButtons">
          <div className="btn-group">
            <NavButton
              action={this.props.prevStep}
              label="Back"
              color="btn BrewLogixBlue"
            />
            <NavButton
              action={this.props.nextStep}
              label="Next"
              type="submit"
              color="btn brewGreen "
            />
          </div>
        </div>
      </form>
    );
  }
}

export default AddEventForm1;
