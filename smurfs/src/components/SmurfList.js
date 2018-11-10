import React from 'react';
import {getSmurfs} from '../actions/index';
import Smurf from './Smurf'
import {connect} from 'react-redux'

class SmurfList extends React.Component {
     constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getSmurfs();
    }

    render() {
      return (
        <div>
            {this.props.loading ? <h1>Finding smurfs</h1> : null}
            {this.props.error !== '' ? <h1>{this.props.error}</h1> : null}
            {this.props.smurfs.map(smurf =>
                <Smurf smurf={smurf} key={smurf.id}/>)}
        </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfReducer.smurfs
    }
}

export default connect(mapStateToProps, {getSmurfs})(SmurfList)