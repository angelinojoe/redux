import React, {Component} from 'react';
import store from '../store';
import Lyrics from '../components/Lyrics';

export default class LyricsContainer extends Component {

  constructor () {
    super();
    this.state = Object.assign({}, { artistQuery: '', songQuery: '' }, store.getState());
    this.setArtist = this.setArtist.bind(this);
    this.setSong = this.setSong.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setArtist(val){
      this.setState({
          artistQuery: val
      });
  }

  setSong(val){
      this.setState({
          songQuery: val
      });
  }

  handleSubmit(){
      console.log(this.state);
  }

  componentDidMount(){
      this.unsubscribe = store.subscribe(function(){
          this.setState(store.getState());
      });
  }

  componentWillUnmount(){
      this.unsubscribe();
  }

  render () {
      return (
          <Lyrics
                text={this.state.text}
                setArtist={this.setArtist}
                setSong={this.setSong}
                artistQuery={this.state.artistQuery}
                songQuery={this.state.songQuery}
                handleSubmit={this.handleSubmit} />
    );
  }
}

