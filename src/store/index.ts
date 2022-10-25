import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import {reducer} from './reducer'
import thunk from "redux-thunk"
//import {composeWithDevTools} from '@redux-devtools/extension' //- пока не делаю

export const store = configureStore({
  reducer: reducer,
  middleware: [thunk]
})

export type RootState = ReturnType<typeof store.getState>
//export type AppDispatch = typeof store.dispatch
export type AppDispatch = any
