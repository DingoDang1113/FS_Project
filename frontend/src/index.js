import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css'
import './index.css';
import App from './App';
import { csrfFetch, restoreSession } from './utils/authUtils';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

const store = configureStore ({
  // session: {
  //   currentUs
  // }
})

window.csrfFetch = csrfFetch
window.store = store

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderApp = () => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  )
}

const currentUser = sessionStorage.getItem('currentUser')
const csrfToken = sessionStorage.getItem('csrfToken')

console.log('current_user_index',currentUser)
console.log("token_index",csrfToken)

if (!currentUser || !csrfToken) {
  store.dispatch(restoreSession()).then(renderApp)
} else {
  renderApp()
} 