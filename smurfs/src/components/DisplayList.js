import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { CREATING, READING } from '../actions'
import { create, read} from '../actions'

class DisplayList extends Component{

componentDidMount() {
    this.props.read();
}



//   refreshFriends = (response) => {
//     this.setState(() => ({ friends: response.data }));
//   }

  render(){

    return(
        <div>
            <ul>
            {this.props.smurfs.map(char => {
              {console.log('achar',char)}
              return <li key={char.name}>{char.name} </li>;
              
            })}
          </ul>
        </div>
    )
    
  }

}

const mapStateToProps = state => {
    console.log(state);
    return {
      smurfs: state.smurfs,
      reading: state.reading
    };
  };

  export default connect(mapStateToProps, {
    read 
  })(DisplayList);