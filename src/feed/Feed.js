import React from 'react';
import "./Feed.css";
import Storyreel from './storyreel/Storyreel';
import MessageSender from './messageSender/MessageSender';

function Feed() {
  return (
    <div className='feed'>
      <Storyreel />
      <MessageSender />
    </div>
  )
}

export default Feed;
