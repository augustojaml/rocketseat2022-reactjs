import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import * as ZOD from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { useTransactions } from '@hooks/useTransactions'

const formSchema = ZOD.object({
  description: ZOD.string(),
  price: ZOD.number(),
  category: ZOD.string(),
  type: ZOD.enum(['income', 'outcome']),
})

type FormSchema = ZOD.infer<typeof formSchema>

export function NewTransactionModal() {
  const { addNewTransaction } = useTransactions()

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  })

  async function handleAddNewTransaction(data: FormSchema) {
    await addNewTransaction(data)
  }

  return (
    <>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <Dialog.Title>Nova transação</Dialog.Title>
          <form onSubmit={handleSubmit(handleAddNewTransaction)}>
            <input
              type="text"
              placeholder="Descrição"
              {...register('description')}
              required
            />
            <input
              type="number"
              placeholder="Preco"
              {...register('price', { valueAsNumber: true })}
              required
            />
            <input
              type="text"
              placeholder="Categoria"
              {...register('category')}
              required
            />

            <Controller
              control={control}
              name="type"
              render={({ field }) => (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>
                  <TransactionTypeButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransactionTypeButton>
                </TransactionType>
              )}
            />

            <button type="submit" disabled={isSubmitting}>
              Cadastrar
            </button>
          </form>

          <CloseButton>
            <X size={24} />
          </CloseButton>
        </Content>
      </Dialog.Portal>
    </>
  )
}
