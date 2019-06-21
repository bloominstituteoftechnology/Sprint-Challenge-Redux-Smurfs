import React, { Component } from 'react'

export default class AddSmurfForm extends Component {


    render() {
        return (
            <form action="">
                <h5>Name</h5>
                <input type="text"/>
                <h5>Age</h5>
                <input type="text"/>
                <h5>Height</h5>
                <input type="text"/>
                <br/><br/>
                <button>Add smurf to village</button>
            </form>
        )
    }
}
