import React from 'react'
import './InfoCard.scss'
import {Space, Card, Typography } from 'antd';
const { Text, Link  } = Typography;

export interface InfoCardProps {
  title: string
  author: string
  date: string
  url: string
}

const InfoCard = (props: InfoCardProps) => {
  return (
    <Card className="info-card" title={props.title} size="small">
      <Space direction="vertical" size="small">
        <Text>
          Learn more: 
          <Link href={props.url} target="_blank"> {props.url}</Link>
        </Text>
      <Space>
        <Text type="secondary">By: {props.author}</Text>
        <Text type="secondary">Posted at: {props.date}</Text>
      </Space>
      </Space>
    </Card>
  );
};

export default InfoCard;
