import React, { Component } from 'react';
import { connect } from 'react-redux';


class AddSmurfButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
        }
    }
    onClick = () => {
        this.setState({edit:  true});
    }

    render() { 
        return (
            <div>
                {!this.state.edit && <div className="Smurf-button fixed" onClick={this.onClick}>
                    <img src="https://www.shareicon.net/data/24x24/2015/08/07/81652_green_48x48.png" alt="img"/>
                </div>}
            </div>
            
          )
    }
}
 
const mapStateToProps = state => {
    console.log("mapStateToProps list ", state);
    const props = state;
    return props;
  }
  
export default connect(mapStateToProps, { })(AddSmurfButton);