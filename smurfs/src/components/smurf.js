import React from 'react';
import AddForm from './addForm';

class Smurf extends React.Component {
    state = {
        isUpdating: false
    }

    makeUpdate = () => {
        this.setState({isUpdating: !this.state.isUpdating})
    }

    render() {
        return(
            <div className="smurf-card">
                {this.state.isUpdating ? 

                    <AddForm forUpdate 
                    smurf={this.props.smurf} 
                    updateSmurf={this.props.updateSmurf}
                    deleteSmurf={this.props.deleteSmurf}
                    toggleUpdate={this.makeUpdate} />

                :
                    <div>
                    <h3>{this.props.smurf.name}</h3>
                    <p>{this.props.smurf.age}</p>
                    <p>{this.props.smurf.height}</p>
                    <button className='open-update' onClick={this.makeUpdate}>Update or Delete</button>
                    </div>
                }
            </div>
        )
    }
}

export default Smurf;