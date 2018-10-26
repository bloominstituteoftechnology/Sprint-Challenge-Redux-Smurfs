import React from 'react'
import {connect} from 'react-redux'
import SmurfList from '../components/SmurfList'
import SmurfForm from '../components/SmurfForm'
import {getSmurf, addSmurf, deleteSmurf} from '../actions'


class SmurfListContainer extends React.Component {

componentDidMount(){
    this.props.getSmurf()
}

handleDeleteSmurf = (event, id) => {
    event.preventDefault();
    this.props.deleteSmurf(id)
}

    render() {
        return (
            <div>
            <SmurfForm addSmurf={this.props.addSmurf}/>
            <SmurfList smurfList={this.props.smurfs} handleDeleteSmurf={this.handleDeleteSmurf}/>
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

export default connect(mapStateToProps, {getSmurf, addSmurf, deleteSmurf})(SmurfListContainer)