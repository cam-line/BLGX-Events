import React, { Component } from "react";
import AddEventForm1 from "./AddEventForm1";
import AddEventForm2 from "./AddEventForm2";
import AddEventForm3 from "./AddEventForm3";
export class EditEvent extends Component {
  render() {
    return (
      <div>
        <h1>EDIT</h1>
        <div className="add-form">
          <AddEventForm1
            handleChange={this.props.handleChange}
            addEndDate={this.props.addEndDate}
            values={this.props.values}
            showButtons={false}
          />
          <AddEventForm2
            handleChange={this.props.handleChange}
            addEndDate={this.props.addEndDate}
            values={this.props.values}
            showButtons={false}
          />
          <AddEventForm3
            handleChange={this.props.handleChange}
            addEndDate={this.props.addEndDate}
            values={this.props.values}
            showButtons={false}
          />
        </div>
        <button onClick={this.props.toggleEdit}>Back</button>
      </div>
    );
  }
}

export default EditEvent;
