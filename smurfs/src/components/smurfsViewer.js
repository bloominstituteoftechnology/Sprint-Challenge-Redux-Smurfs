import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurfs, deleteSmurf, update } from '../actions/index';

import Smurfs from './smurfs';
import Form from './form';
import UpdateForm from './updateForm';

class SmurfsViewer extends Component {

    componentDidMount() {
        this.props.getSmurfs()
    }

    render() {
        console.log(this.props.smurfs)
        // if loading returns true then display loading smurfs..
        if(this.props.loading) {
            return (<h1>LOADING SMURFS....</h1>)
        }

        //if clicked resolves true then display the form to allow updating of the smurf that had its edit button clicked
        let form;
        if(this.props.clicked) {
            form = <UpdateForm />
        } else {
            form = <Form />
        }

        return(
            <div>
                <Smurfs smurfs={this.props.smurfs} deleteSmurf={this.props.deleteSmurf} update={this.props.update}/>
                {form}
            </div>
        )
    }
}

const mstp = state => {
    console.log("FROM VIEWER:", state)
    return {
        smurfs: state.smurfs,
        loading: state.loading,
        clicked: state.clicked
    }
}

export default connect(mstp, { getSmurfs, deleteSmurf, update })(SmurfsViewer);

