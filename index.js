import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import { ProductProvider } from './Context';

ReactDOM.render(
  <ProductProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ProductProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/ly-PWA
//serviceWorker.unregister();