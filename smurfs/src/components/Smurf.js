import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSmurfs, updateSmurf, deleteSmurf} from '../actions/index';

class Smurf extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            age: '',
            hight: '',
            id: '',
            update: false
         }
    }

    componentDidMount() {
        const {name, age, height, id} = this.props.smurf;
        this.setState({
            name,
            age,
            height,
            id
        })
    }

    change = (event) => {
        this.setState({ [event.target.name]: event.target.value});
    }

    update = (smurf) => {
        this.props.updateSmurf(smurf);
        this.setState({update: false});
    }

    delete = (id) => {
        this.props.deleteSmurf(id);
    }

    render() { 
        const {name, age, height, update, id} = this.state;
        
        return ( 
            <div>
                {update ? (
                    <form>
                        <input
                        name='name'
                        placeholder={name}
                        value={name}
                        onChange={(event) => this.change(event)}
                        />
                        <input
                        name='age'
                        placeholder={age}
                        value={age}
                        onChange={(event) => this.change(event)}
                        />
                        <input
                        name='height'
                        placeholder={height}
                        value={height}
                        onChange={(event) => this.change(event)}
                        />
                        <button onClick={() => this.update({name, age, height})}>Update</button>
                       
                    </form>
                ) : (
                    <div>
                        <h1>{name}</h1>
                        <p>{age}</p>
                        <p>{height}</p>
                        <button 
                        onClick={() => this.setState({update: true})}>
                            Update
                        </button>
                        <button onClick={() => this.delete(id)}>Delete</button>
                    </div>
                )}
            </div>
         );
    }
}
 
export default connect(null, {deleteSmurf, getSmurfs, updateSmurf})(Smurf);