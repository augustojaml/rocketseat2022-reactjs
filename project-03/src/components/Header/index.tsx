import { Container, HeaderContent, NewTransactionButton } from './styles'
import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '@global/assets/logo.png'
import { NewTransactionModal } from '@pages/Transactions/NewTransactionModal'

export function Header() {
  return (
    <>
      <Container>
        <HeaderContent>
          <img src={logoImg} alt="" />
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <NewTransactionButton>Nova transação</NewTransactionButton>
            </Dialog.Trigger>
            <NewTransactionModal />
          </Dialog.Root>
        </HeaderContent>
      </Container>
    </>
  )
}
