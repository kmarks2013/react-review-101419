import React, { Component } from 'react';
import Timeline from './Containers/Timeline';
import Likes from './Containers/Likes';
import NewTweet from './Components/NewTweet';
import './App.scss';

const url = "http://localhost:3000/tweets"

export class App extends Component {

  state = {
    tweets: []
  }

  componentDidMount(){
    fetch(url)
    .then(res => res.json())
    .then( (tweetArray) => {
      this.setState(
        { tweets: tweetArray }
      )
    })
  }

  makeNewTweet = (tweetObj) =>{
    fetch(url,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(tweetObj)
    }).then(r => r.json()).then(newTweet => {
      this.setState({
        tweets: [newTweet,...this.state.tweets]
      })
    })
  }
  render() {
    return (
      <>
        <NewTweet makeNewTweet={this.makeNewTweet}/>
        <Timeline tweets={this.state.tweets}/>
        <Likes />
      </>
    );
  }
}

export default App;
