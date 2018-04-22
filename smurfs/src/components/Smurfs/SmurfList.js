import React from 'react';
import {getSmurfs} from "../../actions";
import {connect} from 'react-redux';

class SmurfList extends React.Component {

    componentDidMount() {
        this.props.getSmurfs();
    }

    render() {
        return (
            <ul>
            {this.props.smurfs.map((smurf) => {
                return <li id={smurf.id} key={smurf.id}>{smurf.name} {smurf.age}</li>
            })}
        </ul>
        );
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        addingSmurf: state.addingSmurf,
        fetchingSmurfs: state.fetchingSmurfs
    }
};

export default connect(mapStateToProps, {getSmurfs})(SmurfList);