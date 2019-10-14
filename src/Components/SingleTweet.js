import React from 'react';

const SingleTweet = props => {
const {content, username} = props.tweet
  
  return (
    <div className="single-tweet">
      <p> {content} </p>
      <span className="username">By: {username}</span>
      <span className="heart" role="img" aria-label="heart">
        ❤️
      </span>
    </div>
  );
};

export default SingleTweet;
