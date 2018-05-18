import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddEditModal from '../AddEditModal/AddEditModal';
import { addSmurf } from '../../actions';

class AddSmurfButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnProps: {
        class: 'add',
        text: 'Add a Smurf',
        hasIcon: 'true',
        icon: 'fas fa-plus'
      }
    }
  }
  addASmurf = (smurfObj) => {
    if(smurfObj){
      this.props.addSmurf(smurfObj);
    }
  };
  render() {
    return ( 
      <div className="add-smuf">
        <AddEditModal
          modalBtn={this.state.btnProps}
          modalTitle="Add a Smurf"
          actionTitle="Add"
          action={this.addASmurf}
        />
      </div>
     )
  }
}

export default connect(null, { addSmurf })(AddSmurfButton);