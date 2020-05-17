import React from 'react';
import ReactDOM from 'react-dom';
import App from './singlepagedemo/App';
import * as serviceWorker from './serviceWorker';
import AntD from "./singlepagedemo/AntD";

ReactDOM.render(
  <React.StrictMode>
    {/*<App />*/}
    <AntD />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
