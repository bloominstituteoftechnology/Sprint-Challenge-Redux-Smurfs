import React from 'react';
import { connect } from 'react-redux';

import { addNewSmurf } from '../store/actions';
import SmurfForm from '../components/SmurfForm/SmurfForm';

class SmurfFormView extends React.Component {
    state = {
        smurf: {
            name: '',
            age: '',
            height: '',
        }
    };

    handleChange = event => {
        this.setState({
            smurf: {
                ...this.state.smurf,
                [event.target.name]: event.target.value
            }
        });
    }

    handleAddNewSmurf = event => {
        event.preventDefault();
        this.props.addNewSmurf(this.state.smurf);
        this.props.history.push('/smurfs');
    }

    render() {
        return (
            <SmurfForm 
            {...this.props}
            smurf={this.state.smurf}
            handleAddNewSmurf={this.handleAddNewSmurf}
            handleChange={this.handleChange}
            />
        );
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, { addNewSmurf })(SmurfFormView);