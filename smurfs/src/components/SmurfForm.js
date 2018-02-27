import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class SmurfForm extends Component {
  state = {
    name: '',
    age: '',
    height: ''
  };

submitNewSmurf = (e) => {
  e.preventDefault();
  this.props.addSmurf(this.state);
};

newSmurfsName = (e) => {
  this.setState({
    name: e.target.value
  });
};

newSmurfsAge = (e) => {
  this.setState({
    age: e.target.value
  });
};

newSmurfsHeight = (e) => {
  this.setState({
      height: e.target.value
  });
};

  render() {
    return (
      <div>
        <h2>Create New Smurf</h2>
        <form>
         <input type="text" name="name" placeholder="name" onChange={this.newSmurfsName} />
         <input type="text" name="age" placeholder="age" onChange={this.newSmurfsAge} />
         <input type="text" name="height" placeholder="height" onChange={this.newSmurfsHeight} />
         <button onClick={(e) => {this.submitNewSmurf(e)}}> Add </button>

        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
    const {rootReducer} = state;
    return {
        error: state.error,
        newSmurf: state.newSmurf
    }
};

export default connect(mapStateToProps, { addSmurf })(SmurfForm);
