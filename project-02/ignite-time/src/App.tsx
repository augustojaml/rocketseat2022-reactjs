import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CyclesContextProvider } from './context/CyclesContext'
import { Router } from './Router'
import { GlobalStyle } from './_global/styles/global'
import { defaultTheme } from './_global/styles/themes/default'

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CyclesContextProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </CyclesContextProvider>
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}
