import React from 'react';
import EditSmurfForm from '../components/EditSmurfForm';

class Smurf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
        }
    }

    componentDidMount() {
        this.setState({
            editing: false
        });
    }

    toEdit = () => {
        this.setState({
            editing: !this.state.editing
        });
    }

    render() {
        return (
            <div className='smurf-container'>
                <div className='smurf-content smurf-spacing'>
                    <span className='smurf-span'>{this.props.smurfChar.name}</span>
                    <span className='smurf-span'>{this.props.smurfChar.age}</span>
                    <span className='smurf-span'>{this.props.smurfChar.height}</span>
                    <div className='smurf-control-btns-container'>
                        <span onClick={() => this.props.deletingSmurf(this.props.smurfChar.id)} className='smurf-delete-btn'>[X]</span>
                        <span className='smurf-edit-btn' onClick={() => this.toEdit()}>{this.state.editing ? '[C]' : '[E]'}</span>
                    </div>
                </div> 
                <div>
                    { this.state.editing ? 
                        <EditSmurfForm 
                            updatingSmurfHandler={this.props.updateSmurf} 
                            smurfId={this.props.smurfChar.id} 
                            smurfName={this.props.smurfChar.name} 
                            smurfAge={this.props.smurfChar.age} 
                            smurfHeight={this.props.smurfChar.height}
                        /> : null 
                    }
                </div>
            </div>
        );
    }
}

export default Smurf;