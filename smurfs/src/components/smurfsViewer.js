import React, { Component } from 'react';

import { getSmurfs } from '../actions/index';

import Smurfs from './smurfs';

class SmurfsViewer extends Component {

    componentDidMount() {
        this.props.getSmurfs()
    }

    render() {
        return(
            <div>
                <Smurfs />
            </div>
        )
    }
}

export default connect(null, { getSmurfs })(SmurfsViewer);