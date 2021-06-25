import React, { Component } from "react";
import { Row, CardDeck, Card } from "react-bootstrap";

export class EditEvent extends Component {
  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      this.props.saveImage(event);
    }
  };
  render() {
    const { events, currentCard } = this.props;
    const event = events[currentCard];

    return (
      <div className="edit-event-info border">
        <div className="edit-header">
          <h1>Edit Event Details</h1>
        </div>
        <div className="edit-form">
          <div>
            {/*name input field*/}
            <div className="form-group">
              <label htmlFor="name">Event Name</label>
              <input
                type="text"
                id="name"
                className="form-control"
                onChange={this.props.handleChange("name")}
                defaultValue={event.name}
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
                    defaultValue={event.startDate}
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
                    defaultValue={event.startTime}
                    required
                  />
                </div>
              </div>
            </div>
            {/*button toggles input for end date/time*/}
            <div className="form-group">
              <div className="add-end-date">
                {this.props.values.noEndDate ? (
                  <div>
                    <label for="end-date">+</label>
                    <button
                      id="end-date"
                      onClick={this.props.addEndDate}
                      className="btn seafoamBlue"
                    >
                      Add End Date and Time
                    </button>
                  </div>
                ) : (
                  <div className="row">
                    <div className="col">
                      <label htmlFor="endDate">End Date</label>
                      <input
                        type="date"
                        id="endDate"
                        className="form-control"
                        onChange={this.props.handleChange("startDate")}
                        defaultValue={event.startDate}
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="endTime">End Time</label>
                      <input
                        type="time"
                        id="endTime"
                        className="form-control"
                        onChange={this.props.handleChange("startTime")}
                        defaultValue={event.startTime}
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
                <input
                  type="text"
                  placeholder="Enter the address"
                  className="form-control"
                  onChange={this.props.handleChange("location")}
                  defaultValue={event.location}
                ></input>
              </div>
              <div className="form-group">
                <ul className="location-checkboxes">
                  <div className="location-checkbox">
                    <input
                      type="checkbox"
                      name="location"
                      onClick={this.props.handleChange("location")}
                      defaultValue={event.location}
                    />
                    Off Premise Location
                  </div>
                  <div className="location-checkbox">
                    <input
                      type="checkbox"
                      name="location"
                      onClick={this.props.handleChange("location")}
                      defaultValue={event.location}
                    />
                    Online
                  </div>
                  <div className="location-checkbox">
                    <input
                      type="checkbox"
                      name="location"
                      onClick={this.props.handleChange("location")}
                      defaultValue={event.location}
                    />
                    To be Announced
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div>
            {/*Input for event description*/}
            <div className="event-description-input">
              <h5>Description</h5>
              <textarea
                id="description"
                rows="4"
                cols="50"
                className="form-control"
                onChange={this.props.handleChange("description")}
                defaultValue={event.description}
              />
            </div>
            {/*Age input using radio buttons*/}
            <div className="event-age-input">
              <h5>Age Restrictions</h5>
              <div className="age-radio-buttons">
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    id="all-ages"
                    name="age-restriction"
                    className="form-check-input"
                    onClick={this.props.handleChange("ageRestriction")}
                    defaultValue={event.ageRestriction}
                  />
                  <label htmlFor="all-ages" className="form-check-label">
                    All Ages
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    id="18-and-over"
                    name="age-restriction"
                    className="form-check-input"
                    onClick={this.props.handleChange("ageRestriction")}
                    defaultValue={event.ageRestriction}
                  />
                  <label htmlFor="18-and-over" className="form-check-label">
                    18 and Over
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    id="21-and-over"
                    name="age-restriction"
                    className="form-check-input"
                    onClick={this.props.handleChange("ageRestriction")}
                    defaultValue={event.ageRestriction}
                  />
                  <label htmlFor="21-and-over" className="form-check-label">
                    21 and Over
                  </label>
                </div>
              </div>
            </div>
            {/*min/max price input with a min price of 0*/}
            <div className="event-price-input">
              <h5>Price Range</h5>
              <div className="row">
                <div className="col">
                  <input
                    type="number"
                    id="min-cost"
                    name="min-cost"
                    className="form-control"
                    placeholder="min $"
                    onChange={this.props.handleChange("minCost")}
                    defaultValue={event.minCost}
                    min="0"
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="number"
                    id="max-cost"
                    name="max-cost"
                    className="form-control"
                    placeholder="max $"
                    onChange={this.props.handleChange("maxCost")} //defaultValue={this.props.values.maxCost}
                    defaultValue={event.maxCost}
                    min="0"
                    required
                  />
                </div>
              </div>
            </div>
            {/*Link to buy tickets*/}
            <div className="event-link-input">
              <h5>Ticket Link</h5>
              <input
                type="url"
                className="form-control"
                onChange={this.props.handleChange("link")}
                defaultValue={event.link}
              />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="categories ">
              <h5>Categories</h5>
              <CardDeck>
                <div className="categories-top">
                  <Row>
                    <Card style={{ width: "18rem" }} border="dark">
                      <Card.Img
                        variant="top"
                        src="https://res.cloudinary.com/rebelwalls/image/upload/b_black,c_fill,e_blur:2000,f_auto,fl_progressive,h_533,q_auto,w_800/v1479371039/article/R12051_image1"
                      />{" "}
                      <Card.Body>
                        <Card.Title>Art & Culture</Card.Title>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </Card.Body>
                    </Card>

                    <Card style={{ width: "18rem" }} border="dark">
                      <Card.Img
                        variant="top"
                        src="https://res.cloudinary.com/rebelwalls/image/upload/b_black,c_fill,e_blur:2000,f_auto,fl_progressive,h_533,q_auto,w_800/v1479371039/article/R12051_image1"
                      />{" "}
                      <Card.Body>
                        <Card.Title>Entertainment</Card.Title>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </Card.Body>
                    </Card>
                    <Card style={{ width: "18rem" }} border="dark">
                      <Card.Img
                        variant="top"
                        src="https://res.cloudinary.com/rebelwalls/image/upload/b_black,c_fill,e_blur:2000,f_auto,fl_progressive,h_533,q_auto,w_800/v1479371039/article/R12051_image1"
                      />{" "}
                      <Card.Body>
                        <Card.Title>Food</Card.Title>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </Card.Body>
                    </Card>
                    <Card style={{ width: "18rem" }} border="dark">
                      <Card.Img
                        variant="top"
                        src="https://res.cloudinary.com/rebelwalls/image/upload/b_black,c_fill,e_blur:2000,f_auto,fl_progressive,h_533,q_auto,w_800/v1479371039/article/R12051_image1"
                      />{" "}
                      <Card.Body>
                        <Card.Title>Games</Card.Title>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </Card.Body>
                    </Card>
                  </Row>
                </div>
                <div className="categories-bottom">
                  <Row>
                    <Card style={{ width: "18rem" }} border="dark">
                      <Card.Img
                        variant="top"
                        src="https://res.cloudinary.com/rebelwalls/image/upload/b_black,c_fill,e_blur:2000,f_auto,fl_progressive,h_533,q_auto,w_800/v1479371039/article/R12051_image1"
                      />{" "}
                      <Card.Body>
                        <Card.Title>Health & Fitness</Card.Title>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </Card.Body>
                    </Card>
                    <Card style={{ width: "18rem" }} border="dark">
                      <Card.Img
                        variant="top"
                        src="https://res.cloudinary.com/rebelwalls/image/upload/b_black,c_fill,e_blur:2000,f_auto,fl_progressive,h_533,q_auto,w_800/v1479371039/article/R12051_image1"
                      />{" "}
                      <Card.Body>
                        <Card.Title>Educational</Card.Title>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </Card.Body>
                    </Card>
                    <Card style={{ width: "18rem" }} border="dark">
                      <Card.Img
                        variant="top"
                        src="https://res.cloudinary.com/rebelwalls/image/upload/b_black,c_fill,e_blur:2000,f_auto,fl_progressive,h_533,q_auto,w_800/v1479371039/article/R12051_image1"
                      />{" "}
                      <Card.Body>
                        <Card.Title>Causes</Card.Title>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </Card.Body>
                    </Card>
                    <Card style={{ width: "18rem" }} border="dark">
                      <Card.Img
                        variant="top"
                        src="https://res.cloudinary.com/rebelwalls/image/upload/b_black,c_fill,e_blur:2000,f_auto,fl_progressive,h_533,q_auto,w_800/v1479371039/article/R12051_image1"
                      />{" "}
                      <Card.Body>
                        <Card.Title>Misc</Card.Title>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </Card.Body>
                    </Card>
                  </Row>
                </div>
              </CardDeck>
            </div>
          </div>
          <div className="upload-image">
            <h5>Add a Header Image </h5>
            <label htmlFor="getImage">
              <div id="plusImage" style={{ fontSize: 80 }}>
                +
              </div>
            </label>
            <input
              type="file"
              id="getImage"
              accept="image/*"
              className="filetype"
              onChange={this.onImageChange}
              hidden
            />
            <img
              id="target"
              alt="Preview"
              src={event.image}
              style={{ width: 400 }}
            />
          </div>
        </div>

        <div className="row edit-buttons">
          <div className="col cancel-btn">
            <button onClick={this.props.toggleEdit} className="btn reddy-brown">
              Cancel
            </button>
          </div>
          <div className="col save-btn">
            <button onClick={this.props.toggleEdit} className="btn brewGreen">
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default EditEvent;
