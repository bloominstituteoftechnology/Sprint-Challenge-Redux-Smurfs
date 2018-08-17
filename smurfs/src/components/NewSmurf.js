import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSmurfs, postSmurf} from '../actions/index';

class NewSmurf extends Component {
    constructor() {
        super();
        this.state = { 
            name: '',
            age: '',
            height: ''
         }
    }

    change = (event) => {
        this.setState({ [event.target.name]: event.target.value});
    }


    addNew = () => {
        this.props.postSmurf(this.state);
        this.props.getSmurfs();
    }


    render() { 

        const {name, age, height} = this.state;
        return ( 
            <div>
                
                <form>
                        <input
                        name='name'
                        placeholder='name'
                        value={name}
                        onChange={(event) => this.change(event)}
                        />
                        <input
                        name='age'
                        placeholder='age'
                        value={age}
                        onChange={(event) => this.change(event)}
                        />
                        <input
                        name='height'
                        placeholder='height'
                        value={height}
                        onChange={(event) => this.change(event)}
                        />
                        <button onClick={() => this.addNew(this.state)}>Add New Smurf</button>
                    </form>
                
            </div>
         );
    }
}
 
export default connect(null, {getSmurfs, postSmurf})(NewSmurf);