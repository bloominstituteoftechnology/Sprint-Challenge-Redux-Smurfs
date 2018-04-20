import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf } from '../actions';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

    componentDidMount() {
      this.props.getSmurfs();
    }

    handleChange(event) {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    handleSubmit() {
      this.props.addSmurf(this.state);
      this.setState({
        name: '',
        age: '',
        height: ''
      });
    }

  render() {
    return (
      <div className="App">
        <h1> Redux Smurf Village </h1>
        <form onSubmit={() => this.handleSubmit()}>
          <input name="name" placeholder="Enter a name..." onChange={this.handleChange.bind(this)} />
          <input name="age" placeholder="Enter an age..." onChange={this.handleChange.bind(this)} />
          <input name="height" placeholder="Enter a height..." onChange={this.handleChange.bind(this)} />
          <input className="submit" type="submit" />
          {this.props.smurfs.map((smurf) => {
          return (
            <div key={smurf.id}>
              <h4>{smurf.name}</h4>
              <p>Age: {smurf.age} smurf years old.</p>
              <p>Height: {smurf.height} cm tall</p>
            </div>
          );
        })}
        <img src="https://i.pinimg.com/originals/70/32/85/70328534e1f4f4916a6bd70e898ecbef.png" alt="smurf-house"></img>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching
  };
};

export default connect(mapStateToProps, { getSmurfs, addSmurf })(App);
