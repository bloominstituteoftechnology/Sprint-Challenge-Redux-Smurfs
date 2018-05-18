import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurfs } from '../actions';

class CreateSmurf extends Component {

    componentDidMount() {
        this.props.addSmurfs();
    }

    render() { 
        console.log("PROPS:", this.props)
        return ( 
            <div>
            </div>
         )
    }
}

const mapStateToProps = state => {
    console.log("ADD_SMURF STATE:", state)
    return {
        smurfs: state.smurfs
    }
}
 
export default connect(mapStateToProps, { addSmurfs }) (CreateSmurf);