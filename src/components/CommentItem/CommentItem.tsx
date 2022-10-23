import React from 'react'
import { useEffect, useState } from 'react'
import './CommentItem.scss'
import { getStorieById } from '../../services/api';
import { createMarkup, timeConverter } from '../../utils/utils';
import { CommentOutlined } from '@ant-design/icons';
import {  Avatar, Comment, Tooltip  } from 'antd';

export interface CommentItemProps {
  id: number
}

export interface CommentProperties {
  text?: string
  by?: string
  time?: number
  kids?: number[] // - абсолютно все комменты, и dead, и deleted входят в них 
  // dead?: boolean - комменты без текста
  // deleted?: boolean - комменты без автора
}

const CommentItem = (props: CommentItemProps) => {
  const [comment, setComment] = useState<CommentProperties>({});
  const [commentСlicked, setСommentСlicked] = useState(false);

  function showСomments (event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.stopPropagation()
    setСommentСlicked(!commentСlicked)
  };

  useEffect(() => {
    getStorieById(props.id).then((data) => {setComment(data); console.log(data)});// это нужно обновить, когда захотим обновить комментарии ? не понятно..
  },[]);

  const actions = [
    <Tooltip>
      {comment.kids && comment.kids.length + ' '} {/* comment.kids.length - показывает число и удаленных комментов в том числе */}
      <CommentOutlined />
    </Tooltip>
  ];

  return (
    <>
    {/*(!comment.dead && !comment.deleted) && */
      (
      <div onClick={showСomments}>
        <Comment
          className={comment.kids && "comment-item"}
          actions={comment.kids ? actions : []}
          author={comment.by}
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="avatar" />}
          content={<div dangerouslySetInnerHTML={createMarkup(comment.text)}></div>} //опасная это штука...
          datetime={
            <Tooltip>
              <span>{timeConverter(comment.time)}</span>
            </Tooltip>
          }
        >
          {(commentСlicked && comment.kids) && comment.kids.map(id => (<CommentItem id={id} key={id}/>))}
        </Comment>
      </div>)
    }
    </>
  );
};

export default CommentItem;
