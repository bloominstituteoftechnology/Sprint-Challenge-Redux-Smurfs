import React, {Component} from 'react'
import {connect} from 'react-redux'
import Styled from 'styled-components'
//ain't no got time for all them actions
import * as actions from '../actions'
//component
import Smurf from './smurf'
import AddSmurf from './addsmurf'

class Village extends Component {
    // can I do this in a functional component? probably.
    componentDidMount = () => this.props.get_smurf()
    h_kill_smurf = smurf => {
        this.props.kill_smurf(smurf)
    }
    h_change_smurf = smurf => {
        this.props.edit_smurf(smurf)
    }
    h_add_smurf = smurf => {
        this.props.add_smurf(smurf)
    }
    render = () => {
        return (
            <Wrapper>
                <div className='smurfs'>
                    <div className='title smurf'>
                        <h1>The Village</h1>
                    </div>
                    {this.props.smurfs.map(smurf =>
                        <Smurf
                            data={smurf} 
                            kill={this.h_kill_smurf}
                            change={this.h_change_smurf}
                            key={smurf.id}
                        />)}
                    <AddSmurf add={this.h_add_smurf}/>
                </div>
            </Wrapper>
        )
    }
}

const mapStateToProps = state => state

export default connect(mapStateToProps,actions)(Village)

const Wrapper = Styled.div`
    background-color: #222;
    background-image: url('https://i.pinimg.com/originals/71/31/2c/71312cbe06c47af55a3c79b7a87f97f2.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    filter: grayscale(42%);
    padding: 2rem;
    color: #ccc;
    display: flex;
    font-size: 1.6rem;
    height: 100%;
    justify-content: center;
    align-items: center;
    width: 100%;

    .smurfs {
        display: grid;
        grid-template-columns: auto;
        width: fit-content;
        height: fit-content;
        grid-gap: 1rem;
    }

    .smurf {
        display: grid;
        width: 100%;
        grid-gap: 1rem;
        padding: 1.5rem;
        grid-template-columns: 100px auto 75px;
        border-radius: 5px;
        background-color: rgba(0,0,0,.85);
        cursor: pointer;
        &.title {
            h1 {
                font-size: 2.4rem;
            }
            h1, h2 {
                grid-column: 1 / -1;
                text-align: center;
                text-transform: uppercase;
            }
        }
        &:hover {
            background-color: rgba(0,0,0,1);
        }

        button {
            background-color: transparent;
            color: #ccc;
            border: 1px solid #ccc;
            padding: .25rem .5rem;
            text-transform: uppercase;
            cursor: pointer;
            &:hover {
                background-color: #ccc;
                color: #222;
            }
        }
        input {
            background: transparent;
            color: #ccc;
            border: 0;
            border-bottom: 1px solid #ccc;
            font-size: 2rem;
        }
    }
`