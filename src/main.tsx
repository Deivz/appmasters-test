import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './routes.tsx'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes.ts'
import { GlobalStyle } from './styles/global.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AppRouter />
    </ThemeProvider>
  </React.StrictMode>,
)
