import React, {Component} from "react";
import "./App.css";
import {getSmurfs, addSmurf, deleteSmurf, updateSmurf} from "../actions";
import {connect} from "react-redux";

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      name: "",
      age: "",
      height: ""
    };
  }

  componentDidMount = () => {
    this.props.getSmurfs();
  };

  changeHandler = e => {
    console.log(e.target.value);
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = e => {
    e.preventDefault();
    const {name, age, height} = this.state;
    const newSmurf = {name, age, height};
    this.props.addSmurf(newSmurf);
    this.setState({name: "", age: "", height: ""});
  };

  updateInfo = (e, id) => {
    e.preventDefault();
    const {name, age, height} = this.state;
    const newInfo = {name, age, height};

    console.log(id, newInfo);
    this.props.updateSmurf(id, newInfo);
    this.setState(prevState => {
      return {isEditing: !prevState.isEditing};
    });
  };

  deleteSmurf = (e, id) => {
    e.preventDefault();
    this.props.deleteSmurf(id);
  };

  toggleEdit = e => {
    e.preventDefault();
    this.setState(prevState => {
      return {isEditing: !prevState.isEditing};
    });
    console.log(this.state.isEditing);
  };

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            required
            type="text"
            name="name"
            onChange={this.changeHandler}
            placeholder="Name"
            value={this.state.name}
          />
          <input
            required
            type="number"
            name="age"
            onChange={this.changeHandler}
            placeholder="Age"
            value={this.state.age}
          />
          <input
            required
            type="text"
            name="height"
            onChange={this.changeHandler}
            placeholder="Height"
            value={this.state.height}
          />
          <button>Add</button>
        </form>

        {this.props.fetchingSmurfs ? (
          <h1>Loading</h1>
        ) : (
          <div>
            {this.props.smurfs.map(smurf => {
              return (
                <div key={smurf.id}>
                  {!this.state.isEditing ? (
                    <h1>
                      {smurf.name}{" "}
                      <span>
                        <button onClick={e => this.deleteSmurf(e, smurf.id)}>
                          Delete
                        </button>
                        <button onClick={this.toggleEdit}>Edit</button>
                      </span>
                    </h1>
                  ) : (
                    <form onSubmit={e => this.updateInfo(e, smurf.id)}>
                      <input
                        type="text"
                        name="name"
                        placeholder={smurf.name}
                        onChange={this.changeHandler}
                      />
                      <button>Submit</button>
                      <button onClick={this.toggleEdit}>Cancel</button>
                    </form>
                  )}
                </div>
              );
            })}
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
  };
};

export default connect(
  mapStateToProps,
  {getSmurfs, addSmurf, deleteSmurf, updateSmurf}
)(App);
