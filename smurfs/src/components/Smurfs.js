import React from 'react';
import { fetchSmurfs } from '../actions';
import { connect } from 'react-redux';


class Smurfs extends React.Component { 
//   constructor(props) {
//     super(props)
//     this.state = {
//       name: '',
//       age: '',
//       height: '',
//       id: 0
//     }
//   }

// componentDidMount() {

// }

// handleInputChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
// };

// handleDeleteSmurf = id => {
//     this.props.deleteSmurf(id);
// }

  render() {
    const { name, age, height } = this.props.smurf;
  return (
    <div className="Smurfs">
      <h3>{name}</h3>
      <strong>{height} tall</strong>
      <p>{age} smurf years old</p>
      {/* <button {...this.props} onClick={this.deleteSmurf}>Delete Smurf</button> */}
    </div>
  );
};
}


const mapStateToProps = state => {
    return {
        fetchingSmurfs: state.fetchingSmurfs
    }
}

export default connect(mapStateToProps,{ fetchSmurfs })(Smurfs);
