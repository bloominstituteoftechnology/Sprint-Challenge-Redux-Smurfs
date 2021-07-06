import React, { Component } from 'react';
import './App.css';
import SelectedSmurf from './SelectedSmurf';
import { connect } from 'react-redux';
import { deleteSmurf, updateSingleSmurf, toggleShowUpdate } from '../actions';
import UpdateSmurfForm from './UpdateSmurfForm';

class Smurfs extends Component {
    handleDeleteSmurf = () => {
        const { id } = this.props.smurfSelected;
        this.propss.deleteSmurf(id);
    };

    handleShowSmurf = smurf => {
        this.props.updateSingeSmurf(smurf);
    };

    toggleShowUpdate = () => {
        this.props.toggleShowUpdate();
    };

    render() {
        return (
            <div>
                <ul>
                    {this.props.smurfs.map(smurf => {
                        return (
                            <li onClick={() => this.handleShowSmurf(smurf)} key={smurf.id}>
                                {smurf.name}
                            </li>
                        );
                    })}
                </ul>
                {Object.keys(this.props.smurfSelected).length > 0 ? (
                    <SelectedSmurf
                        handleShowSmurf={this.handleShowSmurf}
                        toggleShowUpdate={this.toggleShowUpdate}
                        handleDeleteSmurf={this.handleDeleteSmurf}
                        selected={this.props.smurfSelected}
                    />
                ) : null}
                {this.props.showUpdate ? (
                    <UpdateSmurfForm smurf={this.props.smurfSelected} />
                ) : null}
                {/* {this.props.deletingSmurf ? (
                    <img srd={logo} className="App-logo" alt="logo" />
                ) : null} */}
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        deletingSmurf: state.smurfReducer.deletingSmurf,
        error: state.smurfReducer.error,
        showUpdate: state.singleSmurfReducer.showUpdate,
        smurfSelected: state.singleSmurfReducer.smurfSelected
    };
};

export default connect(mapStateToProps, {
    deleteSmurf,
    updateSingleSmurf,
    toggleShowUpdate
})(Smurfs);