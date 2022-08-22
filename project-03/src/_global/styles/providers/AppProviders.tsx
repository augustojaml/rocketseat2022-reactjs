import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../themes/default'

interface ChildrenNode {
  children: ReactNode
}

export function AppProvider({ children }: ChildrenNode) {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
    </>
  )
}
