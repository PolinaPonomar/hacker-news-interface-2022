import React from 'react'
import { Link } from 'react-router-dom'
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
    <Link to="/news">
      <Card className="news-card" title={props.title} size="small" hoverable>
        <div className="news-card__content">
          <Space className="news-card__details">
            <Text type="secondary">By: {props.author}</Text>
            <Text type="secondary">Posted at: {props.date}</Text>
          </Space>
          <Space className="news-card__rating">
            <StarFilled />
            <p>{props.rating}</p>
          </Space>
        </div>
      </Card>
    </Link>
  );
};

export default NewsCard;
