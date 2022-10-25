import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks'
import { INewsList } from '../../store/reducer'
import { getStorieById } from '../../services/api';
import InfoCard from '../../components/InfoCard/InfoCard';
import Comments from '../../components/Comments/Comments'
import NotFoundError from '../../components/NotFoundError/NotFoundError'
import { NEWS_COUNT } from '../../utils/constants'
import './NewsInfoContainer.scss'
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Layout, Button, Space, Spin } from 'antd';
const { Content } = Layout;

interface ICurrentNews {
  title?: string
  by?: string
  time?: number
  score?: number
  url?: string
  kids?: number[]
  descendants?: number
}

const NewsInfoContainer = () => {
  const { id } = useParams<{id?: string}>();
  const newsList = useAppSelector((state:INewsList) => state.newsList)
  const [currentNews, setCurrentNews] = useState<ICurrentNews>({});
  const [isLoadingComments, setLoadingComments] = useState(false);

  function refreshComments () :void {
    setLoadingComments(true)
    getStorieById(Number(id))
      .then((data) => setCurrentNews(data))
      .catch((err) => console.log('Ошибка: ', err))
      .finally(() => setLoadingComments(false));
  }

  useEffect(() => {
    newsList.forEach(item => {
      if (item.id == Number(id)) {
        setCurrentNews(item)
        return
      }
    })
  },[newsList.length]);

  return (
    <Content className="news-info-container">
      <Link to="/" className="news-info-container__button">
        <Button type="primary" shape="circle" size="large" icon={<ArrowLeftOutlined />} />
      </Link>
      <Space className="news-info-container__info" direction="vertical" size="large">
        {(newsList.length < NEWS_COUNT)
          ? (<div className="news-info-container__spinner">
              <Spin size="large" spinning/>
            </div>)
          : (Object.entries(currentNews).length === 0 )
          ? (<NotFoundError/>)
          : (<>
              <InfoCard title={currentNews.title} by={currentNews.by} time={currentNews.time} score={currentNews.score} url={currentNews.url}/>
              <Comments
                ids={currentNews.kids ? currentNews.kids : []}
                commentsCount={currentNews.descendants}
                handleButtonClick={refreshComments}
                isLoading={isLoadingComments}
              />
            </>)
        }
      </Space>
    </Content>
  );
};

export default NewsInfoContainer;
