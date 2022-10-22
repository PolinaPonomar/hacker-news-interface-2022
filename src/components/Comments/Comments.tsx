import React from 'react'
import './Comments.scss'
import CommentItem from '../../components/CommentItem/CommentItem'
import { RedoOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';

export interface CommentsProps {
  ids: [number]
}

const Comments = (props: CommentsProps) => {
  return (
    <Space className="comments" direction="vertical" size="small">
      <div className='comments__header'>
        <p> 5 comments</p>
        <Button className="comments__button" type="primary" shape="circle" size="small" icon={<RedoOutlined />} />
      </div>
      {props.ids.map(id => {return (<CommentItem id={id} key={id}/>)})}
    </Space>
  );
};

export default Comments;
