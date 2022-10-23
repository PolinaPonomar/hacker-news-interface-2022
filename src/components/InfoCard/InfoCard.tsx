import React from 'react'
import './InfoCard.scss'
import { timeConverter } from '../../utils/utils';
import {Space, Card, Typography, Skeleton } from 'antd';
const { Text, Link  } = Typography;

export interface InfoCardProps {
  title: string
  by: string
  time: number
  score: number
  url: string
  isLoading: boolean
}

const InfoCard = (props: InfoCardProps) => {
  return (
    <>
      {props.isLoading ?
        (<Card className="info-card"><Skeleton paragraph={{rows: 1}} active /></Card>):
        (<Card className="info-card" title={props.title} size="small">
          <Space direction="vertical" size="small">
            <Text>
              I want to
              <Link href={props.url} target="_blank"> read this news</Link>
            </Text>
            <Space className="info-card__details">
              <Text type="secondary">By: {props.by}</Text>
              <Text type="secondary">Posted at: {timeConverter(props.time)}</Text>
            </Space>
          </Space>
        </Card>)
      }
    </>
  );
};

export default InfoCard;
