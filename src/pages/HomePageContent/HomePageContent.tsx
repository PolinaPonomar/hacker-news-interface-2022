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

  // async будут возвращать только промисы, поэтому в конце обязательно делаем then
  useEffect(() => {
    getNewStoriesIds().then((data) => setNewsIds(data.slice(0, 100)));
  },[]);

  return (
    <Content className="home-page-content">
      <Button className="home-page-content__button" type="primary" shape="circle" size="large" icon={<RedoOutlined />} /> {/* loading */}
      <Space className="home-page-content__news" direction="vertical" size="middle">
        {newsIds.map(id => {return (<NewsCard id={id} key={id}/>)})}
      </Space>
    </Content>
  );
};

export default HomePageContent;
