import React, {Component} from 'react';
import {connect} from 'react-redux';
import Smurf from './Smurf';
import {getSmurfs} from '../actions/index'


class SmurfList extends React.Component {
    componentDidMount(){
        this.props.getSmurfs()
    }

    render(){
        return(
            <div>
                {this.props.smurfs.map(smurf =>
                    <Smurf smurf={smurf} />)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {getSmurfs})(SmurfList)