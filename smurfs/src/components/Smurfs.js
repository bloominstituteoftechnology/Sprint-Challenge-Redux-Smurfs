import React, {Component} from 'react'; 
import './App.css'; 
import SelectedSmurf from './SelectedSmurf'; 
import {connect} from 'react-redux'; 
import {updateSingleSmurf, toggleShowUpdate} from '../actions'; 
import UpdateSmurfForm from './UpdateSmurfsFrom';

class Smurfs extends Component {
    handleShowSmurf = smurf =>{
        this.props.updateSingleSmurf(smurf); 
    }; 
    toggleShowUpdate =()=>{
        this.props.toggleShowUpdate(); 
    }; 
    render(){
        return (
            <div className="Container">
            <ul className="smurf-list">
            {this.props.smurfs.map(smurf =>{
                return(
                    <ul onClick={() => this.handleShowSmurf(smurf)} key={smurf.id}>
                    {smurf.name}
                    </ul>
                );
            })}
            </ul>
            {Object.keys(this.props.smurfSelected).length > 0 ? (
                <SelectedSmurf
                handleShowSmurf={this.handleShowSmurf}
                toggleShowUpdate={this.toggleShowUpdate}
                selected={this.props.smurfSelected}
                />
            ) : null}
            {this.props.showUpdate ? (
                <UpdateSmurfForm friend={this.props.smurfSelected} />
            ) : null}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        //error: state.smurfsReducer.error, 
        showUpdate: state.singleSmurfReducer.showUpdate, 
        smurfSelected: state.singleSmurfReducer.smurfSelected
    };
};
export default connect(mapStateToProps, {
    updateSingleSmurf, 
    toggleShowUpdate
})(Smurfs); 