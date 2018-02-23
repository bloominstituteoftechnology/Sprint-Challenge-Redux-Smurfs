import React from 'react';
import { connect } from 'react-redux';

class List extends React.Component {

  render() {
    return (
      <div>
        {this.props.fetchingSmurfs ? <div>Loading...</div> : <div>{}</div>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  } 
}

export default connect(mapStateToProps)(List);