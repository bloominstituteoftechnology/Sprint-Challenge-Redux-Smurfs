import React from 'react';
import Smurf from './Smurf';

export default class smurfs extends React.Component {
    render() {
        return (
            <div>
                {this.props.smurfs.map(smurf => {
                    return (
                        <div className="list_item" key={smurf.id}>
                            <Smurf
                                {...this.props}
                                id={smurf.id}
                                name={smurf.name}
                                age={smurf.age}
                                height={smurf.height}
                                deleteSmurf={this.props.deleteSmurf}
                                updateSmurf={this.props.updateSmurf}
                            />
                        </div>
                    )
                })}
            </div>
        )
    }
};