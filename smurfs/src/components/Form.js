import React from 'react'
import './Form.css'

const Form = (props) =>{
    return (
        <form className ='form' onSubmit ={props.submitHandler}>
            <h2>add a smurf to our list!</h2>
            <div>
                <input onChange = {props.inputHandler}value = {props.name}name = 'name' placeholder='name'/>
                <input onChange = {props.inputHandler}value = {props.age}name = 'age'placeholder='age'/>
                <input onChange = {props.inputHandler}value = {props.height}name = 'height' placeholder='height '/>
            </div>
            <button>ADD A SMURF</button>
        </form>
    )
}
export default Form