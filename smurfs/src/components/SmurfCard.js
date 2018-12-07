import React from 'react';

import SmurfEditForm from './SmurfEditForm';

class SmurfCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            shouldOpenForm: false,
        }
    }

    render(){
        return(
            <div className='individual-smurf'>
                <p className='smurf-name'>{this.props.smurfData.name}</p>
                <p className='smurf-age'>{this.props.smurfData.age}</p>
                <p className='smurf-height'>{this.props.smurfData.height}</p>
                <button 
                    onClick={() => this.setState({
                        shouldOpenForm : !this.state.shouldOpenForm
                    })}>
                        {this.state.shouldOpenForm ? 'Close' : 'Edit'}
                    </button>
                <SmurfEditForm 
                    smurfData={this.props.smurfData} 
                    smurfId={this.props.smurfData.id}
                    shouldOpenForm={this.state.shouldOpenForm}
                />
            </div>
        );
    }
}

export default SmurfCard;