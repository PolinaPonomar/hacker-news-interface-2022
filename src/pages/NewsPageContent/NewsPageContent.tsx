import React from 'react'
import './NewsPageContent.scss'
import InfoCard from '../../components/InfoCard/InfoCard';
import Comments from '../../components/Comments/Comments'
import { ArrowLeftOutlined, RedoOutlined } from '@ant-design/icons';
import { Layout, Button, Space } from 'antd';
const { Content } = Layout;

const NewsPageContent = () => {
  return (
    <Content className="news-page-content">
      <Button className="news-page-content__button" type="primary" shape="circle" size="large" icon={<ArrowLeftOutlined />} />
      <Space className="news-page-content__info" direction="vertical" size="large">
        <InfoCard title='Show HN: Restfox – Open source lightweight alternative to Postman' author='author' date='2016-11-22 11:22:33' url='https://joeschmoe.io/api/v1/random' />
        <Comments />
      </Space>
    </Content>
  );
};

export default NewsPageContent;
