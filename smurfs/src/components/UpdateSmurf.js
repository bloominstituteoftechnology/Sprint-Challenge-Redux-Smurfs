import React from 'react';
import { connect } from 'react-redux';
import { updateSmurf } from '../actions/index';
import { Link } from 'react-router-dom';

class UpdateSmurf extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: '',
            height: '',
            smurf: []
        }
    }

    componentDidMount(){
        const smurf = this.props.smurfs.find(item => `${item.id}` === this.props.match.params.id);
        this.setState({
            smurf: smurf
        })
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        const updatedSmurf = {
            name: this.state.name,
            age: this.state.age,
            height: this.state.height,
            id: this.state.smurf.id
        }
        console.log("updated smurf is", updatedSmurf);
        this.props.updateSmurf(updatedSmurf);
        this.setState({
            name: '',
            age: '',
            height: ''
        })
        this.props.history.push('/smurfs');
    }

    render(){
        return(
            <form onSubmit={this.submitHandler}>
                <input onChange={this.inputHandler} type="text" name="name" placeholder="Smurf's Name" value={this.state.name}></input>
                <input onChange={this.inputHandler} type="number" name="age" value={this.state.age}></input>
                <input onChange={this.inputHandler} type="text" name="height" placeholder="How short is this smurf?" value={this.state.height}></input>
                <button type="submit">Update Smurf</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    smurfs: state.smurfs,
    }
  };

export default connect(mapStateToProps, {updateSmurf})(UpdateSmurf);