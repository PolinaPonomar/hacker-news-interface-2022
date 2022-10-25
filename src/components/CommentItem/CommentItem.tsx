import React from 'react'
import { useEffect, useState } from 'react'
import ReactHtmlParser from 'react-html-parser';
import './CommentItem.scss'
import { getStorieById } from '../../services/api';
import { timeConverter } from '../../utils/utils';
import { CommentOutlined } from '@ant-design/icons';
import {  Avatar, Comment, Tooltip, Skeleton } from 'antd';
import defaultAvatar from '../../images/default-avatar.png'

interface ICommentItemProps {
  id: number
}

interface IComment {
  text?: string
  by?: string
  time?: number
  kids?: number[]
}

const CommentItem = (props: ICommentItemProps) => {
  const [comment, setComment] = useState<IComment>({});
  const [isLoading, setLoading] = useState(true);
  const [commentСlicked, setСommentСlicked] = useState(false);

  function showСomments (event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.stopPropagation()
    setСommentСlicked(!commentСlicked)
  };

  useEffect(() => {
    setLoading(true)
    getStorieById(Number(props.id))
      .then((data) => setComment(data))
      .catch((err) => console.log('Ошибка: ', err))
      .finally(() => setLoading(false));
  },[]);

  const actions = [
    <Tooltip>
      {comment.kids && comment.kids.length + ' '}
      <CommentOutlined />
    </Tooltip>
  ];

  return (
    <>
    {isLoading
      ? (<Skeleton className="comment-sceleton" avatar paragraph={{rows: 1}} active />)
      : (<div onClick={showСomments}>
          <Comment
            className={comment.kids && "comment-item"}
            actions={comment.kids ? actions : []}
            author={comment.by}
            avatar={<Avatar src={defaultAvatar} alt="default avatar" />}
            content={<div>{ReactHtmlParser(comment.text)}</div>}
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
