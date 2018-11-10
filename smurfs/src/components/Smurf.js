import React, { Component } from 'react';

class Smurf extends Component {
    render()    {
        console.log(this.props)
        const { name, age, height} = this.props.smurf
        return(
            <div>
            {`${name} ${age} ${height}`}
            </div>
        )
    }
}

export default Smurf;
