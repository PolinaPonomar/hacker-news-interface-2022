import React from 'react'
import { useEffect } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import './App.scss'
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import HomePageContent from '../../pages/HomePageContent/HomePageContent';
import NewsPageContent from '../../pages/NewsPageContent/NewsPageContent';
import { Layout } from 'antd';
const { Header, Footer } = Layout;

import {useAppDispatch, useAppSelector} from '../../store/hooks'
import {fecthNewStoriesIds} from '../../store/reducer'

interface INews {
  id: number
  title: string
  by: string
  time: number
  score: number
}

interface INewsList {
  newsList: Array<INews>
}

const App = () => {
  const dispatch = useAppDispatch();
  const newsList = useAppSelector((state:INewsList) => state.newsList)
  console.log(newsList);

  function refreshNews () {
    dispatch(fecthNewStoriesIds());
  }

  // 1 -ый вход в сервис
  useEffect(() => {
    dispatch(fecthNewStoriesIds());
    // обновление новостей каждую минуту
    setInterval( () => {
      console.log('timer')
      dispatch(fecthNewStoriesIds());
    }, 60000)
  },[]);

  return (
    <ScrollToTop>
      <Layout className="page">
        <Header className="header">
          <div className="header__wrapper">
            <Link to="/"><h1 className="logo">Hacker News</h1></Link>
          </div>
        </Header>
        <Switch>
          <Route exact path="/">
            <HomePageContent newsList={newsList} handleRefreshButtonClick={refreshNews}/>
          </Route>
          <Route path="/news/:id">
            <NewsPageContent/>
          </Route>
        </Switch>
        <Footer className="footer">Test task for the intern front-end in Avito, 2022</Footer>
      </Layout>
    </ScrollToTop>
  );
};

export default App;
