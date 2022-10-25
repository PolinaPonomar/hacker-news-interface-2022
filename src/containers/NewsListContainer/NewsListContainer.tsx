import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { getNewsList } from '../../store/actions'
import { INewsList } from '../../store/reducer'
import NewsCard from '../../components/NewsCard/NewsCard';
import './NewsListContainer.scss'
import { RedoOutlined } from '@ant-design/icons';
import { Layout, Button, Space, Spin } from 'antd';
const { Content } = Layout;

const NewsListContainer = () => {
  const dispatch = useAppDispatch();
  const newsList = useAppSelector((state:INewsList) => state.newsList)

  function refreshNews () {
    // сюда бы спинер как-то добавить
    dispatch(getNewsList());
  }

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
        {(newsList.length < 100)
          ? (<div className="home-page-content__spinner">
              <Spin size="large" spinning/>
            </div>)
          : newsList.map(news => (<NewsCard item={news} key={news.id}/>))
        }
      </Space>
    </Content>
  );
};

export default NewsListContainer;
