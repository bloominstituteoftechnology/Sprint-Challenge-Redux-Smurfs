import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchSmurfs, toggleForm } from './../actions';
import Smurf from './Smurf';
import AddSmurf from './AddSmurf';
import Styled from 'styled-components';

const Body = Styled.div`
  background: lightskyblue;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Header = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
  background: white;
`;

const Image = Styled.img`
  width: 30%;
  height: auto;

`;

const HeaderText = Styled.h1`
font-family: 'Boogaloo', sans-serif;
font-size: 60px;
color: deepskyblue;
text-shadow: 2px 2px #000000;
margin: 20px;
`;

class App extends Component {

  componentDidMount() {
    this.props.fetchSmurfs()
    console.log(this.props.smurfs);
  }

  render() {
    return (
     <div>
      <Header>
        <HeaderText>SMURF Village</HeaderText>
        <Image src='https://www.comicscenter.net/uploads/images/expos_les_grandes_expositions/smurfs-imps-2008-3.jpg'/>
        </Header>
        <Body>
          <AddSmurf />
          <ul>
          {this.props.smurfs.map(smurf => {
            return <Smurf key={smurf.id} smurf={smurf}/>
          })}
          </ul>
      </Body>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs.smurfs
}
}

const mapActionsToProps = {
  fetchSmurfs: fetchSmurfs
}

export default connect(mapStateToProps, mapActionsToProps)(App);
