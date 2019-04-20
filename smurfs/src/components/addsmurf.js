import React, {Component} from 'react'

class AddSmurf extends Component {
    constructor() {
        super()
        this.state = {
            active: false,
            render: (<h1>nope</h1>),
            name: '',
            age: 0,
            height: '',
        }
    }
    componentDidMount = () => this.setState({render: this.inactive()})
    h_toggle_render = () => {
        this.setState(prevState => {
            const render = prevState.active ? this.inactive() : this.active()
            return {
                active: !prevState.active,
                render: render,
            }
        })
    }
    h_add_smurf = () => {
        const smurf = {
            name: this.state.name,
            age: parseInt(this.state.age, 10),
            height: this.state.height,
        }
        this.props.add(smurf)
        this.h_toggle_render()
    }
    h_update_smurf = e => this.setState({[e.target.name]: e.target.value})
    active = () =>
        (
            <div className='smurf'>
                <pre>#0</pre>
                <input type='text' onChange={this.h_update_smurf} name='name' placeholder='name'/>
                <button onClick={this.h_add_smurf}>Add</button>
                <input type='number' onChange={this.h_update_smurf} name='age' placeholder='age'/>
                <input type='text' onChange={this.h_update_smurf} name='height' placeholder='height'/>
                <button onClick={this.h_toggle_render}>Back</button>
            </div>
        )
    inactive = () =>
        (
            <div className='title smurf' onClick={this.h_toggle_render}>
                <h2>Add Smurf</h2>
            </div>
        )
    render = () => this.state.render

}

export default AddSmurf