import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './NewsCard.scss'
import { getStorieById } from '../../services/api';
import { timeConverter } from '../../utils/utils';
import { StarFilled } from '@ant-design/icons';
import {Space, Card, Typography } from 'antd';
const { Text  } = Typography;

export interface NewsCardProps {
  id: number
}

export interface NewsProperties {
  title?: string
  by?: string
  time?: number
  score?: number
}

const NewsCard = (props: NewsCardProps) => {
  const [news, setNews] = useState<NewsProperties>({});

  useEffect(() => {
    getStorieById(props.id).then((data) => setNews(data));
  },[]);

  return (
    <Link to={`/news/${props.id}`}>
      <Card className="news-card" title={news.title} size="small" hoverable>
        <div className="news-card__content">
          <Space className="news-card__details">
            <Text type="secondary">By: {news.by}</Text>
            <Text type="secondary">Posted at: {timeConverter(news.time)}</Text>
          </Space>
          <Space className="news-card__rating">
            <StarFilled />
            <p>{news.score}</p>
          </Space>
        </div>
      </Card>
    </Link>
  );
};

export default NewsCard;
