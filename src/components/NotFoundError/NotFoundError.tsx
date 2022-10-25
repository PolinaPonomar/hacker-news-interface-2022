import React from 'react'
import { Link } from 'react-router-dom'
import './NotFoundError.scss'
import { SmileTwoTone } from '@ant-design/icons';


const NotFoundError = () => {
  return (
    <div className="not-found-error">
      <p className="not-found-error__text">Страница не найдена</p>
      <Link to='/'>Зато вы можете вернуться на главную <SmileTwoTone rotate={180}/></Link>
    </div>
  );
};

export default NotFoundError;
