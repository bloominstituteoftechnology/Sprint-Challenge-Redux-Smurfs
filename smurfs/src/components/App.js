import React, { Fragment } from 'react'
import { connect } from "react-redux"; // THE CONNECT FUNCTION MAKES OUR COMPONENT AWARE OF REDUX
import { getSmurfs, addSmurf } from "../actions"; // IMPORT DECLARED ACTIONS
import Header from "./Header";
import Form from "./Form";


class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        name: "",
        age: "",
        height: "",
      }
  }

  inputHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.props.addSmurf(this.state);
    this.setState({
      name: '',
      age: '',
      height: ''
    })
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  render(){
    return(
      <Fragment>
        <Header />
        <ul>
          {this.props.smurfs.map( (smurf, index) => {
            return<li key={index}>
                Name: {smurf.name} <br />
                Age: {smurf.age} <br />
                Height: {smurf.height}cm
              </li>})}
        </ul>
        <Form />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
  smurfs: state.smurfs,
  error: state.error,
  loading: state.loading,
  }
};

export default connect(mapStateToProps, { getSmurfs, addSmurf } )(App);

