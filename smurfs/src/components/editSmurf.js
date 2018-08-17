import React, {Component} from 'react';
import {editSmurf} from '../actions';
import {connect} from 'react-redux';
import styled from 'styled-components';

const EditDiv = styled.div `
  height: 200px;
  .smurf3 {
    form {
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      .line {
        ${'' /* border: 1px solid red; */}
        height: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .btnDiv {
        ${'' /* border: 1px solid red; */}
        margin: 10px;
        padding: 10px;
        width: 100%;
      }
    }
  }
`;

class EditSmurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      id: props.smurf.id
    };
  }



  editSmurf = (event, props) => {
    event.preventDefault();
    this.props.editSmurf(this.state);
    this.setState({name: '', age: '', height: ''})
    this.props.resetSmurf();
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
    <EditDiv>
      <form className="smurf3" onSubmit={this.editSmurf}>
        <div className="line">
          <h3>Name:</h3><input onChange={this.handleInputChange} placeholder={this.props.smurf.name} value={this.state.name} name="name"/>
        </div>
        <div className="line">
          <p>Age:</p><input onChange={this.handleInputChange} placeholder={this.props.smurf.age} value={this.state.age} name="age"/>
        </div>
        <div className="line">
          <p>Height:</p><input onChange={this.handleInputChange} placeholder={this.props.smurf.height} value={this.state.height} name="height"/>
        </div>
        <div className="line">
          <button className="button" type="submit">Change Smurf</button>
        </div>
      </form>
    </EditDiv>);
  }
}

const mapStateToProps = state => {
  return {state: state};
}

const mapDispatchToProps = {
  editSmurf
}

export default connect(mapStateToProps, mapDispatchToProps)(EditSmurf);
