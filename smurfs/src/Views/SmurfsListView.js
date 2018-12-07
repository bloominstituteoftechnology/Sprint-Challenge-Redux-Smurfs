import React from 'react';
import { connect } from 'react-redux';

import SmurfsList from '../components/SmurfsList';

import { getSmurfs } from '../actions';

class SmurfsListView extends React.Component {
    componentDidMount() {
        this.props.getSmurfs();
    }

    render() {
        return (
            <div>
                <SmurfsList smurfs={this.props.smurfs} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        smurfs: state.smurfs,
        fetchingSmurfs: state.fetchingSmurfs,
        error: state.error
    }
}

export default connect(mapStateToProps, { getSmurfs })(SmurfsListView);