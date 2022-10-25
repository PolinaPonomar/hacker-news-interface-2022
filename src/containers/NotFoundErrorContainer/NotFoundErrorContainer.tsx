import React from 'react'
import NotFoundError from '../../components/NotFoundError/NotFoundError'
import './NotFoundErrorContainer.scss'
import { Layout, Space } from 'antd';
const { Content } = Layout;

const NotFoundErrorContainer = () => {
  return (
    <Content className="not-found-error-container">
      <Space className="not-found-error-container__frame" direction="vertical">
        <NotFoundError />
      </Space>
    </Content>
  );
};

export default NotFoundErrorContainer;
