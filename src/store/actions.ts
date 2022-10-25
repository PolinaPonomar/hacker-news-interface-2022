import { getNewStoriesIds, getStorieById } from '../services/api'
import { INews } from './reducer'
import { NEWS_COUNT } from '../utils/constants'

export const ADD_NEWS_LIST = "ADD_NEWS_LIST";

export const addNewsListAction = (payload: Array<INews>) => ({type: ADD_NEWS_LIST, payload})

export const getNewsList = () => {
  return function (dispatch: any) {
    getNewStoriesIds()
      .then(ids => Promise.all(ids.slice(0, NEWS_COUNT).map((id: number) => getStorieById(id))))
      .then(data => dispatch(addNewsListAction(data)))
      .catch(err => console.log('Ошибка: ', err))
  }
}

export const RESET_NEWS_LIST ="RESET_NEWS_LIST"

export const resetNewsListAction = (payload: Array<INews>) => ({type: ADD_NEWS_LIST, payload})
