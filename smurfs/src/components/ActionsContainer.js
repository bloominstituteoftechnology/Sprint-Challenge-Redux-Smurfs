import React from 'react'; 
import { connect } from "react-redux";
import { addingSmurf } from '../actions/index'


class ActionsContainer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Name:'',
            Age:'',
            Height:''
        }

    }
    handleFieldChange=(event)=>{
        this.setState({[event.target.id]:event.target.value})
    }
    formSubmit=(event)=>{
        event.preventDefault();
        this.props.addingSmurf({
            name:this.state.Name,
            age:this.state.Age,
            height:this.state.Height
        })
        this.setState({Name:'', Age:'', Height:'' })
    }
    render(){
        return(
            <form onSubmit={this.formSubmit}>
                <p>Name</p><input id='Name' onChange={this.handleFieldChange} placeholder='Name' value ={this.state.Name}></input>
                <p>Age</p><input id='Age' onChange={this.handleFieldChange} placeholder='Age' value ={this.state.Age}></input>
                <p>Height</p><input id='Height' onChange={this.handleFieldChange} placeholder='Height' value={this.state.Height}></input>
                <button>Submit Smurf</button>
            </form>
        )
    }
}


  export default connect(null,{ addingSmurf})(ActionsContainer);
  
