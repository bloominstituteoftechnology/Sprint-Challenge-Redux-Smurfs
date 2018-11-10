import React, { Component } from 'react';
import Smurf from './Smurf';
import {getSmurfs} from '../actions';
// import {Connect} from 'react-redux';
import { connect } from 'react-redux';

class Smurfs extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getSmurfs();
    }
    render() {
         console.log(this.props)
        return (
            <div>
               {/* <Smurf />  */}
               <h1>{this.props.error}</h1>
               {this.props.smurfs.map( smurf => <Smurf key={smurf.name} smurf={smurf} />)}
            </div>
        );
    }
}

// export default Smurfs;

const mapStateToProps = state => {
     return {
         smurfs: state.smurfs,
         error:state.error,
         
     }
}

export default connect(mapStateToProps, {getSmurfs})(Smurfs)