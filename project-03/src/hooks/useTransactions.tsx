import { api } from '@global/services/api'
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

import {} from 'use-context-selector'

interface ChildrenNode {
  children: ReactNode
}

export type TransactionProps = {
  id: string
  description: string
  type: string
  category: string
  price: number
  createdAt: string
}

export interface Totals {
  income: number
  outcome: number
  total: number
}

interface NewTransaction {
  type: 'income' | 'outcome'
  description: string
  price: number
  category: string
}

interface Search {
  query: string
}

interface TransactionListProps {
  transactions: TransactionProps[]
  isLoadingTransactions: boolean
  total: Totals
  searchTransactions: ({ query }: Search) => Promise<void>
  addNewTransaction: (data: NewTransaction) => Promise<void>
}

const TransactionsContext = createContext({} as TransactionListProps)

function TransactionProvider({ children }: ChildrenNode) {
  const [isLoadingTransactions, setIsloadingTransactions] = useState(false)
  const [transactions, setTransactions] = useState<TransactionProps[]>([])
  const [total, setTotal] = useState<Totals>({
    income: 0,
    outcome: 0,
    total: 0,
  })

  const getTotal = useCallback(async (transactions: TransactionProps[]) => {
    return transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === 'income') {
          acc.income += transaction.price
          acc.total += transaction.price
        } else {
          acc.outcome += transaction.price
          acc.total -= transaction.price
        }
        return acc
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    )
  }, [])

  const searchTransactions = useCallback(async ({ query }: Search) => {
    setIsloadingTransactions(true)
    const { data } = await api.get(`transactions`, {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })
    setTransactions(data)
    setIsloadingTransactions(false)
  }, [])

  const loadingTransactions = useCallback(async () => {
    setIsloadingTransactions(true)
    const { data } = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
      },
    })
    setTransactions(data)
    setTotal(await getTotal(data))
    setIsloadingTransactions(false)
  }, [getTotal])

  const addNewTransaction = useCallback(
    async (data: NewTransaction) => {
      setIsloadingTransactions(true)
      const newFormData = {
        id: String(new Date().getTime()),
        createdAt: new Date().toISOString(),
        ...data,
      }

      const updatedTransaction = [newFormData, ...transactions]
      setTransactions(updatedTransaction)
      setTotal(await getTotal(updatedTransaction))
      await api.post('/transactions', newFormData)
      setIsloadingTransactions(false)
    },
    [getTotal, transactions],
  )

  useEffect(() => {
    loadingTransactions()
  }, [loadingTransactions])

  return (
    <>
      <TransactionsContext.Provider
        value={{
          isLoadingTransactions,
          transactions,
          total,
          searchTransactions,
          addNewTransaction,
        }}
      >
        {children}
      </TransactionsContext.Provider>
    </>
  )
}

function useTransactions() {
  return useContext(TransactionsContext)
}

export { TransactionProvider, useTransactions }
