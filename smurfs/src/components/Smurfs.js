import React, { Component } from 'react';
import axios from 'axios';
import Smurf from './Smurf';
import { Link } from 'react-router-dom';

class Smurfs extends Component {
  state = {
    smurfList: []
  }

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
      .then((response) => {
        console.log(response.data);
        this.setState({
          smurfList: response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changeItem() {
    const id = this.state.smurfList.id;

    axios.put(`/smurfs/${id}`, updates)
      .then((response) => {
        this.setState({
          name: updates.name,
          age: updates.age,
          height: updates.height
        })
      });
  }

  render() {
    return (
      <div className="Smurfs" >
        <h1>Smurf Village</h1>
        <ul>
          {this.state.smurfList.map((smurf) => {
            return <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id} />;
            <button onClick={changeItem}>
              Edit
            </button>
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;