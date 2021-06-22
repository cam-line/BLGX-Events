import React, { Component } from "react";
import NavButton from "./NavButton";
import { ProgressBar, Row, Col, CardDeck, Card } from "react-bootstrap";

export class AddEventForm3 extends Component {
  submit = (e) => {
    e.preventDefault();
    this.props.saveEvent({
      item: this.props.values,
    });
  };
  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      this.props.saveImage(event);
    }
  };
  render() {
    return (
      <div className="container p-3 my-3 border formBackground">
        <Row className="event-header">
          <Col md={4}>
            <h3>Add Event</h3>
          </Col>
          <Col md={{ span: 4, offset: 3 }}>
            <h6>Step 3: Get Ready to Party!</h6>
            <ProgressBar now={100} />
          </Col>
        </Row>

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
            src={this.props.values.image}
            style={{ width: 400 }}
          />
        </div>
        <div className="navButtons">
          <div className="btn-group navButtons">
            {this.props.showButtons === true ? (
              <NavButton
                action={this.props.prevStep}
                label="Back"
                type="submit"
                color="btn BrewLogixBlue"
              />
            ) : (
              <></>
            )}
            <NavButton
              action={this.submit}
              label="Save"
              color="btn reddy-brown"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AddEventForm3;
//style={{ display: "none" }}
