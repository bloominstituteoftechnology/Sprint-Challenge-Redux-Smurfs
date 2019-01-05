import React from 'react';
import SmurfPage from './SmurfPage';

import { getSmurfs } from '../actions'
import { connect } from 'react-redux'

class SmurfsList extends React.Component {

    componentDidMount(){
        this.props.getSmurfs()
    }


    render(){
        return (
            <div>
            <h1> Array of Smurfs below </h1>
                {this.props.smurfs.map(smurf => {
                    return (
                        <div>
                            <SmurfPage smurf={smurf}/> 
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        error: state.error,
        fetchingSmurfs: state.fetchingSmurfs,
    }
}

export default connect(mapStateToProps, { getSmurfs })(SmurfsList)