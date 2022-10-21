import React from 'react'
import './CommentItem.scss'
import {  Avatar, Comment, Tooltip  } from 'antd';

const CommentItem = () => {
  return (
    <Comment
      author={'Han Solo'}
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo avatar" />}
      content={
        <p>
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure), to help people create their product prototypes beautifully
          and efficiently.
        </p>
      }
      datetime={
        <Tooltip>
          <span>2016-11-22 11:22:33</span>
        </Tooltip>
      }
    />
  );
};

export default CommentItem;
