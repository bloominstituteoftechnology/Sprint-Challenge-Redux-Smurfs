import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import SmurfList from '../components/SmurfList.js';

class SmurfListView extends React.Components {
    componentDidMount() {
        this.props.getSmurfs();
    }
    render() {
        return (
            <SmurfList {...this.props} />
        );
    }
}
const mapStateToProps = state => ({
    smurfs: state.smurfs,
    getSmurfs: state.getSmurfs

});
export default connect(mapStateToProps, { getSmurfs })(SmurfListView);