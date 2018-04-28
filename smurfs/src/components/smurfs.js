import  React  from 'react';
import {connect} from 'react-redux';
import { getSmurfs, addSmurf, editSmurf, deleteSmurf } from '../actions';
import { DEFAULT_ECDH_CURVE } from 'tls';

class Smurf extends React.Component {
constructor() {
    super();
    this.state = {
        name: '',
        age: '',
        height: '',
    }
}

componentDidMount(){
    this.props.getSmurfs();
}

handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
}

handleSubmit = () => {
    this.props.addSmurf({
        name: this.state.name,
        age: this.state.age,
        height: this.state.height,
    })
}

handleEdit(i) {
    let val = i + 1
    this.props.editSmurf({
        name: this.state.name,
        age: this.state.age,
        height: this.state.height,
    }, val) 
}

handleDelete(i) {
    let val = i + 1;
    this.props.deleteSmurf(val);
}

    render() {
        return (
            <div>
            HELLO!

            </div>


        )
    }


}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfReducer.smurfs,
    }
}
export default connect (mapStateToProps, { getSmurfs, addSmurf, editSmurf, deleteSmurf })(Smurf)