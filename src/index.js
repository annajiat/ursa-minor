import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Raven from 'raven-js'
import { PersistGate } from 'redux-persist/integration/react'
import { unregister } from './registerServiceWorker'
import { store, persistor } from './configureStore'
import './index.css'
import App from './App'

window.store = store

render(
  <Provider store={ store }>
    <PersistGate loading={ null } persistor={ persistor }>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
unregister()
