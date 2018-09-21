import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions';

import SmurfsList from '../components/Smurfs/SmurfsList';

class SmurfsListView extends Component {
    componentDidMount() {
        if (this.props.smurfsList.length === 0) {
            this.props.getSmurfs();
        };
    };

    handleDelete = id => {
        this.props.removeSmurf();
    }

    render() {
        return (
            <SmurfsList
                {...this.props}
                handleDelete={this.handleDelete}
            />
        );
    };
};

const mapStateToProps = state => {
    console.log('STATE', state);
    return {
        smurfsList: state.smurfsReducer.smurfs,
    };
};

export default connect(mapStateToProps, { getSmurfs })(SmurfsListView);