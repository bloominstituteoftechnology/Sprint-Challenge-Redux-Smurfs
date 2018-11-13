import React from 'react';
import { connect } from 'react-redux'

import { getSmurfs } from '../actions'
import SmurfRow from './SmurfRow'

class SmurfList extends React.Component {
    componentDidMount() {
        this.props.getSmurfs();
    }

    render() {
        return (
            <React.Fragment>
                { this.props.loading ? <h1>Loading...</h1> : null }
                { this.props.error !== null ? <h1>{this.props.error}</h1> : null }
                <table className="smurf-list">
                    <thead>
                    <tr className="smurf-row">
                        <th>ID</th>
                        <th>NAME</th> 
                        <th>AGE</th>
                        <th>HEIGHT</th>
                        <th>&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody>
                        { this.props.smurfs.map(smurf => <SmurfRow smurf={smurf} key={smurf.id}/> ) } 
                    </tbody>
                </table>
            </React.Fragment>
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