import React, { Component } from "react";

class Cart extends Component {
  render() {
    return (
      <div>
        <h4>Your Cart</h4>
        <hr />
        <h3>Product Name: {this.props.Name}</h3>
        <h3>Product Price:{this.props.Price}</h3>
        <h3>Product Color:{this.props.Colors[0]}</h3>
      </div>
    );
  }
}

export default Cart;
