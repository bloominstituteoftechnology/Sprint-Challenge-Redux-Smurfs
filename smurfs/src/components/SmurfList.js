import React from 'react';
import {getSmurf} from '../actions/index';
import {connect} from 'react-redux';



import Smurf from './Smurf';

class SmurfList extends React.Component{
    constructor(){
        super()
    }
    componentDidMount(){
        this.props.getSmurf()
    }
    render(){
        return(
            <div className = 'list-container'>
                {this.props.smurfs.map(smurf =>{
                    return(
                        <Smurf key = {Date.now()} smurf = {smurf}/>
                    ) 
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{smurfs : state.smurfs}
}

export default connect(mapStateToProps, {getSmurf})(SmurfList)