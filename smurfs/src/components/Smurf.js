import React, { Component } from "react";


class Smurf extends Component{
    constructor(props){
        super(props)
        this.props = props
    }
    render(){
        return(
            <h2>{this.props.smurf.name}</h2>
        )
    }
}


export default Smurf