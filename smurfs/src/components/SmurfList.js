import React from 'react';
import { getSmurfs } from "../actions";
import { connect } from "react-redux";
import Smurf from "./Smurf";

class SmurfList extends React.Component {
    
    componentDidMount(){
        this.props.getSmurfs();
    }

    render() {
        if (this.props.fetchingSmurfs) {
            return (
                <div>
                    <h1>Looking for Smurfs...</h1>
                </div>
            );
        }
        return (
            <div>
            {this.props.smurfs.map(smurf => {
                return (
                    <Smurf key={smurf.id} smurf={smurf} />
                )
            })}
            </div>
        )
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