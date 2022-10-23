import React from 'react'
import { useEffect, useState } from 'react'
import './HomePageContent.scss'
import { getNewStoriesIds } from '../../services/api';
import NewsCard from '../../components/NewsCard/NewsCard';
import { RedoOutlined } from '@ant-design/icons';
import { Layout, Button, Space } from 'antd';
const { Content } = Layout;

const HomePageContent = () => {
  const [newsIds, setNewsIds] = useState([]);
  const [isRefreshButtonClicked, setIsRefreshButtonClicked] = useState(false);

  function refreshNews () {
    setIsRefreshButtonClicked(!isRefreshButtonClicked)
  }

  // 1 -ый вход на страницу
  useEffect(() => {
    setInterval( () => {
      getNewStoriesIds().then((data) => setNewsIds(data.slice(0, 100)));
      console.log('0')
    }, 60000)
  },[]);

  //по принуждению
  useEffect(() => {
    getNewStoriesIds().then((data) => setNewsIds(data.slice(0, 100)));
  },[isRefreshButtonClicked]); //работает, но видимые изменения только тогда, когда меняется список айдишек

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
        {newsIds.map(id => (<NewsCard id={id} key={id}/>))}
      </Space>
    </Content>
  );
};

export default HomePageContent;
