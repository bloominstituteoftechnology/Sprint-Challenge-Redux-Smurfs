import React from 'react';
import Smurf from './Smurf'

class SmurfsList extends React.Component{
    render(){
        return(
            <ul>
                {this.props.smurfs.map(smurf => {
                    return(
                        <div>
                            <Smurf  key={smurf.id}
                                    smurf={smurf} />
                            <button onClick={this.props.submitUpdate}
                                    id={smurf.id}>
                                Update Smurf
                            </button>
                            <button onClick={this.props.submitDelete}
                                    id={smurf.id}>
                                Delete Smurf
                            </button>
                        </div>
                    )
                })}
            </ul>
        )
    }
}

export default SmurfsList;