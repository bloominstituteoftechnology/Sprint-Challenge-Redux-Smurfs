import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf }  from '../actions';



const url = 'http://localhost:3333/smurfs'

class SmurfForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addSmurf = () => {
      const { name, height, age } = this.state;
      const smurf = {name, height, age};

      if (name === ''|| height === '' || age==='') return;

      this.props.addSmurf(smurf);
      this.setState( {name: '', height: '', age: ''});
  }

//   addSmurf = event => {
//     event.preventDefault();
//     // add code to create the smurf using the api

//     //solution:
    
//       // const { name, age, height }  = this.state;
//       // const newSmurf = { name, age, height };

//       const smurf = {
//         name: this.state.name,
//         age: this.state.age,
//         height: this.state.height
//       }
//       axios
//       .post(url, smurf)
//       .then(response => {
//         this.props.handleSubmit(response.data);
//         this.setState({ name: '', age: '', height: '' });
//       })
//       .catch(err => console.log(err));

//     this.setState({
//       name: '',
//       age: '',
//       height: ''
//     });
//   }



  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={event => event.preventDefault()}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button onClick = {this.addSmurf} type="submit">Add to the village</button>
        </form>
    
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, {addSmurf})(SmurfForm);