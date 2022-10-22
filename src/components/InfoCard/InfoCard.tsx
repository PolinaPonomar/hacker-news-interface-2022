import React from 'react'
import './InfoCard.scss'
import {Space, Card, Typography } from 'antd';
const { Text, Link  } = Typography;

export interface InfoCardProps {
  title: string
  by: string
  time: number
  score: number
  url: string
}

const InfoCard = (props: InfoCardProps) => {
  return (
    <Card className="info-card" title={props.title} size="small">
      <Space direction="vertical" size="small">
        <Text>
          I want to
          <Link href={props.url} target="_blank"> read this news</Link>
        </Text>
      <Space className="info-card__details">
        <Text type="secondary">By: {props.by}</Text>
        <Text type="secondary">Posted at: {props.time}</Text>
      </Space>
      </Space>
    </Card>
  );
};

export default InfoCard;
