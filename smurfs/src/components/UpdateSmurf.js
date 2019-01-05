import React from 'react'
import { connect } from 'react-redux'

import { updateSmurf } from '../actions'

class UpdateSmurf extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            age: '',
            height: '',
        }
    }

    componentDidMount(){
        const { smurfs, match } = this.props
        const smurf = smurfs.find(item => item.id === Number(match.params.id))
        this.setState(smurf)
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.updateSmurf(this.state)
    }

    render(){
        return (
            <div>
            <h3> Update Smurf Form </h3>
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
                <button onClick={this.handleSubmit}> Update Smurf </button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, { updateSmurf })(UpdateSmurf)