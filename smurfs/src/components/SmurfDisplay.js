import React, { Component } from "react";
import {connect} from 'react-redux'
import {fetchSmurfs} from '../actions'
import styled from 'styled-components'
import Smurf from './Smurf'
const StyledSmurfsContainer = styled.div `
    display:flex;
    justify-content: center;
`

class SmurfDisplay extends Component{

    componentDidMount(){
        this.props.fetchSmurfs()
    }
    render(){
        return(
            <StyledSmurfsContainer>
                {this.props.smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf}/>)}
            </StyledSmurfsContainer>
        )
    }
}

const mapStatetoProps = state =>{
    return{
    smurfs: state.smurfs,
}}
export default connect(mapStatetoProps,{fetchSmurfs})(SmurfDisplay)