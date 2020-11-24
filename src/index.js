import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import ruRu from 'antd/lib/locale/ru_RU';

import App from './App';
import store, { history } from './store'
import reportWebVitals from './reportWebVitals';

import './index.css';
import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ConfigProvider locale={ruRu}>
          <App />
        </ConfigProvider>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
