import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './state/reducers'

const store = createStore(rootReducer)
const Index = () => <div>​Hello React!</div>

render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('index')
)