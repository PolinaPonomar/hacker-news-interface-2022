import React from 'react'
import CommentItem from '../../components/CommentItem/CommentItem'
import './Comments.scss'
import { RedoOutlined } from '@ant-design/icons';
import { Button, Space, Spin } from 'antd';

interface ICommentsProps {
  ids: number[]
  commentsCount: number // похоже, считаются все комменты ( вместе с dead (мб их не считают) и deleted )
  handleButtonClick: Function
  isLoading: boolean
}

const Comments = (props: ICommentsProps) => {
  function refreshComments() {
    props.handleButtonClick()
  };

  return (
    <Space className="comments" direction="vertical" size="small">
      <div className='comments__header'>
        <p>{props.isLoading ? '...' : props.commentsCount} comments</p>
        <Button 
          className="comments__button"
          type="primary"
          shape="circle"
          size="small"
          icon={<RedoOutlined />}
          onClick={refreshComments}
        />
      </div>
      {props.isLoading
          ? (<div className="comments__spinner">
              <Spin size="large" spinning={props.isLoading}/>
            </div>)
          : props.ids.map(id => (<CommentItem id={id} key={id}/>))
        }
    </Space>
  );
};

export default Comments;
