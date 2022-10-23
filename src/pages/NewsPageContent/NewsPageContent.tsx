import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './NewsPageContent.scss'
import { getStorieById } from '../../services/api';
import InfoCard from '../../components/InfoCard/InfoCard';
//import CommentItem from '../../components/CommentItem/CommentItem'
import Comments from '../../components/Comments/Comments'
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Layout, Button, Space } from 'antd';
const { Content } = Layout;

export interface NewsProperties {
  title?: string
  by?: string
  time?: number
  score?: number
  url?: string
  kids?: number[]
  descendants?: number
}

const NewsPageContent = () => {
  const { id } = useParams<{id?: string}>();
  const [news, setNews] = useState<NewsProperties>({});

  useEffect(() => {
    getStorieById(Number(id)).then((data) => setNews(data));
  },[]);

  return (
    <Content className="news-page-content">
      <Button className="news-page-content__button" type="primary" shape="circle" size="large" icon={<ArrowLeftOutlined />} />
      <Space className="news-page-content__info" direction="vertical" size="large">
        <InfoCard title={news.title} by={news.by} time={news.time} score={news.score} url={news.url}/>

        {/* <Space className="comments" direction="vertical" size="small">
          <div className='comments__header'>
            <p>{news.descendants} comments</p>
            <Button className="comments__button" type="primary" shape="circle" size="small" icon={<RedoOutlined />} />
          </div>
          {news.kids.map(id => {return (<CommentItem id={id} key={id}/>)})}
        </Space> */}

          <Comments ids={news.kids ? news.kids : []} commentsCount={news.descendants}/>
      </Space>
    </Content>
  );
};

export default NewsPageContent;
