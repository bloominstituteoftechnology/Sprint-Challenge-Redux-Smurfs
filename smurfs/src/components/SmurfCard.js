import React from 'react';
import {connect} from 'react-redux';

import DisplaySmurf from './DisplaySmurf';
import UpdateSmurf from './UpdateSmurf';
import {deleteSmurf} from '../actions/index';

class SmurfCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            update: false
        }
    }

    componentDidMount(){
        this.setState({update: false});
    }

    handleUpdate = event=>{
        event.preventDefault();
        this.setState({update: true});
    }

    handleDelete = event=>{
        event.preventDefault();
        this.props.deleteSmurf(this.props.smurf);
    }
    render(){
        return(
            <div>
                <DisplaySmurf smurf={this.props.smurf}/>
                {
                    this.state.update ?
                    <UpdateSmurf smurf={this.props.smurf}/> :
                    <div>
                        <button onClick={this.handleUpdate}>Update</button>
                        <button onClick={this.handleDelete}>Delete</button>
                    </div>
                }
                
            </div>
        )
    }
}

const mapStateToProps = state=>{
    return {}
}

export default connect(mapStateToProps, {deleteSmurf})(SmurfCard);