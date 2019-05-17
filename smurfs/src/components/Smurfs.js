import React, {Component} from 'react';

import { connect } from 'react-redux';
import Smurf from './Smurf'
import { fetch } from '../actions'

class SmurfList extends Component {
    componentDidMount(){
        this.props.fetch();
    }

    render(){
        return(
            <ul>
                {this.props.smurfs.map(smurf =>{
                    return(
                        <Smurf 
                        smurf={smurf}
                        key={Math.random()}
                        />
                    )
                })}
                
            </ul>
        )
    }
}

const mapStateToProps = state => {
    return{
        smurfs: state.smurfs,
        
    }
}

export default connect(mapStateToProps, { fetch })(SmurfList);