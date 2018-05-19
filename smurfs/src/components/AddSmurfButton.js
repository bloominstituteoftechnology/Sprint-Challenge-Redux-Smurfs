import React, { Component } from 'react';

class AddSmurfButton extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    onClick() {
        alert("new");
    }

    render() { 
        return (
            <div className="Smurf-button fixed" onClick={this.onClick}>
                <img src="https://www.shareicon.net/data/24x24/2015/08/07/81652_green_48x48.png" alt="img"/>
            </div>
          )
    }
}
 
export default AddSmurfButton;