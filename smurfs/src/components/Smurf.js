import React, { Component } from 'react';

class Smurf extends Component {
    render() {
      return (
        <div className="smurf-attr">
            Name: {this.props.name}
            Age: {this.props.age}
            Height: {this.props.height}
            </div>
    )
};
};

export default Smurf;