import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions/index';



class DeleteSmurf extends Component {

    constructor (props) {
        super(props)
        this.state = {
      
        }
    }


    clickHandler = e => {
        e.preventDefault()
        deleteSmurf(smurf.id)
    }

    render() {
        return (
            <div key={smurf.id}>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, {deleteSmurf : deleteSmurf}) (DeleteSmurf)