import React, {Component} from "react";
import { connect } from "react-redux";
import {addSmurf} from "../actions"

class Form extends Component {
    constructor(){
        super();
        this.state = {
            name:"",
            age:"",
            height:""
        }
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault();
        const data = {
            ...this.state,
            age:Number(this.state.age)
        }
        this.props.addSmurf(data).then(promise => {
            if(promise){
                this.setState({
                    name:"",
                    age:"",
                    height:""
                }) 
            }
        })  
    }

    render(){
        return(
            <form action="#" onSubmit={this.submitHandler}>
                <input onChange={this.changeHandler} type="text" name="name" placeholder="Name" value={this.state.name} required />
                <input onChange={this.changeHandler} type="number" name="age" placeholder="Age" value={this.state.age} required />
                <input onChange={this.changeHandler} type="text" name="height" placeholder="Height" value={this.state.height} required />

                <button type="submit">Add Smurf</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {error:state.error}
}


export default connect(mapStateToProps,{addSmurf})(Form)