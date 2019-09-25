import React from 'react';

import Smurf from './smurf';

//props smurfs={this.props.smurfs}
// deleteSmurf={this.props.deleteSmurf}
// update={this.props.update}

const Smurfs = props => {
    console.log("SMURFS:", props)

    return(
        <div className="flexWrap">
            {props && props.smurfs.length > 0 ?
                props.smurfs.map(s => {
                    return(
                    <ul key={s.id} className="smurfView">
                        <Smurf
                            id={s.id}
                            name={s.name}
                            age={s.age}
                            height={s.height}
                            />
                            <div className="imageWrap">
                                <img
                                    src="https://img.icons8.com/ios-glyphs/20/000000/delete-forever.png"
                                    alt="delete button"
                                    onClick={() => {props.deleteSmurf(s.id)} }
                                />
                                <img
                                    src="https://img.icons8.com/ios-glyphs/20/000000/pencil.png"
                                    alt="edit button"
                                    onClick={ () => {props.update( s.id, {name: s.name, age: s.age, height: s.height} )} }
                                />
                            </div>
                    </ul>
                    )
            }) : <div className="emptyWrap"> No Smurfs Live Here Yet! </div>
            }
        </div>
    )
}

export default Smurfs
