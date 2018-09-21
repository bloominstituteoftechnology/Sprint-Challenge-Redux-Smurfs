import React, { Component } from 'react';
import { connect } from 'react-redux';

import { smfFth, smfSv } from '../actions';
import SmfLst from './SmfLst';

class SmfCtnr extends Component {
  state = {
    smf_idv: {
      name: "",
      age: Number,
      height: ""
    }
  }

  componentDidMount() {
    this.props.smfFth();
  }

 
  hdlchg = event => {
      this.setState({
        smf_idv: {
          ...this.state.smf_idv,
          [event.target.name]: event.target.value
        }
      });
    }

  smfAd = event => {
      event.preventDefault();
      this.props.smfSv(this.state.smf_idv);
      window.location.reload();
    }

  render() {
    return (
      <SmfLst {...this.props} smflst={this.props.smf_arr} hdlchg={this.hdlchg} smfnme={this.state.smf_idv.name} smfage={this.state.smf_idv.age} smfhgt={this.state.smf_idv.height} smfAd={this.smfAd} />
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    smf_fthg: state.smf_fthg,
    smf_fthd: state.smf_fthd,
    smf_svd: state.smf_svd,
    smf_svg: state.smf_svg,
    smf_updtg: state.smf_updtg,
    smf_updtd: state.smf_pdtd,
    smf_dltg: state.smf_dltg,
    smf_dltd: state.smf_dltd,
    smf_arr: state.smf_arr,
    // frd_idv: state.frd_idv,
    err: state.err
  }
}

export default connect(mapStateToProps, { smfFth,smfSv })(SmfCtnr);