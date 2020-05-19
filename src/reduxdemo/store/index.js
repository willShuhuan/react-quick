/**
 * @Description: store仓库创建
 * @author dongshuhuan
 * @date 2020-05-18
 */

import {createStore,applyMiddleware,compose} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import mySagas from './sagas'

//reducer 注入
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  chrome配置redux插件拓展

// const store = createStore(
//     reducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



//redux-thunk 中间件使用
//增强函数
//createStore只能传递两个参数，为保证chrome浏览器redux插件正常使用，需要使用增强函数

// const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose;
// const enhancer = composeEnhancers(applyMiddleware(thunk));
// const store = createStore(
//     reducer,
//     enhancer)
// export default store

//redux-sega
const segaMiddleware=createSagaMiddleware();
const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose;
const enhancer = composeEnhancers(applyMiddleware(segaMiddleware));
const store = createStore(
    reducer,
    enhancer)
segaMiddleware.run(mySagas)
export default store