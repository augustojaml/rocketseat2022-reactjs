import { SearchFormContainer } from './styles'
import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as ZOD from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTransactions } from '@hooks/useTransactions'
import { memo } from 'react'

const searchFormSchema = ZOD.object({
  query: ZOD.string(),
})

type SearchFormInputs = ZOD.infer<typeof searchFormSchema>

function TransactionSearchFormMemo() {
  const { searchTransactions } = useTransactions()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSeearchTransaction(data: SearchFormInputs) {
    await searchTransactions(data)
  }

  return (
    <>
      <SearchFormContainer onSubmit={handleSubmit(handleSeearchTransaction)}>
        <input
          type="text"
          placeholder="Busque por transações"
          {...register('query')}
        />
        <button type="submit" disabled={isSubmitting}>
          <MagnifyingGlass size={20} />
          Localizar
        </button>
      </SearchFormContainer>
    </>
  )
}

export const TransactionSearchForm = memo(TransactionSearchFormMemo)
