import React from 'react'
import {connect} from 'react-redux'
import SmurfList from '../components/SmurfList'
import SmurfForm from '../components/SmurfForm'
import {getSmurf, addSmurf} from '../actions'


class SmurfListContainer extends React.Component {

componentDidMount(){
    this.props.getSmurf()
}

    render() {
        return (
            <div>
            <SmurfForm addSmurf={this.props.addSmurf}/>
            <SmurfList smurfList={this.props.smurfs}/>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    }
    
}

export default connect(mapStateToProps, {getSmurf, addSmurf})(SmurfListContainer)