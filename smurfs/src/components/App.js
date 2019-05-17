import React, {Component} from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getSmurfs, postSmurf } from "../actions";


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            age: "",
            height: ""
        }
    }

    componentDidMount() {
        this.props.getSmurfs()
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.postSmurf(this.state);
        this.setState({age: "", name: "", height: ""})
    };

    render() {
        return (
            <div className="App">
                {this.props.loading ? "LOADING" : this.props.smurfs.map(smurf => {
                    return <div>{smurf.name}, {smurf.age}, {smurf.height}</div>
                })}

                <form onSubmit={e => this.handleSubmit(e)}>
                    <input value={this.state.name} placeholder="name" onChange={e => this.setState({name: e.target.value})} />
                    <input value={this.state.age} placeholder="age" onChange={e => this.setState({age: e.target.value})} />
                    <input value={this.state.height} placeholder="height" onChange={e => this.setState({height: e.target.value})} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({ loading, error, smurfs, adding }) => {
    return {
        loading,
        error,
        smurfs,
        adding
    }
};

export default connect(mapStateToProps, { getSmurfs, postSmurf })(App);
