import React from "react";
import { connect } from "react-redux";
import { fetchSmurfs, addSmurf, deleteSmurf } from "../actions";
import Smurfs from "./Smurfs";
import CreateSmurfForm from "./CreateSmurfForm";
import DeleteSmurfForm from "./DeleteSmurfForm";

class SmurfListView extends React.Component {
    componentDidMount() {
        this.props.fetchSmurfs();
    }

    render() {
        if (this.props.fetchingSmurfs) {
            return <h1>Gargamel couldn't stop them, the smurfs are on the way...</h1>
        }
        return (
            <div>
                <Smurfs smurfs={this.props.smurfs} />
                <CreateSmurfForm addSmurf={this.props.addSmurf} />
                {/* <DeleteSmurfForm deleteSmurf={this.props.deleteSmurf}/> */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        fetchingSmurfs: state.fetchingSmurfs,
    }
}

export default connect(
    mapStateToProps,
    { fetchSmurfs, addSmurf, deleteSmurf }
)(SmurfListView);