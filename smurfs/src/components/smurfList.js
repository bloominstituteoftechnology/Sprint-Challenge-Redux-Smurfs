import React, { Component } from 'react';
import { getSmurfs } from '../actions';
import { connect } from 'react-redux';
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
                            <div>Name</div>
                            <div>{smurf.name}</div>
                            <div>Age</div>
                            <div>{smurf.age}</div>
                            <div>Height</div>
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
        fetchingSmurfs: state.fetching,
        error: state.error,
    }
}

export default connect(mapStateToProps, { getSmurfs })(Smurfs); 