import React from 'react'
import './NewsCard.scss'
import { StarFilled } from '@ant-design/icons';
import {Space, Card, Typography } from 'antd';
const { Text  } = Typography;

export interface NewsCardProps {
  title: string
  author: string
  date: string
  rating: number
}

const NewsCard = (props: NewsCardProps) => {
  return (
    <Card className="card" title={props.title} size="small" hoverable>
      <div className="card__content">
        <Space>
          <Text type="secondary">By: {props.author}</Text>
          <Text type="secondary">Posted at: {props.date}</Text>
        </Space>
        <Space>
          <StarFilled />
          <p>{props.rating}</p>
        </Space>
      </div>
    </Card>
  );
};

export default NewsCard;
