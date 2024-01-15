import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {PokemonProvider} from './contexts/PokemonContext.jsx'
import {ThemeProvider} from '@mui/material'
import theme from './globals/Theme.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <PokemonProvider>
              <App/>
          </PokemonProvider>
      </ThemeProvider>
  </React.StrictMode>,
)
