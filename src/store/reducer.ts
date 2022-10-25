import {getNewStoriesIds, getStorieById} from '../services/api'

export interface INews {
  id: number
  title: string
  by: string
  time: number
  score: number
  url: string
  kids: number[]
  descendants: number
}

export interface INewsList {
  newsList: Array<INews>
}

const defaultState: INewsList = {
  newsList: []
}
const ADD_NEWS_LIST = "ADD_NEWS_LIST";

export const reducer =(state:INewsList = defaultState, action: {type: string, payload: Array<INews>}) => {
  switch (action.type) {
    case ADD_NEWS_LIST :
      return {...state, newsList: [...action.payload]}
    default:
      return state
  }
}

export const addNewsIdsAction = (payload: Array<INews>) => ({type: ADD_NEWS_LIST, payload})

export const fecthNewStoriesIds = () => {
  return function (dispatch: any) {
    console.log('я работаю')
    getNewStoriesIds()
      .then(ids => Promise.all(ids.slice(0, 100).map((id: number) => getStorieById(id))))
      .then(data => dispatch(addNewsIdsAction(data)))
      .catch(err => console.log('Ошибка: ', err))
  }
}
