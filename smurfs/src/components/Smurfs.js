import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions'
import { selectSmurf } from '../actions'




class Smurfs extends Component {   

    componentDidMount(){
        this.props.fetchSmurfs();
    }

    render() {
        return (
        <div className="Smurfs">
            <h1>Smurf Village</h1>
            <ul>
            {this.props.smurfs.map(smurf => {
                return (
                    <li 
                        className={smurf.selected ? "selected-smurf smurf" : "smurf"}
                        onClick = {() => 
                        this.props.selectSmurf(smurf.id)}
                        key={smurf.id}
                    >
                        <h3>{smurf.name}</h3>
                        <strong>{smurf.height} tall</strong>
                        <p>{smurf.age} smurf years old</p>                
                    </li>  
                );
            })}
            </ul>
        </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return{
        smurfs: state.smurfs        
    }
}

export default connect(mapStatetoProps,{ fetchSmurfs, selectSmurf })(Smurfs);