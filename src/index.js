import React from 'react'
import { render } from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { rootReducer } from './redux/rootReducer'
import { createStore, compose, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import { Provider } from 'react-redux' // это компонента высшего порядка, оборачиваем в нее приложение
//необходимо установить следующие пакеты:
//yarn add redux react-redux
//
//Также установим yarn add react-devtools-extension redux-logger

const store = createStore(
  rootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

const app = (
  // Компонент <Propvider> обязательно принимает в себя объект store
  <Provider store={store}>
    <App />
  </Provider>
)

render(app, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
