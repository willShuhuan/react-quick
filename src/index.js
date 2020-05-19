import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Router from "./router";
import ToDoList from "./reduxdemo/reduxdemo";


ReactDOM.render(
  <React.StrictMode>
    {/*  Router应用 */}
    {/*<Router/>*/}

    <ToDoList/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
