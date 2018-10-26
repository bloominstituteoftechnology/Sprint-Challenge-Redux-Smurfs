import React from 'react'
import { connect } from 'react-redux'

import  SmurfList  from '../components/SmurfList'
import { getSmurfs } from '../actions'


class SmurfListView extends React.Component {
    constructor() {
        super()
    }

componentDidMount() {
    this.props.getSmurfs();
}

render() {
    return (
        <div>
        <SmurfList smurfs={this.props.smurfs} />
        </div>
    );
}
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs.smurfs
    }
}

export default connect(mapStateToProps, {
    getSmurfs
})(SmurfListView)