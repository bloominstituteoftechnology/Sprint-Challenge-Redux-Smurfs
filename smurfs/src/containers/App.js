import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/index';
import SmurfList from '../components/SmurfList';
import AddSmurf from '../containers/AddSmurf';


const AppContainer = styled.div`
    width:986px;
    display:flex;
    flex-flow:row;
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

    handleAddSmurf = (data) => {
        console.log(data);
        this.props.addSmurf(data);
    }

    render(){
        return (
            <AppContainer>
                <AddSmurf handleAddSmurf={this.handleAddSmurf}/>
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

