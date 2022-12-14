import React from 'react'
import { Link } from 'react-router-dom'
import { timeConverter } from '../../utils/utils';
import './NewsCard.scss'
import { StarFilled } from '@ant-design/icons';
import { Space, Card, Typography } from 'antd';
const { Text } = Typography;

interface INewsCardProps {
  item: {
    id: number
    title: string
    by: string
    time: number
    score: number
  }
}

const NewsCard = (props: INewsCardProps) => {
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
