import React from 'react';
import { connect } from 'react-redux';
import { Smurf, AddNewSmurfForm } from '../components';
import { fetchSmurfs, addSmurfs } from '../actions';

class SmurfsListView extends React.Component {
    componentDidMount() {
        this.props.fetchSmurfs();
    }

    render() {
        if (this.props.fetchingSmurfs) {
            return (
                <h1> Collecting all your smurfs...</h1>
            )
        }

        return (
            <div>
                <AddNewSmurfForm add = {this.props.addSmurfs}/>
                {this.props.smurfs.map(smurfs => <Smurf key={smurfs.id} smurf={smurfs}/>)}
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        fetchingSmurfs: state.fetchingSmurfs,
        
        error: state.error
    }
}

export default connect (
    mapStateToProps,
    { fetchSmurfs,
      addSmurfs,
    Smurf }
)(SmurfsListView);