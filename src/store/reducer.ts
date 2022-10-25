import {ADD_NEWS_LIST, RESET_NEWS_LIST} from './actions'

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

export const reducer =(state:INewsList = defaultState, action: {type: string, payload: Array<INews>}) => {
  switch (action.type) {
    case ADD_NEWS_LIST :
      return {...state, newsList: [...action.payload]}
    case RESET_NEWS_LIST :
      return {...state, newsList: []}
    default:
      return state
  }
}
