import React from 'react'
import { Link } from 'react-router-dom'
import './HomePageContent.scss'
import NewsCard from '../../components/NewsCard/NewsCard';
import { RedoOutlined } from '@ant-design/icons';
import { Layout, Button, Space } from 'antd';
const { Content } = Layout;

const HomePageContent = () => {
  return (
    <Content className="home-page-content">
      <Button className="home-page-content__button" type="primary" shape="circle" size="large" icon={<RedoOutlined />} /> {/* loading */}
      <Space className="home-page-content__news" direction="vertical" size="middle">
        <NewsCard title='Title' author='author' date='date' rating={5}/>
        <NewsCard title='Title' author='author' date='date' rating={5}/>
        <NewsCard title='Title' author='author' date='date' rating={5}/>
        <NewsCard title='Title' author='author' date='date' rating={5}/>
        <NewsCard title='Title' author='author' date='date' rating={5}/>
        <NewsCard title='Title' author='author' date='date' rating={5}/>
        <NewsCard title='Title' author='author' date='date' rating={5}/>
        <NewsCard title='Title' author='author' date='date' rating={5}/>
      </Space>
    </Content>
  );
};

export default HomePageContent;
