import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import GlobalStyle from '~/components/GlobalStyle'
import { MusicProvider } from './store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GlobalStyle>
      <MusicProvider>
        <App />
      </MusicProvider>
    </GlobalStyle>
  </React.StrictMode>
)

reportWebVitals()
