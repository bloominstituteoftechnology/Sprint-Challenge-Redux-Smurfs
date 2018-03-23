import React, { Component } from 'react'
import { connect } from 'react-redux';

import { getSmurfs, deleteSmurf }  from '../actions';

class Smurfs extends Component {


    hundleDelete = (id) => {
        this.props.deleteSmurf(id);
        this.props.getSmurfs();
    }

    render() {
        console.log(this.props.smurfs);
        return (
            <div className = 'smurfs'>
                <ul>
                    {this.props.smurfs.map(smurf => {
                        return (
                            <div className = 'sumrf'>
                                <li className = 'name'>{smurf.name}</li>
                                <li>{smurf.age}</li>
                                <li>{smurf.height}</li>
                                <li>{smurf.id}</li>
                                <button onClick = {() => this.hundleDelete(smurf.id)}>delete</button>
                            </div>
                        )
                    })}
                </ul>
            </div>
        )
    }

    componentDidMount() {
        this.props.getSmurfs();
    }

}

const mapStateToProps = (state) => {
    return{
      smurfs: state.smurfs,
    }
}

export default connect(mapStateToProps, { getSmurfs, deleteSmurf })(Smurfs);
