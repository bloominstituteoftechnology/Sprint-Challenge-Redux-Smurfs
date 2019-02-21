import React, { Component } from "react";
import SmurfCard from "./SmurfCard";
import { Link } from "react-router-dom";

class SmurfLists extends Component {
  render() {
    const { smurfs } = this.props;
    return (
      <section className="smurf-container">
        {smurfs.map((x, i) => (
          <Link
            key={i}
            to={`/smurf/${x.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <SmurfCard smurf={x} />
          </Link>
        ))}
      </section>
    );
  }
}

export default SmurfLists;
