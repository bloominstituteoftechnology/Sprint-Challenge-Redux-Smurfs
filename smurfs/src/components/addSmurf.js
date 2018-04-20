import React from 'react'
import { connect } from 'react-redux'
import { ADD_SMURF } from '../actions'
​
let AddSmurfs = ({ dispatch }) => {
  let input


  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value});

  };

  addSmurf = () => {
    const {SmurfText} = this.state;
    const newSmurf = { id: this.props.smurf.length+1, completed: false, text: SmurfText }
    this.props.addSmurf(newSmurf);
    this.setState({ SmurfText: ''});
  };

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          dispatch(addSmurf(input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add a Smurf
        </button>
      </form>
    </div>
  )
}



export default connect(mapStateToProps, {AddSmurfs}(App))

const mapStateToProps = state => {
    return {
    smurf: state
    };
  };
  