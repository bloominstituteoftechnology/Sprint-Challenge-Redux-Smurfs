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
            <h1>Welcome to Smurf Village!</h1>    
            <div className="smurf-list">
                <h2>Inhabitants:</h2>
                <div className="smurf-wrap">
                    {this.props.smurfs.map(smurf => {
                        return (
                            <div 
                                className={smurf.selected ? "selected-smurf smurf" : "smurf"}
                                onClick = {() => 
                                this.props.selectSmurf(smurf.id)}
                                key={smurf.id}
                            >
                                <h3>{smurf.name}</h3>
                                <strong>{smurf.height} tall</strong>
                                <p>{smurf.age} smurf years old</p>                
                            </div >  
                        );
                    })}
                </div>
                
            </div>        
                       
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