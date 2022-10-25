import React from 'react'
import { useState } from 'react'
import './HomePageContent.scss'
import NewsCard from '../../components/NewsCard/NewsCard';
import { RedoOutlined } from '@ant-design/icons';
import { Layout, Button, Space, Spin } from 'antd';
const { Content } = Layout;

interface INews {
  id: number
  title: string
  by: string
  time: number
  score: number
}

interface HomePageContentProps {
  newsList: Array<INews>
  handleRefreshButtonClick: Function
}

const HomePageContent = (props: HomePageContentProps) => {
  return (
    <Content className="home-page-content">
      <Button 
        className="home-page-content__button"
        type="primary"
        shape="circle"
        size="large"
        icon={<RedoOutlined />}
        onClick={() => props.handleRefreshButtonClick()}
      />
      <Space className="home-page-content__news" direction="vertical" size="middle">
        {(props.newsList.length < 100) ?
          (<div className="home-page-content__spinner">
            <Spin size="large" spinning/>
          </div>) :
          props.newsList.map(news => (<NewsCard item={news} key={news.id}/>))
        }
      </Space>
    </Content>
  );
};

export default HomePageContent;
