import React from 'react'

import { connect } from 'react-redux'
import { addSmurf } from '../actions'

class CreateSmurf extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: '',
            height: '',
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addSmurf(this.state)
    }

    render(){
        return (
            <div>
                <h3> Create Smurf Form </h3>
                <form>
                    <input
                        placeholder="smurf name"
                        type="text"
                        value={this.state.name}
                        name="name"
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="smurf age"
                        type="text"
                        value={this.state.age}
                        name="age"
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="smurf height"
                        type="text"
                        value={this.state.height}
                        name="height"
                        onChange={this.handleChange}
                    />
                </form>
                <button onClick={this.handleSubmit}> Add Smurf </button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, { addSmurf })(CreateSmurf)