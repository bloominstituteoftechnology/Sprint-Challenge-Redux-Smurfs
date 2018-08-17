import React from 'react'

const Form = (props) => {
  return(
  <div>
      <form onSumbit = {props.submit} >
            <input type = "text" name = "addName" onChange = {props.change} value = {props.addName} />
            <input type = "number" name = "addAge" onChange = {props.change} value = {props.addAge} />
            <input type = "text" name = "addHeight" onChange = {props.change} value = {props.addHeight} />
            <button> Add </button>
        </form>
      </div>
    )
}

export default Form;
