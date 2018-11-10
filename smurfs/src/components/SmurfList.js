import React from 'react';
import { connect } from 'react-redux'

import { getSmurfs } from '../actions'
import Smurf from './Smurf'

class SmurfList extends React.Component {
    componentDidMount() {
        this.props.getSmurfs();
    }

    render() {
        return (
            <div>
                { this.props.loading ? <h1>Loading...</h1> : null }
                { this.props.error !== null ? <h1>{this.props.error}</h1> : null }
                { this.props.smurfs.map(smurf => <Smurf smurf={smurf} key={smurf.id}/> ) } 
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      smurfs: state.smurfs,
      error: state.error,
      loading: state.loading
    }
  }
  
  export default connect(mapStateToProps, { getSmurfs })(SmurfList)