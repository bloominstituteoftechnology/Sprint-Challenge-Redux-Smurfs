import React from 'react';
import { connect } from "react-redux";
import { deleteSmurf, editSmurf } from '../actions';

class Smurf extends React.Component{
    constructor() {
        super();
        this.state={
            name: '',
            age: null,
            height: null
        }
    }
    handleFormInput = e=> {
        e.preventDefault();
        this.setState({ [e.target.placeholder]: e.target.value });
    }
    render() {
        let smurf = this.props.smurf;
        return (
            <div className="Smurf">
                <div className="info">
                    <p>{smurf.name}</p>
                    <p>{smurf.age}</p>
                    <p>{smurf.height}</p>
                </div>
                <button onClick={()=>this.props.deleteSmurf(smurf.id)}>delete</button>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    this.props.editSmurf(Object.assign({}, this.state, {id: smurf.id}))
                    }
                    }>
                    <input type="text" onChange={this.handleFormInput} placeholder="name" />
                    <input type="text" onChange={this.handleFormInput} placeholder="age" />
                    <input type="text" onChange={this.handleFormInput} placeholder="height" />
                    <button>edit</button>
                </form>
            </div>
        )
    }    
    
    
}

const mapStateToProps = state => {
    // console.log(state);
    return ({
    })    
}

export default connect(
    mapStateToProps,
    { deleteSmurf, editSmurf } 
  )(Smurf);
