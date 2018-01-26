import React, { Component } from 'react';
import { connect } from 'react-redux';
import { retrieveSmurf } from '../actions';
// import { updateSmurf, deleteSmurf } from '../actions';

class Smurfs extends Component {
//    handleDeleteSmurf = () => {
//    };

    render() {
        return(
            <div>
                <ul>
                    {this.props.smurfs.map(smurf => {
                        return (
                            <li key={smurf.id}>
                            {smurf.name}
                            {smurf.age}
                            {smurf.height}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         deleteSmurf: state.smurfReducer.deleteSmurf,
//         error: state.smurfReducer.error,
//     };
// };
// export default connect(mapStateToProps, {
//     deleteSmurf,
// })(Smurfs);