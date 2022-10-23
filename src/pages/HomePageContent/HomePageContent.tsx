import React from 'react'
import { useEffect, useState } from 'react'
import './HomePageContent.scss'
import { getNewStoriesIds } from '../../services/api';
import NewsCard from '../../components/NewsCard/NewsCard';
import { RedoOutlined } from '@ant-design/icons';
import { Layout, Button, Space, Spin } from 'antd';
const { Content } = Layout;

const HomePageContent = () => {
  const [newsIds, setNewsIds] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isRefreshButtonClicked, setIsRefreshButtonClicked] = useState(false);

  function refreshNews () {
    setIsRefreshButtonClicked(!isRefreshButtonClicked)
  }

  // 1 -ый вход на страницу
  useEffect(() => {
    setLoading(true)
    getNewStoriesIds()
      .then((data) => {
        setNewsIds(data.slice(0, 100));
        setLoading(false);
      })
      .catch((err) => {
        console.log('Ошибка: ', err);
        setLoading(false);
      });
  },[]);

  // таймер
  useEffect(() => {
    setInterval( () => {
      getNewStoriesIds()
        .then(data => setNewsIds(data.slice(0, 100)))
        .catch(err => console.log('Ошибка: ', err));
    }, 60000)
  },[]);

  //по принуждению
  useEffect(() => {
    getNewStoriesIds()
      .then((data) => setNewsIds(data.slice(0, 100)))
      .catch(err => console.log('Ошибка: ', err));
  },[isRefreshButtonClicked]);

  return (
    <Content className="home-page-content">
      <Button 
        className="home-page-content__button"
        type="primary"
        shape="circle"
        size="large"
        icon={<RedoOutlined />}
        onClick={refreshNews}
      />
      <Space className="home-page-content__news" direction="vertical" size="middle">
        {isLoading ?
          (<div className="home-page-content__spinner">
            <Spin size="large" spinning={isLoading}/>
          </div>) : 
          newsIds.map(id => (<NewsCard id={id} key={id}/>))
        }
      </Space>
    </Content>
  );
};

export default HomePageContent;
