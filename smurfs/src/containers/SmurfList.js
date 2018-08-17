import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSmurfsRequest } from '../actions';
import Form from '../components/Form';

class SmurfList extends Component {
  componentDidMount() {
    this.props.fetchSmurfsRequest();
  }

  render() {
    const { smurfs } = this.props;
    const fields = [
      {
        name: 'name',
        type: 'text',
        placeholder: 'Enter name',
      },
      {
        name: 'age',
        type: 'number',
        placeholder: 'Enter age',
      },
      {
        name: 'height',
        type: 'text',
        placeholder: 'Enter height in cm',
      },
    ];
    return (
      <div>
        <Form fields={fields} />
        {smurfs.map(smurf => (
          <div key={smurf.name}>
            <h3>{smurf.name}</h3>
            <p>{smurf.height} tall</p>
            <p>{smurf.age} smurf years old</p>
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps({ smurfs, isFetching }) {
  return {
    smurfs,
    isFetching,
  };
}

export default connect(
  mapStateToProps,
  { fetchSmurfsRequest },
)(SmurfList);
