import { createStore, applyMiddleware, combineReducers } from 'redux'
import githubReducer from './github'
import goldSourceReducer from './goldsource'
import indexReducer from './index'
import Request from '../request'
import reduxThunk from 'redux-thunk'
import reduxLogger from 'redux-logger'

const clientAxios = Request.getClientAxiosInstance();
const reducers = combineReducers({
    index: indexReducer,
    gold: goldSourceReducer,
    github: githubReducer
});

const store = createStore(reducers, applyMiddleware(reduxThunk.withExtraArgument(clientAxios), reduxLogger))

export default store;
