import React from "react";
import { connect } from "react-redux";

import { deleteSmurf, updateSmurf } from "../actions/index";

const style = {
    display: "none"
  };
  
const pointer = {
    cursor: "pointer",
    userSelect: "none"
  };

const redx = {
    backgroundColor: 'white',
    border: '1px solid black',
    height: '20px',
    width: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    float: 'right',
    color: 'tomato',
    borderRadius: '50%',
    cursor: 'pointer'
}


const smurfStyle = {
    width: '300px',
    height: '300px',
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '3px 3px 6px grey',
    backgroundImage: 'radial-gradient(#FF63477F 50%, transparent 51%), radial-gradient(#FF63477F 30%, transparent 31%)',
    backgroundSize: '60px 60px',
    backgroundPosition: '0 0, 30px 30px',
    margin: '10px auto'
}


  

export class Smurf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.smurf.name,
      age: this.props.smurf.age,
      height: this.props.smurf.height,
      id: this.props.smurf.id
    };
  }

inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
}

  updateSmurfHandler = e => {
    e.preventDefault();
    this.props.updateSmurf(this.state);
    this.setState({...this.state, clicked: false})
    e.target.parentNode.style.display = "none";
  };

  doubleClick = event => {
    event.target.nextSibling.style.display = "block";
    event.target.nextSibling.firstChild.focus();
  };

  render() {
    const { smurf, deleteSmurf } = this.props;
      return (
          <div style={smurfStyle}>
            <div style={redx} onClick={() => deleteSmurf(smurf.id)}>X</div>            
            <h2 id="name" onDoubleClick={this.doubleClick} style={pointer}>
            {this.state.name}</h2>
            <form onSubmit={this.updateSmurfHandler} style={style}>
            <input onChange={this.inputHandler} id="nameInput" name="name" />
            <button onClick={this.updateSmurfHandler}>Change</button>
            </form>
            <p id="age" onDoubleClick={this.doubleClick} style={pointer}>
            Age: {this.state.age}</p>
            <form onSubmit={this.updateSmurfHandler} style={style}>
            <input onChange={this.inputHandler} id="nameInput" name="age" />
            <button onClick={this.updateSmurfHandler}>Change</button>
            </form>
            <p id="height" onDoubleClick={this.doubleClick} style={pointer}>
            Height: {this.state.height}</p>
            <form onSubmit={this.updateSmurfHandler} style={style}>
            <input onChange={this.inputHandler} id="nameInput" name="height" />
            <button onClick={this.updateSmurfHandler}>Change</button>
            </form>
          </div>

      );
    } 
  }
  


const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  { deleteSmurf, updateSmurf }
)(Smurf);