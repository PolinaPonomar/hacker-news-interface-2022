import React from 'react'
import { Link } from 'react-router-dom'
import './App.scss'
import NewsCard from '../NewsCard/NewsCard';
import { RedoOutlined } from '@ant-design/icons';
import { Layout, Button, Space } from 'antd';
const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Layout className="page">
      <Header>
        <Link to="/"><h1 className="logo">Hacker News</h1></Link>
      </Header>
      <Content className="content">

        <Button className="refresh-button" type="primary" shape="circle" size="large" icon={<RedoOutlined />} /> {/* loading */}
        <Space className="news" direction="vertical" size="middle">
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
      <Footer>Test task for the intern front-end in Avito, 2022</Footer>
    </Layout>
  );
};

export default App;
