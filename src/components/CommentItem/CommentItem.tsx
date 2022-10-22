import React from 'react'
import { useEffect, useState } from 'react'
import './CommentItem.scss'
import { getStorieById } from '../../services/api';
import {  Avatar, Comment, Tooltip  } from 'antd';

export interface CommentsProps {
  id: number
}

export interface CommentProperties {
  text?: string
  by?: string
  time?: number
  kids?: [number]
}

const CommentItem = (props: CommentsProps) => {
  const [comment, setComment] = useState<CommentProperties>({});

  useEffect(() => {
    getStorieById(props.id).then((data) => {setComment(data); console.log(data)});
  },[]);

  return (
    <Comment
      author={comment.by}
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo avatar" />}
      content={comment.text}
      datetime={
        <Tooltip>
          <span>{comment.time}</span>
        </Tooltip>
      }
    />
  );
};

export default CommentItem;
