import { getNewStoriesIds, getStorieById } from '../services/api'
import { INews } from './reducer'

export const ADD_NEWS_LIST = "ADD_NEWS_LIST";

export const addNewsListAction = (payload: Array<INews>) => ({type: ADD_NEWS_LIST, payload})

export const getNewsList = () => {
  return function (dispatch: any) {
    getNewStoriesIds()
      .then(ids => Promise.all(ids.slice(0, 100).map((id: number) => getStorieById(id))))
      .then(data => dispatch(addNewsListAction(data)))
      .catch(err => console.log('Ошибка: ', err))
  }
}
