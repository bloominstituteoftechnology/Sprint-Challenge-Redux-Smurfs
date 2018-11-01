import React from 'react';
import { connect } from 'react-redux';
import { AddNewSmurfForm, SmurfList } from '../components';
import { fetchSmurfs, addSmurfs } from '../actions';
import { smurfsReducer } from '../reducers/smurfsreducer';

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
                <SmurfList smurfs={this.props.smurfs}/>
                
            </div>
            
        )
    }
}


const mapStateToProps = state => {
    const { smurfsReducer } = state;
    return {
        smurfs: smurfsReducer.smurfs,
        fetchingSmurfs: smurfsReducer.fetchingSmurfs,
        addSmurfs: smurfsReducer.addSmurfs,
        error: smurfsReducer.error
    }
}

export default connect (
   mapStateToProps,
    { fetchSmurfs,
      addSmurfs,
     }
)(SmurfsListView);