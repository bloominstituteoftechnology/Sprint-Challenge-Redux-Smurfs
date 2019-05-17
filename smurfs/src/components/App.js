import React, { Fragment } from 'react'
import { connect } from "react-redux"; // THE CONNECT FUNCTION MAKES OUR COMPONENT AWARE OF REDUX
import { getSmurfs, addSmurf } from "../actions"; // IMPORT DECLARED ACTIONS
import Header from "./Header";
import Form from "./Form";


const App extends Component {
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

export default App;

