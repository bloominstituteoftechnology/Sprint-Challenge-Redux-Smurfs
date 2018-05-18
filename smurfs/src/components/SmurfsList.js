import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';

class SmurfsList extends Component {

    componentDidMount () {
        this.props = fetchSmurfs ();
    }

    render () {
        return (
            <div>
                <ul>
                    {this.props.smurfs.map(smurf => {
                        return (
                            <div>
                                <li key={smurf}>{smurf.name}</li>
                            </div>
                        )
                    })}
                </ul>
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



export default connect(mapStateToProps, {fetchSmurfs}) (SmurfsList);

// const initialState = {
//     smurfs: [],
//     fetchingSmurfs: false,
//     addingSmurf: false,
//     updatingSmurf: false,
//     deletingSmurf: false,
//     error: null
//   }; 