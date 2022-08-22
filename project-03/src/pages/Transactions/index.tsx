import { Header } from '@components/Header'
import { Summary } from '@components/Summary'
import { useTransactions } from '@hooks/useTransactions'
import { Container } from './styles'
import { TransactionList } from './TransactionList'

export function Transactions() {
  const { transactions, isLoadingTransactions } = useTransactions()

  return (
    <>
      <Container>
        <Header />
        <Summary />
        <TransactionList
          data={transactions}
          isLoading={isLoadingTransactions}
        />
      </Container>
    </>
  )
}
