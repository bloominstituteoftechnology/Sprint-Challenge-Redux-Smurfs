import React, { Component } from 'react';

class Forms extends Component {
    constructor(props)  {
        super(props)
        this.state = {
            nameValue: "",
            heightValue: "",
            ageValue: null,
        }
    }

    onChangeHandler = ({ target })    =>  {
        console.log(target);
        let content;
        if(target.name === "age")   {
            content = parseInt(target.value);
        }   else {
            content = target.value;
        }
        this.setState((state)   =>  ({
            [`${target.name}Value`]: content,
        }))
    }

    submitHandler = ()  =>  {
        this.props.addSmurf({name: this.state.nameValue, height: this.state.heightValue, age: this.state.ageValue});
        this.setState((state)   =>  ({
            nameValue: "",
            heightValue: "",
            ageValue: null,
        }))
    }
    render()    {
        return(
            <div>
            <input placeholder="name" name="name" value={this.state.nameValue} onChange={this.onChangeHandler}></input>
            <input placeholder="height" name="height" value={this.state.heightValue} onChange={this.onChangeHandler}></input>
            <input placeholder="age" name="age" value={this.state.ageValue} onChange={this.onChangeHandler}></input>
            <div onClick={this.submitHandler}>Submit</div>
            </div>
        )
    }
}

export default Forms;
