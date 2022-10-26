import React, { Component } from "react";
import Cart from "./Cart";

class Product extends Component {
  pName = "I Phone 13";
  pPrice = 60000;
  pColors = ["Red", "Green", "Blue", "White"];
  render() {
    return (
      <div>
        <h2>Product Details</h2>
        <hr />
        <Cart Name={this.pName} Price={this.pPrice} Colors={this.pColors} />
      </div>
    );
  }
}

export default Product;
