import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import './NewsPageContent.scss'
import { getStorieById } from '../../services/api';
import InfoCard from '../../components/InfoCard/InfoCard';
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
  const [isLoadingInfo, setLoadingInfo] = useState(true);
  const [isLoadingComments, setLoadingComments] = useState(true);
  const [isRefreshButtonClicked, setIsRefreshButtonClicked] = useState(false);

  function refreshComments () :void {
    setIsRefreshButtonClicked(!isRefreshButtonClicked)
  }

  // 1 -ый вход на страницу
  useEffect(() => {
    setLoadingInfo(true)
    setLoadingComments(true)
    getStorieById(Number(id))
      .then((data) => {
        setNews(data);
        setLoadingInfo(false)
        setLoadingComments(false);
      })
      .catch((err) => {
        console.log('Ошибка: ', err);
        setLoadingInfo(false)
        setLoadingComments(false);
      });
  },[]);

  // по принуждению
  useEffect(() => {
    setLoadingComments(true)
    getStorieById(Number(id))
      .then((data) => {
        setNews(data);
        setLoadingComments(false);
      })
      .catch((err) => {
        console.log('Ошибка: ', err);
        setLoadingComments(false);
      });
  },[isRefreshButtonClicked]);

  return (
    <Content className="news-page-content">
      <Link to="/" className="news-page-content__button">
        <Button type="primary" shape="circle" size="large" icon={<ArrowLeftOutlined />} />
      </Link>
      <Space className="news-page-content__info" direction="vertical" size="large">
        <InfoCard title={news.title} by={news.by} time={news.time} score={news.score} url={news.url} isLoading={isLoadingInfo}/>
        <Comments
          ids={news.kids ? news.kids : []}
          commentsCount={news.descendants}
          handleButtonClick={refreshComments}
          isLoading={isLoadingComments}
        />
      </Space>
    </Content>
  );
};

export default NewsPageContent;
