import React from 'react'
import ReactDOM from 'react-dom'

// REdux
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import ThemeReducers from './utils/redux/reducers/ThemeReducers'
import App from './app'

let store = createStore(
  ThemeReducers,
  {
    theme: 'default'
  },
  window.devToolsExtensions && window.devToolsExtensions()
)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)
