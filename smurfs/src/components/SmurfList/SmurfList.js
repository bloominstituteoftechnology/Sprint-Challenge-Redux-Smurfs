import React, { Component } from 'react';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-css';
import SmurfCard from '../SmurfCard/SmurfCard';
import { getSmurfs } from '../../actions';

class SmurfList extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  };
  render() {
    const smurfCards = this.props.smurfs.map(smurf => <SmurfCard key={smurf.id} smurf={smurf} />);
    const masonryBreakpoints = {
      default: 4,
      1200: 3,
      992: 2,
      576: 1
    };
    return (
      <div className="smurfs-list">
        <Masonry
          breakpointCols={masonryBreakpoints}
          className="smurfs-masonry-grid"
          columnClassName="smurfs-masonry-grid_column">
          {smurfCards}
        </Masonry>
      </div>
    );
  };
}

const mapDispatchToProps = state => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetchingSmurfs
  }
};

export default connect(mapDispatchToProps, { getSmurfs })(SmurfList);