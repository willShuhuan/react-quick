import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Router from "./router";
import ToDoList from "./reduxdemo/reduxdemo";
import store from "./reactreduxdemo/store";
import TodoList2 from "./reactreduxdemo/reactreduxdemo";
import {Provider} from 'react-redux'

//Router应用
// ReactDOM.render(
//   <React.StrictMode>
//     {/*  Router应用 */}
//     {/*<Router/>*/}
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//redux 使用
// ReactDOM.render(
//     <React.StrictMode>
//         <ToDoList/>
//     </React.StrictMode>,
//     document.getElementById('root')
// );

//react-redux使用
// 声明一个App组件，然后这个组件用Provider进行包裹。
const App = (
    <Provider store={store}>
        <TodoList2 />
    </Provider>
)
ReactDOM.render(App, document.getElementById('root'));

serviceWorker.unregister();
