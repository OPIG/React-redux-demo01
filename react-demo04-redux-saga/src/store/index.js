import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import mySaga from './mySaga'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__?
    window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__({}):compose

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

const store = createStore(
    reducer,
    enhancer
    )

sagaMiddleware.run(mySaga)

export default store
