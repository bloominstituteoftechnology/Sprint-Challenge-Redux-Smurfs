import React from 'react';
// import logo from './logo.svg';
// Redux
import { connect } from 'react-redux';
// Redux--Actions
import { updateSmurf, deleteSmurf } from '../actions';

const Smurfs = (props) => {
  return (
    <div className="list">
      {
        props.status ? 
          // ( <img src={logo} className="App-logo" alt="logo" /> )
          ( <h3>Loading</h3> )
          :
          (
            props.friends.map(obj => {
              return <SmurfDisplay 
                key={obj.id}
                delete={props.deleteSmurf}
                put={props.updateSmurf}
                {...obj}
              />;
            })
          )
      }
    </div>
  );
}

class SmurfDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      edit: false,
    };
  }

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  editFields = (id) => {
    const { name, age, height } = this.props;
    
    if (this.state.edit === false) this.setState({
      name: name,
      age: age,
      height: height,
      edit: true, 
    });

    if (this.state.edit === true) {
      const oldFriend = {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height,
      }

      this.props.put(id, oldFriend);

      this.setState({
        name: '',
        age: '',
        height: '',
        edit: false,
      });
    }
  }

  render() {
    const { name, id, age, height } = this.props;
    const inputField = property => <input 
      name={property}
      type="text"
      value={this.state[property]}
      size={this.state[property].toString().length - 1}
      onChange={(e) => this.onChangeHandler(e)}
    />;

    return (
      <div className="friend flex justify-between ph2 pt2 ma3">
        <span>I'm {this.state.edit ? inputField(`name`) : `${name} `} 
          and I'm {this.state.edit ? inputField(`age`) : `${age} `} 
          years old. I am{` `} 
          {this.state.edit ? inputField(`height`) : ` ${height}!`} tall!</span>
        <div className="button-div">
          <i onClick={() => this.editFields(id)} className="fas fa-pencil-alt mh2"></i>
          <i onClick={() => this.props.delete(id)} className="fas fa-eraser mh2"></i>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("Smurfs.js mapStateToProps", state);
  return {
    friends: state.smurfs,
    status: state.loading,
  }
}

export default connect(mapStateToProps, { updateSmurf, deleteSmurf })(Smurfs);