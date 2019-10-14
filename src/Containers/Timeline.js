import React, { Component } from 'react';
import SingleTweet from '../Components/SingleTweet'
export class Timeline extends Component {

  renderTweet = () => {
    return (
    this.props.tweets.map(tweet  => {
      return <SingleTweet  tweet={tweet} key={tweet.id}/>
    })
    )
  }

  render() {
    return (
      <div className="timeline">
        <h1>Timeline</h1>
          {this.renderTweet()}
      </div>
    );
  }
}

export default Timeline;
