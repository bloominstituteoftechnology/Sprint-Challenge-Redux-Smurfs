import React, { Component } from 'react';

class SmurfCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            smurf:  {
                name: 'Brainey',
                age: 200,
                height: '5cm',
                id: 0
            }
        }
    }
    render() { 
        return ( 
            <div className="SmurfCard-container">
                <h1>{this.state.smurf.name}</h1>
                <p>Age: {this.state.smurf.age}</p>
                <p>Height: {this.state.smurf.height}</p>
                <div>
                    <button>Edit</button>
                    <button>Delete</button> 
                </div>
            </div>
         )
    }
}
 
export default SmurfCard;
