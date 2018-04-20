// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { updateSmurf } from '../actions';

// class UpdateForm extends Component {

//   }

//   handleUpdate = smurf => {
//     const updatedSmurf = {
//       name: this.state.name !== "" ? this.state.name : smurf.name,
//       age: this.state.age !== "" ? this.state.age : smurf.age,
//       height: this.state.height !== "" ? this.state.height : smurf.height,
//       id: smurf.id
//     }
//     this.props.updateSmurf(updatedSmurf, smurf.id);
//     this.setState({ name: "", age: "", height: "" });
//   }

//   render() {
//     return (
//       <div>
//         <input 
//           type="text"
//           placeholder="name"
//           name="name"
//           value={this.state.name}
//           onChange={event => this.setState({ [event.target.name]: event.target.value })}
//         />
//         <input 
//           type="text"
//           placeholder="age"
//           name="age"
//           value={this.state.age}
//           onChange={event => this.setState({ [event.target.name]: event.target.value })}
//         />
//         <input 
//           type="text"
//           placeholder="height"
//           name="height"
//           value={this.state.height}
//           onChange={event => this.setState({ [event.target.name]: event.target.value })}
//         />
//         <button onClick={() => this.handleUpdate(smurf)}>update</button>
//       </div>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     smurfs: state.crud.smurfs
//   }
// }

// export default connect(mapStateToProps, { updateSmurf })(UpdateForm);