import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSingleSmurf, toggleShowUpdate, deleteSmurf } from '../actions';

class Smurfs extends Component {
    handleShowSmurf = smurf => {
        this.props.updateSingleSmurf(smurf);
      };

      toggleShowUpdate = () => {
        this.props.toggleShowUpdate();
      };

      handleDeleteSmurf = () => {
          const { id } = this.props.smurfSelected;
          this.props.deleteSmurf(id);
      };

    render() {
        return (
            <div className="smurf-container">
                <div className="smurfs">
                    {this.props.smurfs.map(smurf => {
                        return (
                            <div className="smurfCard"onClick={() => this.handleShowSmurf(smurf)} key={smurf.id}>
                                <div className="name"><h2> {smurf.name}</h2></div>
                                <div className="details"><p>Age: {smurf.age}</p>
                                <p>Height: {smurf.height}</p></div>
                            </div>
                        );
                    })}    
                </div>
            </div>
    );
    }
}

const mapStateToProps = state => {
    return {
        error: state.smurfsReducer.error,
        showUpdate: state.smurfReducer.showUpdate,
        smurfSelected: state.smurfReducer.smurfSelected,
        deletingSmurf: state.smurfsReducer.deletingSmurf
    }
}

export default connect(mapStateToProps, {
    updateSingleSmurf,
    toggleShowUpdate,
    deleteSmurf
})(Smurfs);