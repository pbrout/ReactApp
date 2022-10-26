import React, { Component } from "react";

class Edetails extends Component {
  render() {
    return (
      <div>
        <h2>Employee_Details</h2>
        <h3>Employee Name: {this.props.Prop1}</h3>
        <h3>Employee Salary: {this.props.Prop2}</h3>
        <h3>Employee Loc: {this.props.Prop3}</h3>
      </div>
    );
  }
}

export default Edetails;
