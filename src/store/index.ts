import {combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {galleryReducer} from './galleryReducer'
import {sagaWatcher} from './saga'

const saga = createSagaMiddleware()

const rootReducer = combineReducers({
  gallery: galleryReducer
})

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(saga))
saga.run(sagaWatcher)
export default store