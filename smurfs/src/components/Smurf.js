import React from 'react';
import './App.css';
import EditSmurf from './EditSmurf';

class Smurf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditForm: false
    }
  }

  toggleEditForm = () => {
    this.setState({showEditForm: !this.state.showEditForm})
  }
  render() {
    return (
      <div key={this.props.smurf.id}>
        <h4>{this.props.smurf.name}</h4>
        <h4>{this.props.smurf.age}</h4>
        <h4>{this.props.smurf.height}</h4>
        {this.state.showEditForm ? <EditSmurf handleUpdate={this.props.handleUpdate} smurfID={this.props.smurf.id} />: null}
        <button type="button" onClick={this.toggleEditForm}>Edit Smurf</button>
        <button type="button">Snuff Smurf</button>
      </div>
    )
  }
}

export default Smurf;
