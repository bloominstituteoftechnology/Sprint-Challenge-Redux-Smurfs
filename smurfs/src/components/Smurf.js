import React, { Component } from 'react';

class Smurf extends Component {
    render()    {
        console.log(this.props)
        const { name, age, height, id} = this.props.smurf
        return(
            <div>
                {`${name} ${height} ${age}`}
                <div onClick={()    =>  this.props.removeSmurf(id)}>X</div>
            </div>
        )
    }
}

export default Smurf;
