import React, {Component} from 'react';
import {connect} from 'react-redux';
import Smurfs from './smurfs';
import ReactAudioPlayer from 'react-audio-player';
import {getSmurfs} from '../actions';
import './vapor.css';
import Window from '../components/Window';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Smurfs/>
        <div>
          <ReactAudioPlayer
            src="https://a.tumblr.com/tumblr_oat8zhArMY1u1vzz5o1.mp3"
            autoPlay/>
          <div class="vapor">
            <div class="content">
              <img
                class="palm"
                src="https://68.media.tumblr.com/f091c3890383aa8d8d3129145d9e267d/tumblr_octcvgAWVb1u1vzz5o4_250.png"
                alt="Palm tree"/>
              <p>Smurf Redux アンドルー</p>
              <img
                class="statue"
                src="https://media.giphy.com/media/gzROsII7swwrm/giphy.gif"
                alt="A glitched statue to represent where human intellect has come from and where it's going"/>
              <img
                class="spooky"
                src="https://38.media.tumblr.com/397f781d920ee10d49e429e34ea4f3a1/tumblr_nglvic0X6o1qza1qzo1_250.gif"
                alt="This spooky skeletal is to remind us that death is unescapable, lingering near at all times."/>
              <img
                class="palmrev"
                src="https://68.media.tumblr.com/f091c3890383aa8d8d3129145d9e267d/tumblr_octcvgAWVb1u1vzz5o4_250.png"
                alt="Palm trees to represent, almost laughably, the futility of nature being anything except aesthetic."/>
            </div>
          </div>
        </div>
        <Window/>
      </div>
    );
  }

  componentDidMount() {
    this
      .props
      .getSmurfs();
  }
}

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps, {getSmurfs})(App);