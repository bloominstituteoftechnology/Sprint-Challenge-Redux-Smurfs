import React, { Component } from 'react';

class Smurf extends Component {
    render() {
    const { name, age, height } = this.props.smurf;
      return (
        <div className="smurf-attr">
            Name: {name}{'  '}
            Age: {age}{'  '}
            Height: {height}{' '}
            </div>
    )
};
};

export default Smurf;