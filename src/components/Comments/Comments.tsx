import React from 'react'
import './Comments.scss'
import CommentItem from '../../components/CommentItem/CommentItem'
import { RedoOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';

const Comments = () => {
  return (
    <Space className="comments" direction="vertical" size="small">
      <div className='comments__header'>
        <p> 5 comments</p>
        <Button className="comments__button" type="primary" shape="circle" size="small" icon={<RedoOutlined />} />
      </div>
      <CommentItem/>
      <CommentItem/>
      <CommentItem/>
    </Space>
  );
};

export default Comments;
