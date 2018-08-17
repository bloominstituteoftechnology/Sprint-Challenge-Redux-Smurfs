import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs, addNewSmurf, deleteSmurf } from "../actions";
import SmurfsList from "./SmurfsList";
import AddSmurfForm from "./AddSmurfForm";

class SmurfsContainer extends Component {
constructor() {
    super();
    this.state = {
        name: "",
        age: "",
        height: ""
    };
}

  componentDidMount() {
    this.props.fetchSmurfs();
  }

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addNewSmurf = () => {
    this.props.addNewSmurf(this.state.name, this.state.age, this.state.height);
    this.setState({
        name: "",
        age: "",
        height: ""
    });
  };

  deleteSmurf = (id) => {
    this.props.deleteSmurf(id);
  };

  render() {
    return (
      <div>
        {this.props.fetchingSmurfs ? (
          <h1>Loading...</h1>
        ) : (
            <div>
            <SmurfsList
            smurfs={this.props.smurfs}
            delete={this.deleteSmurf}
            />
            <AddSmurfForm
            name={this.state.name}
            age={this.state.age}
            height={this.state.height}
            handleChange={this.inputHandler}
            addNewSmurf={this.addNewSmurf}
          />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  }
}

export default connect(mapStateToProps, {
    fetchSmurfs,
    addNewSmurf,
    deleteSmurf
})(SmurfsContainer);