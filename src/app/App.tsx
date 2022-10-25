import React, { useEffect } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { useAppDispatch } from '../store/hooks'
import { getNewsList } from '../store/actions'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import NewsListContainer from '../containers/NewsListContainer/NewsListContainer';
import NewsInfoContainer from '../containers/NewsInfoContainer/NewsInfoContainer';
import NotFoundErrorContainer from '../containers/NotFoundErrorContainer/NotFoundErrorContainer';
import { NEWS_REFRESH_INTERVAL } from '../utils/constants'
import './App.scss'
import { Layout } from 'antd';
const { Header, Footer } = Layout;

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getNewsList());
    setInterval( () => {
      dispatch(getNewsList());
    }, NEWS_REFRESH_INTERVAL)
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
            <NewsListContainer />
          </Route>
          <Route path="/news/:id">
            <NewsInfoContainer />
          </Route>
          <Route>
            <NotFoundErrorContainer />
          </Route>
        </Switch>
        <Footer className="footer">
          Avito test task for the front-end developer position (trainee) by Polina Ponomareva, 2022
        </Footer>
      </Layout>
    </ScrollToTop>
  );
};

export default App;
