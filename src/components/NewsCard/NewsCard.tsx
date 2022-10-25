import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './NewsCard.scss'
import { timeConverter } from '../../utils/utils';
import { StarFilled } from '@ant-design/icons';
import {Space, Card, Typography, Skeleton } from 'antd';
const { Text  } = Typography;

interface NewsCardProps {
  item: {
    id: number
    title: string
    by: string
    time: number
    score: number
  }
}

const NewsCard = (props: NewsCardProps) => {
  return (
    <Link to={`/news/${props.item.id}`}>
      <Card className="news-card" title={props.item.title} size="small" hoverable>
        <div className="news-card__content">
          <Space className="news-card__details">
            <Text type="secondary">By: {props.item.by}</Text>
            <Text type="secondary">Posted at: {timeConverter(props.item.time)}</Text>
          </Space>
          <Space className="news-card__rating">
            <StarFilled />
            <p>{props.item.score}</p>
          </Space>
        </div>
      </Card>
    </Link>
  );
};

export default NewsCard;
