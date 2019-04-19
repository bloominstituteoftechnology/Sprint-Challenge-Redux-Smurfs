import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getsmurf} from '../actions'
import {addSmurf} from '../actions'
import Smurf from './smurf'

class SmurfVillage extends Component {
    state={
        newsmurf: {
            name:"",
            age:"",
            height:"",
        }
    }
    componentDidMount(){
        this.props.getsmurf()
    }
    handlechange = (e) =>{
        e.preventDefault();
        this.setState({
            newsmurf:{
            ...this.state.newsmurf,
            [e.target.name] : e.target.value
            }
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addSmurf(this.state.newsmurf)
    }
    render() {
        return(
            <div>
                <div>
                    {this.props.smurfs.map((smurf, id) =>
                        <Smurf Key ={id} smurf={smurf} />)}
                </div>
                <div>
                    <form onSubmit = {this.handleSubmit}>
                <input onChange = {this.handlechange}
                type ='name'
                placeholder="name"
                name="name"
                value = {this.state.name}
                />
                <input onChange = {this.handlechange}
                type ="age"
                placeholder="age"
                name= "age"
                value = {this.state.age}
                />
                <input onChange = {this.handlechange}
                type ="height"
                placeholder ="height"
                name='height'
                value = {this.state.height}
                />
                <button value="submit">Add Smurf</button>
                </form>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    console.log(state.smurfs)
    return{
        smurfs: state.smurfs
    }
}
export default connect(
    mapStateToProps,
    {getsmurf, addSmurf}
)(SmurfVillage);