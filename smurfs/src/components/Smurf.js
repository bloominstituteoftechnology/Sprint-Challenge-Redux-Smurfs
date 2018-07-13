// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { fetchSmurfs, deleteSmurfs } from "../actions";

// class Smurfs extends Component {
//   componentDidMount() {
//     this.props.fetchSmurfs();
//   }

//   handleDelete = id => {
//     this.props.handleDelete(id);
//   };

//   render() {
//     return (
//       <div>
//         <li key={smurfs.name}>
//           Name: {smurfs.name}, <br />
//           Age: {smurfs.age}, <br />
//           Height: {smurfs.height} <br />
//         </li>
//         <button onClick={this.handleDelete}>delete</button>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     smurfs: state.smurfs,
//     deletedSmurf: state.deletedSmurf,
//     error: state.error
//   };
// };

// export default connect(
//   mapStateToProps,
//   {
//     deleteSmurfs,
//     fetchSmurfs
//   }
// )(Smurfs);
