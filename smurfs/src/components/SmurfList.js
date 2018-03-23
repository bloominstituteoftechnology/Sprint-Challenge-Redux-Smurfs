import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import './App.css';

class Smurfs extends Component {
    componentDidMount() {
        this.props.getSmurfs();
    }
 render() {
    return(
     <ul className='container'>
      {this.props.smurfs.map(smurf => {
        return (
         <li key={smurf.id}>
        <h3>Name</h3>
        <div>{smurf.name}</div>
             <h3>Age</h3>
            <div>{smurf.age}</div>
            <h3>Height</h3>
             <div>{smurf.height}</div>
    </li>
 )
})}
    </ul>
       )
    }
}

const mapStateToProps = state => {
    return { 
       smurfs: state.smurfs,
        fetching: state.fetching,
       error: state.error,
    }
}

export default connect(mapStateToProps, { getSmurfs })(Smurfs); 