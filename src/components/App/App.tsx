import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import './App.scss'
import HomePageContent from '../../pages/HomePageContent/HomePageContent';
import NewsPageContent from '../../pages/NewsPageContent/NewsPageContent';
import { Layout } from 'antd';
const { Header, Footer } = Layout;

const App = () => {
  return (
    <Layout className="page">
      <Header>
        <Link to="/"><h1 className="logo">Hacker News</h1></Link>
      </Header>
      <Switch>
        <Route exact path="/">
          <HomePageContent/>
        </Route>
        <Route path="/news">
          <NewsPageContent/>
        </Route>
      </Switch>
      <Footer>Test task for the intern front-end in Avito, 2022</Footer>
    </Layout>
  );
};

export default App;
