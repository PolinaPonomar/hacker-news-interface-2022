import React from 'react'
import { useState } from 'react'
import './HomePageContent.scss'
import NewsCard from '../../components/NewsCard/NewsCard';
import { RedoOutlined } from '@ant-design/icons';
import { Layout, Button, Space, Spin } from 'antd';
const { Content } = Layout;
import {useAppDispatch, useAppSelector} from '../../store/hooks'
import {fecthNewStoriesIds, INewsList  } from '../../store/reducer'

// interface INews {
//   id: number
//   title: string
//   by: string
//   time: number
//   score: number
// }

// interface INewsList {
//   newsList: Array<INews>
// }

const HomePageContent = () => {
  const dispatch = useAppDispatch();
  const newsList = useAppSelector((state:INewsList) => state.newsList)

  function refreshNews () {
    // сюда бы спинер как-то добавить
    dispatch(fecthNewStoriesIds());
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
        {(newsList.length < 100) ?
          (<div className="home-page-content__spinner">
            <Spin size="large" spinning/>
          </div>) :
          newsList.map(news => (<NewsCard item={news} key={news.id}/>))
        }
      </Space>
    </Content>
  );
};

export default HomePageContent;
