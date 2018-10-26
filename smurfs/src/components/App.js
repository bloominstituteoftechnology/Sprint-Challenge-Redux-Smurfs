import React, {Component} from "react";
import "./App.css";
import {getSmurfs, addSmurf, deleteSmurf} from "../actions";
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
      name: "",
      age: "",
      height: ""
    };
  }

  componentDidMount = () => {
    this.props.getSmurfs();
  };

  changeHandler = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = (e, newSmurf) => {
    e.preventDefault();
    this.props.addSmurf(newSmurf);
    this.setState({name: "", age: "", height: ""});
  };

  deleteSmurf = (e, id) => {
    e.preventDefault();
    this.props.deleteSmurf(id);
  };

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <form onSubmit={e => this.handleSubmit(e, this.state)}>
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
                  <h1>
                    {smurf.name}{" "}
                    <span>
                      <button onClick={e => this.deleteSmurf(e, smurf.id)}>
                        Delete
                      </button>
                    </span>
                  </h1>
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
  {getSmurfs, addSmurf, deleteSmurf}
)(App);
