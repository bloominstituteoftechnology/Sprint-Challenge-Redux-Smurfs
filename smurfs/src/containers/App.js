import React, { Component } from 'react';
import styled from 'styled-components';
import {} from 'redux';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/index';
import SmurfList from '../components/SmurfList';

const AppContainer = styled.div`
    width:986px;
    display:flex;
    flex-flow:column;
    border: solid 1px black;
`;

class App extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        this.props.getSmurfs();
    }


    render(){
        return (
            <AppContainer>
                <SmurfList smurfs={this.props.smurfs} />
            </AppContainer>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
    }
}

// const mapDispatchToProps = () => {

// }


export default connect(mapStateToProps, { getSmurfs })(App);

