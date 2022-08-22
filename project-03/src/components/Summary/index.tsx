import { SummaryCard, SummaryContainer } from './styles'
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { useTransactions } from '@hooks/useTransactions'
import { formatCurrency } from '@global/helpers/formatCurrency'

export function Summary() {
  const theme = useTheme()
  const { total } = useTransactions()

  return (
    <>
      <SummaryContainer>
        <SummaryCard>
          <header>
            <span>Entradas</span>
            <ArrowCircleUp size={32} color={theme['green-300']} />
          </header>
          <strong>R$ {formatCurrency(total.income)}</strong>
        </SummaryCard>
        <SummaryCard>
          <header>
            <span>Saidas</span>
            <ArrowCircleDown size={32} color={theme['red-500']} />
          </header>
          <strong>R$ {formatCurrency(total.outcome)}</strong>
        </SummaryCard>
        <SummaryCard background={theme['green-700']}>
          <header>
            <span>Total</span>
            <CurrencyDollar size={32} color={theme['gray-100']} />
          </header>
          <strong>R$ {formatCurrency(total.total)}</strong>
        </SummaryCard>
      </SummaryContainer>
    </>
  )
}
