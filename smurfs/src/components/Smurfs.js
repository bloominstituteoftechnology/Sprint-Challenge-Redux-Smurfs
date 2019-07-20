import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSmurfs } from '../actions'


class Smurfs extends React.Component {

componentDidMount(){
    this.props.getSmurfs()
    console.log(this.props.smurfs)
}

    render(){
        return (
            <div>
               {/* {this.props.smurfs.map(smurf => {
                 return  <p>{smurf}</p>
               })} */}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error,
    smurfs: state.smurfs
})

const mapDispatchToProps = {
    getSmurfs,
}

export default connect(mapStateToProps, mapDispatchToProps)(Smurfs)