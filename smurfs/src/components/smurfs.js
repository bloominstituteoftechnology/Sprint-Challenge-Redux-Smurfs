import  React  from 'react';
import {connect} from 'react-redux';
import { getSmurfs, addSmurf, editSmurf, deleteSmurf } from '../actions';


class Smurf extends React.Component {
constructor() {
    super();
    this.state = {
        id: null,
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
    let val = i;
    this.props.editSmurf({
        
        name: this.state.name,
        age: this.state.age,
        height: this.state.height,
    }, val) 
    //removed val from passing 
}

handleDelete(i) {
    let val = i;
    this.props.deleteSmurf(val);
}

    render() {
        return (
        <div>
            <div>
            HELLO!

            </div>
            <form onSubmit = {this.handleSubmit}>
               
               <input name = "name" value = {this.state.name} onChange = {this.handleChange}/>
               <input name = "age" value = {this.state.age} onChange ={this.handleChange} />
               <input name = "height" value = {this.state.height} onChange ={this.handleChange} />
               <button className="button">Add Friend</button>
            </form>

            {
                    this.props.smurfs.map((item,i) => {
                        return (
                            <div key = {i}>
                                {item.name}{item.age}{item.height}

                                <button className="button" onClick = {() => {{this.handleEdit(item.id)}}}>Update Smurf</button>

                                <button className="button" onClick={() => {{this.handleDelete(item.id)}}} >Delete Smurf</button>
                                </div>
                        )
                    })
                }

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