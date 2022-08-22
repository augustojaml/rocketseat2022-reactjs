import styled, { css } from 'styled-components'

interface PriceHightLightProps {
  type?: 'income' | 'outcome' | string
}

export const TransactionListContainer = styled.div`
  ${() => css`
    width: 100%;
    max-width: 1120px;
    margin: 4rem auto;
    padding: 0 1.5rem;
  `}
`

export const TransactionTable = styled.table`
  ${({ theme }) => css`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    margin-top: 1.5rem;
    td {
      padding: 1.25rem 2rem;
      background: ${theme['gray-700']};
      &:first-child {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }
      &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }
    }
  `}
`

export const PriceHightLight = styled.span<PriceHightLightProps>`
  ${({ theme, type }) => css`
    color: ${type === 'income' ? theme['green-300'] : theme['red-300']};
  `}
`
