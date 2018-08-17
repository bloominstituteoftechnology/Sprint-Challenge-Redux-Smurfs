import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  fetchSmurfsRequest,
  addSmurfRequest,
  deleteSmurfRequest,
} from '../actions';
import Form from '../components/Form';

class SmurfList extends Component {
  componentDidMount() {
    this.props.fetchSmurfsRequest();
  }

  conditionallyRender() {
    const {
      smurfs,
      addSmurfRequest,
      deleteSmurfRequest,
      isFetching,
      isAdding,
      isDeleting,
    } = this.props;
    if (isFetching) {
      return <div>Calling all the smurfs from village...</div>;
    }

    if (isAdding) {
      return <div>Genetically engineering a new smurf...</div>;
    }

    if (isDeleting) {
      return <div>Vaporizing a smurf... stand back this is not a drill...</div>;
    }

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
      <React.Fragment>
        <Form fields={fields} onSubmit={addSmurfRequest} />
        {smurfs.map(smurf => (
          <div key={smurf.id}>
            <h3>{smurf.name}</h3>
            <p>{smurf.height} tall</p>
            <p>{smurf.age} smurf years old</p>
            <button onClick={() => deleteSmurfRequest(smurf.id)}>
              Delete Smurf
            </button>
          </div>
        ))}
      </React.Fragment>
    );
  }

  render() {
    return <div>{this.conditionallyRender()}</div>;
  }
}

function mapStateToProps({ smurfs, isFetching, isAdding, isDeleting }) {
  return {
    smurfs,
    isFetching,
    isAdding,
    isDeleting,
  };
}

export default connect(
  mapStateToProps,
  { fetchSmurfsRequest, addSmurfRequest, deleteSmurfRequest },
)(SmurfList);
