import React from 'react'

const Form = (props) => {
  return(
  <div>
      <form onSumbit = {props.submit} >
            <input type = "text" name = "name" onChange = {props.change} value = {props.name} />
            <input type = "ext" name = "age" onChange = {props.change} value = {props.age} />
            <input type = "text" name = "height" onChange = {props.change} value = {props.height} />
            <button> Add </button>
        </form>
      </div>
    )
}

export default Form;
