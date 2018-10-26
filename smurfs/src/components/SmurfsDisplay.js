import React from "react";
import { connect } from "react-redux";

import SmurfCard from "./SmurfCard";
import { fetchSmurfs } from "../actions";

class SmurfsDisplay extends React.Component {
    componentDidMount() {
        this.props.fetchSmurfs();
    }

    render() {
        if (this.props.fetchingSmurfs) {
            return <h1>Loading ...</h1>;
        }
        return (
            <div className="smurfs-container">
                {this.props.smurfs.map(smurf => {
                    return <SmurfCard key={smurf.name} smurf={smurf} />;
                })}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        fetchingSmurfs: state.fetchingSmurfs
    }
}

export default connect(
    mapStateToProps,
    {
        fetchSmurfs
    }
)(SmurfsDisplay);