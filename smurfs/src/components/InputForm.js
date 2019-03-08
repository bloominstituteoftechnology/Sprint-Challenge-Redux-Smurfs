import React        from "react";
import { connect }  from "react-redux";
import { addSmurf } from "../actions"

class InputForm extends React.Component {
    constructor(){
        super();
        this.state = {
            name   : " ",
            age    : " ",
            height : " "
        }
    }
    changeHandler = e => {
        this.setState({
          ...this.state,
          [e.target.name]: e.target.value
        });
      }
    submitHandler = e => {
        e.preventDefault();
        const { name, age, height } = this.state;
        this.props.addSmurf({ name, age, height });
        this.setState({ name: '', age: '', height: '' });
    };

    render(){
        return(
            <form      onSubmit = {this.submitHandler}>
                <input onChange = {this.changeHandler} type="text"   name="name"   placeholder="Name"   value={this.state.name}   required />
                <input onChange = {this.changeHandler} type="number" name="age"    placeholder="Age"    value={this.state.age}    required />
                <input onChange = {this.changeHandler} type="text"   name="height" placeholder="Height" value={this.state.height} required />

                <button type="submit">Add Smurf</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {error:state.error}
}


export default connect(mapStateToProps,{addSmurf})(InputForm)