/**
 * @Description: store仓库创建
 * @author dongshuhuan
 * @date 2020-05-18
 */

import {createStore} from 'redux'
import reducer from './reducer'

//reducer 注入
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  chrome配置redux插件拓展
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store