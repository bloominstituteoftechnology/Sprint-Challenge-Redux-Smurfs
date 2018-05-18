import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurfs } from '../actions';

class CreateSmurf extends Component {

    componentDidMount() {
        this.props.addSmurfs();
    }

    render() { 
        console.log("PROPS:", this.props)
        return ( 
            <div>
                 <form className='smurf-form'>
                    <input 
                        type="text" 
                        onChange={this.handleFriendInput} 
                        name='name' 
                        value={this.props.name} 
                        placeholder="Name" 
                    />
                    <input 
                        type="number" 
                        onChange={this.handleFriendInput} 
                        name='age' 
                        value={this.props.age} 
                        placeholder="Age" 
                    />
                    <input 
                        type="text" 
                        onChange={this.handleFriendInput} 
                        name='email' 
                        value={this.props.height} 
                        placeholder="Height" 
                    />
                    <button onClick={this.saveNewFriend} >Save Friend</button>
                </form>
            </div>
         )
    }
}

const mapStateToProps = state => {
    console.log("ADD_SMURF STATE:", state)
    return {
        smurfs: state.smurfs
    }
}
 
export default connect(mapStateToProps, { addSmurfs }) (CreateSmurf);