import React from 'react';
import { connect } from 'react-redux';
import SmurfsList from './../components/SmurfsList';
import SmurfForm from './../components/SmurfForm';
import EditForm from './../components/EditForm';
import { fetchSmurfs, addSmurf, editForm } from '../actions';


class SmurfsListView extends React.Component {

    componentDidMount() {
        this.props.fetchSmurfs();
    }
    
    render() {
        return(
            <div className="smurflist-wrapper">
                
                { this.props.addForm ?
                
                <div>
                    <SmurfForm />
                    <SmurfsList smurfs={this.props.smurfs} /> 
                </div> 
                :
                <div>
                    <EditForm smurf={this.props.smurf} id={this.props.editId} />
                </div>    
            }
                    
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        loading: state.loading,
        error: state.error,
        adding: state.adding,
        added: state.added,
        deleting: state.deleting,
        deleted: state.deleted,
        editing: state.editing,
        edited: state.edited,
        editForm: state.editForm,
        addForm: state.addForm,
        smurf: state.smurf
    };
  };

export default connect(
    mapStateToProps,
    {
        fetchSmurfs,
        addSmurf,
        editForm
    }
)(SmurfsListView);