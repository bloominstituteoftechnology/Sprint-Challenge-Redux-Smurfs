import React, {Component} from 'react'

class Smurf extends Component {
    constructor(props) {
        super()
        this.state = {
            active: false,
            render: (<h1>Nope</h1>),
            id: props.data.id,
            name: props.data.name,
            age: props.data.age,
            height: props.data.age,
        }
    }
    componentDidMount = () => {
        this.setState({render: this.inactive()})
    }
    h_toggle_render = () => {
        this.setState(prevState => {
            const render = prevState.active ? this.inactive() : this.active()
            return {
                active: !prevState.active,
                render: render,
            }
        })
    }
    h_execution = () => {
        const smurf = {
            id: this.state.id,
            name: this.state.name,
            age: this.state.age,
            height: this.state.height,
        }
        this.props.kill(smurf)
        console.log(`${smurf.name} has been killed`)
    }
    h_change_smurf = () => {
        const smurf = {
            id: this.state.id,
            name: this.state.name ? this.state.name : this.props.data.name,
            age: this.state.age ? this.state.age : this.props.data.age,
            height: this.state.height ? this.state.height : this.props.data.height
        }
        this.props.change(smurf)
        this.h_toggle_render()
        console.log(`${smurf.name} has been replaced`)
    }
    h_update_smurf = e => this.setState({[e.target.name]: e.target.value})
    active = () =>
        (
            <div className='smurf'>
                <pre>#0</pre>
                <input type='text' name='name' placeholder={this.state.name} onChange={this.h_update_smurf} />
                <button onClick={this.h_change_smurf}>Change</button>
                <input type='number' onChange={this.h_update_smurf} name='age' placeholder={this.state.age}/>
                <input type='text' onChange={this.h_update_smurf} name='height' placeholder='height'/>
                <button onClick={this.h_toggle_render}>Back</button>
            </div>
        )
    inactive = () =>
        (
            <div className='smurf'>
                <pre>ID: {this.state.id}</pre>
                <pre>name: {this.state.name}</pre>
                <button onClick={this.h_toggle_render}>Change</button>
                <pre>age: {this.state.age}</pre>
                <pre>height: {this.state.height}</pre>
                <button onClick={this.h_execution}>Kill</button>
            </div>
        )
    render = () => this.state.render
}

export default Smurf