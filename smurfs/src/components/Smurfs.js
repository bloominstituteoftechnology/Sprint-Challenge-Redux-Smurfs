import React from 'react';
import Smurf from './Smurf'



class Smurfs extends React.Component {
    render() {
        return(
            <div className="smurfs">
                    {this.props.smurfs.map(smurf => {
                        return(
                        <Smurf key={smurf.name} 
                        name={smurf.name}
                        age={smurf.age}
                        height={smurf.height}
                        />
                        ) 
                    })} 
            </div>
        )


    }
           
}

export default Smurfs;