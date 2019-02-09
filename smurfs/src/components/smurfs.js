import React from 'react';

import Smurf from './smurf';

//props smurfs={this.props.smurfs} deleteSmurf={this.props.deleteSmurf}

const Smurfs = props => {
    console.log("SMURFS:", props)
    return(
        <div>
            {props.smurfs.map(s => {
                return(
                <ul key={s.id}> 
                    <Smurf 
                        id={s.id}
                        name={s.name}
                        age={s.age}
                        height={s.height}
                        />
                        <img 
                            src="https://img.icons8.com/ios-glyphs/20/000000/delete-forever.png"
                            alt="delete button"
                            onClick={() => {props.deleteSmurf(s.id)}}
                        />
                </ul>
                )
            })}
        </div>
    )
}

export default Smurfs
