import React from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../store/actions';
import SmurfsList from '../components/SmurfsList/SmurfsList';

class SmurfsListView extends React.Component {
    componentDidMount() {
        this.props.getSmurfs();
    }

    render() {
        return (
            <SmurfsList {...this.props} />
        );
    }
}

const mapStateToProps = state => ({
    smurfsList: state.smurfs
});

export default connect(mapStateToProps, { getSmurfs })(SmurfsListView);