import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
// import { deleteSmurf, update}

class Smurfs extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.smurfs.map(smurf => {
                        return (
                            <li>{smurf.name}</li>
                        );
                    })}
                </ul>
            </div>    
        )
    }
}

const mapStateToProps = state => {
    return {
        deletingSmurf: state.smurfReducer.deletingSmurf,
        error: state.smurfReducer.error
    };
};

// export default connect(mapStateToProps, {})(Smurfs);
export default Smurfs;