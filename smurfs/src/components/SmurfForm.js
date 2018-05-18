import React from 'react';
import SmurfForm from './Form';
import { added } from '../actions/'
import { connect } from 'react-redux'


class SmurfClass extends React.Component {
    submit = values => {
        // print the form values to the console
        console.log("values", values)
        this.props.added({ ...values, id: this.props.id });
    }
    render() {
        return <SmurfForm onSubmit={this.submit} />
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.smurfReducer.id
    }
}

export default connect(mapStateToProps, { added })(SmurfClass)
