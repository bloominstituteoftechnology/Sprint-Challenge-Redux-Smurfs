import React, {Component} from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';


const Smurf = (props) => {
     const { smurf, deleteSmurfs } = props;

     const clickHandler = () => {
          deleteSmurfs(smurf.id);
     }
    return(
        <div className="cardStyle">      
           <h2>Name: {smurf.name}</h2>
           <p>Age: {smurf.age}</p>
           <p>Height: {smurf.height}</p>
            <div className = "update">         
                <input type="button" className='button' value="Delete" onClick={clickHandler} />
                <input type="button" className='button' value="Edit" />
            </div>
          </div>
  
        
    );
}
// export default Smurf;

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps, {deleteSmurfs})(Smurf);