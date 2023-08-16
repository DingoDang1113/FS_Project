import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { restoreSession } from './utils/authUtils';
import { Provider } from 'react-redux';

// const store = configureStore ({
//   session: {
//     currentUser: 1
//   }
// })

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderApp = () => {
  root.render(
    <React.StrictMode>
      {/* <Provider> */}
        <App />
      {/* </Provider> */}
    </React.StrictMode>
  )
}

const currentUser = sessionStorage.getItem('currentUser')
const csrfToken = sessionStorage.getItem('csrfToken')

// if (!currentUser || !csrfToken) {
//   restoreSession().then(renderApp)
// } else {
  renderApp()
// }