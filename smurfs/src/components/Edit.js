import React from 'react'; 
import { editSmurf } from '../actions/index'
import { connect } from "react-redux";



class Edit extends React.Component{
    constructor(props){
        super(props)
        this.formSubmit = this.formSubmit.bind(this)
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.state={
            Id:this.props.id,
            Name:this.props.smurf.name,
            Age:this.props.smurf.age,
            Height:this.props.smurf.height
        }
    }
    handleFieldChange(event){
        this.setState({[event.target.id]:event.target.value})
    }
    formSubmit(event){
        event.preventDefault();
        this.props.editSmurf(this.state.Id,
                                            {
                                                name:this.state.Name,
                                                age:this.state.Age,
                                                height:this.state.Height
                                            }
        );
        this.setState({
                Id:'',
                Name:'',
                Age:'',
                Height:''
            })
        this.props.history.push('/')
    }
    render(){
        return(
            <form onSubmit={this.formSubmit}>
                <p className='editHeader'>Name</p><input  className='input' id='Name' onChange={this.handleFieldChange} placeholder='Name' value ={this.state.Name}></input>
                <p className='editHeader'>Age</p><input className='input' id='Age' onChange={this.handleFieldChange} placeholder='Age' value ={this.state.Age}></input>
                <p className='editHeader'>Height</p><input className='input' id='Height' onChange={this.handleFieldChange} placeholder='Height' value={this.state.Height}></input>
                <button>save</button>
            </form>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
         id:ownProps.match.params.id,
         smurf:state.smurfs.find(smurf => ownProps.match.params.id == smurf.id) || null
    };
  };

  export default connect(mapStateToProps,{ editSmurf })(Edit);
  
