import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSmurfs, addSmurfs } from '../actions'


class Smurfs extends React.Component {
    constructor(){
        super()
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }

componentDidMount(){
    this.props.getSmurfs()
   
}

a

changeHandler = (event) => {
    this.setState({[event.target.name] : event.target.value })
}

addSmurf = (event) => {
    event.preventDefault()
    this.props.addSmurfs()
}

    render(){
        console.log(this.props.smurfs)
        return (
            <div>
        <form onSubmit={this.addSmurf}>
        <input placeholder='name' value={this.state.name} onChange={this.changeHandler} name='name' />
        <input placeholder='age' value={this.state.age} onChange={this.changeHandler} name='age' />
        <input placeholder='height' value={this.state.height} onChange={this.changeHandler} name='height' />
            <button type='submit'>Press</button>
        </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error,
    smurfs: state.smurfs
})

const mapDispatchToProps = {
    getSmurfs,
    addSmurfs,
}

export default connect(mapStateToProps, mapDispatchToProps)(Smurfs)