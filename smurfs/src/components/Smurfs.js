import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectedSmurf from './SelectedSmurf';
import { updateSingleSmurf, toggleShowUpdate, deleteSmurf } from '../actions';
import UpdateSmurfForm from './UpdateSmurfForm';

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
            <div className="container">
                <ul className="smurfs">
                    {this.props.smurfs.map(smurf => {
                        return (
                            <li onClick={() => this.handleShowSmurf(smurf)} key={smurf.id}>
                                <p>Name: {smurf.name}</p>
                                <p>Age:{smurf.age}</p>
                                <p>Height:{smurf.height}</p>
                            </li>
                        );
                    })}    
                </ul>
                {Object.keys(this.props.smurfSelected).length > 0 ? (
                    <SelectedSmurf
                        handleShowSmurf={this.handleShowSmurf}
                        toggleShowUpdate={this.toggleShowUpdate}
                        selected={this.props.smurfSelected}
                        handleDeleteSmurf={this.handleDeleteSmurf}
                    />
                    ) : null}
                    {this.props.showUpdate ? (
                    <UpdateSmurfForm smurf={this.props.smurfSelected} />
                    ) : null}
                    {this.props.deletingSmurf ? (
                        <h3>Smurf off!</h3>
                    ) : null}
        </div>
    );
    }
}

const mapStateToProps = state => {
    return {
        error: state.smurfsReducer.error,
        showUpdate: state.singleSmurfReducer.showUpdate,
        smurfSelected: state.singleSmurfReducer.smurfSelected,
        deletingSmurf: state.smurfsReducer.deletingSmurf
    }
}

export default connect(mapStateToProps, {
    updateSingleSmurf,
    toggleShowUpdate,
    deleteSmurf
})(Smurfs);