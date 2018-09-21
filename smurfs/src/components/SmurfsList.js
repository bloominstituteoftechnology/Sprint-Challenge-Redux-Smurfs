import React from 'react';
import { connect } from 'react-redux';

const SmurfsList = props => {
  return (
    <div>
      {props.smurfs.map(x => {
        return (
          <div key={x.id} style={ {textAlign: 'left', border: '1px solid red'} }>
            <p>name: {x.name}</p>
            <p>age: {x.age}</p>
            <p>height: {x.height}</p>
          </div>
        )}
      )}
    </div>
  )
};

const mapStateToProps = state => ({
  smurfs: state.smurfs
});

export default connect(mapStateToProps)(SmurfsList);