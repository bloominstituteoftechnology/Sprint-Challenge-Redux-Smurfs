import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSmurfs, updateSmurf, deleteSmurf} from '../actions/index';
import styled from 'styled-components';


const SmurfView = styled.div`
    background: rgba(255, 255, 255, 0.8);
    max-width: 500px;
    margin: 10px auto;
    width: 100%;
    border-radius: 20px;
    padding: 10px 0;
    border: 1px solid #62cdfd;

`

const Form = styled.form`
    margin: 10px 0;

    > input {
        margin: 5px 5px;
    }
    > button {
        border: 1px solid #62cdfd;
        background-color: #62cdfd;
        border-radius: 5px;
    }

`

const UpdateButton = styled.button`
    background: #62cdfd;
    margin: 5px;
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 5px;
`
const DeleteButton = styled.button`
    background: red;
    margin: 5px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
`


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
                    <Form>
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
                        <button onClick={() => this.update({name, age, height})}>Save changes</button>
                    </Form>
                ) : (
                    <SmurfView>
                        <h1>{name}</h1>
                        <p>{age} Smurf years old</p>
                        <p>{height} height</p>
                        <UpdateButton 
                        onClick={() => this.setState({update: true})}>
                            Update
                        </UpdateButton>

                        <DeleteButton
                        onClick={() => this.delete(id)}>
                            Delete
                        </DeleteButton>
                    </SmurfView>
                )}
            </div>
         );
    }
}
 
export default connect(null, {deleteSmurf, getSmurfs, updateSmurf})(Smurf);