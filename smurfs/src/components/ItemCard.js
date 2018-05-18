import React, { Component } from "react";

class ItemCard extends Component {
  render() {
      const {item} = this.props;
    return (
      <div>
        <div>{item.name}</div>
        <div>{item.age}</div>
        <div>{item.height}</div>
      </div>
    );
  }
}

export default ItemCard;
