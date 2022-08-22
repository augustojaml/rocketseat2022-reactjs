import { GlobalStyle } from '@global/styles/global'
import { AppProvider } from '@global/styles/providers/AppProviders'
import { TransactionProvider } from '@hooks/useTransactions'
import { Transactions } from '@pages/Transactions'

export function App() {
  return (
    <>
      <AppProvider>
        <TransactionProvider>
          <Transactions />
        </TransactionProvider>
        <GlobalStyle />
      </AppProvider>
    </>
  )
}
