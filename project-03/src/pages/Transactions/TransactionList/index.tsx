import { Loading } from '@components/Loading'
import { formatCurrency } from '@global/helpers/formatCurrency'
import { formatDate } from '@global/helpers/formatDate'
import { useTheme } from 'styled-components'
import { TransactionSearchForm } from '../TransactionSearchForm'
import { fake } from './fake'
import {
  PriceHightLight,
  TransactionListContainer,
  TransactionTable,
} from './styles'

export type TransactionProps = typeof fake[0]

interface TransactionListProps {
  data?: TransactionProps[]
  isLoading?: boolean
}

export function TransactionList({
  data = fake,
  isLoading = false,
}: TransactionListProps) {
  const theme = useTheme()
  return (
    <>
      <TransactionListContainer>
        <TransactionSearchForm />
        {isLoading ? (
          <Loading />
        ) : (
          <TransactionTable>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td width="50%">{item.description}</td>
                  <td>
                    <PriceHightLight type={item.type}>
                      {item.type === 'outcome' && '- '}
                      R$ {formatCurrency(item.price)}
                    </PriceHightLight>
                  </td>
                  <td>{item.category}</td>
                  <td>{`${formatDate(item.createdAt)}`}</td>
                </tr>
              ))}
            </tbody>
          </TransactionTable>
        )}
      </TransactionListContainer>
    </>
  )
}
