import React from 'react';
import { getSmurfs } from "../actions";
import { connect } from "react-redux";
import Smurf from "./Smurf";

class SmurfList extends React.Component {
    
    componentDidMount(){
        this.props.getSmurfs();
    }

    render() {
        <div>
            { this.props.fetchingSmurfs ? <h2>Looking for Smurfs...</h2> : null}
            return (
                {this.props.smurfs.map(smurf => {
                return (
                    <Smurf key={smurf.id} smurf={smurf} />
                ) 
                })}        
        );
        </div>
    }
}

const mapStateToPops = state => {
    console.log(state);
    return {
        smurfs: state.smurfs,
        fetchingSmurfs: state.fetchingSmurfs
    }
}

export default connect(
    mapStateToPops,
    { getSmurfs }
)(SmurfList);