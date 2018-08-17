import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {getTheSmurfs} from '../actions';
import {smackASmurf} from '../actions';
import SmurfForm from './smurfForm'
import EditSmurf from './editSmurf'

const AppDiv = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  .bottomDiv {
    ${'' /* border: 1px solid red; */}
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    padding: 0;
    .smurfForm {
      margin: 5px;
      border: 1px solid black;
      padding: 5px;
      width: 20%;
      background-color: lightGray;
    }
    .allSmurfs{
      ${'' /* border: 1px solid red; */}
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      width: 80%;
      .smurf {
        border: 1px solid black;
        background: gray;
        color: white;
        box-sizing: border-box;
        width: 48%;
        margin: 5px;
        padding: 10px;
        .smurf2 {
          box-sizing: border-box;
          height: 200px;
          width: 200px;
        }
        .line {
          ${ ''/* border: 1px solid red; */}
          display: flex;
          flex-direction: row;
          align-items: center;
        }
      }
    }
  }
  .displayDiv {
    ${ ''/* border: 1px solid green; */}
    height: 250px;
    width: 250px;
  }
  button{
    width: 50%;
  }
`;

class App extends Component {
  state = {
    editSmurfId: null
  }

  componentDidMount() {
    console.log('CDM1')
    this.props.getTheSmurfs();
    console.log(this.props)
  }

  smackSmurf = (e) => {
    e.preventDefault();
    console.log('smackSmurf', e.target.value);
    this.props.smackASmurf(e.target.value);
  }

  editSmurf = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    {if (this.state.editSmurfId == e.target.id) {
      this.setState({editSmurfId: null})
    } else {
      this.setState({editSmurfId: e.target.id})
    }}
  }

  resetSmurf = (props) => {
    console.log(this.props)
    this.setState({editSmurfId: null})
  }

  render() {
    console.log(this);
    return (<AppDiv>
      <h1>List of Smurfs</h1>
      <div className="bottomDiv">
        <div className="smurfForm">
          <SmurfForm ></SmurfForm>
        </div>
        <div className='allSmurfs'>
          {
            this.props.state.smurfs.map((smurf) => {
              console.log(this.state)
              return (<div className='smurf' key={smurf.id}>
                {
                  (this.state.editSmurfId == smurf.id)
                    ? (<EditSmurf smurf={smurf} resetSmurf={this.resetSmurf}></EditSmurf>)
                    : <div className="smurf2">
                        <div className="line">
                          <h3 id={smurf.id} onClick={this.editSmurf}>Name: {smurf.name}</h3>
                        </div>
                        <div className="line">
                          <p id={smurf.id} onClick={this.editSmurf}>Age: {smurf.age}</p>
                        </div>
                        <div className="line">
                          <p id={smurf.id} onClick={this.editSmurf}>Height: {smurf.height}</p>
                        </div>
                      </div>
                }
                <button value={smurf.id} onClick={this.smackSmurf}>Smack Smurf</button>

                <button id={smurf.id} onClick={this.editSmurf}  >Toggle Edit</button>
              </div>)
            })
          }
        </div>
      </div>

    </AppDiv>);
  }
}

const mapStateToProps = state => {
  return {state: state};
}

const mapDispatchToProps = {
  getTheSmurfs,
  smackASmurf
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
