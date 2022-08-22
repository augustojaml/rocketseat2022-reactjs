import ReactLoading from 'react-loading'
import { useTheme } from 'styled-components'
import { LoadingContainer } from './styles'

export function Loading() {
  const theme = useTheme()
  return (
    <>
      <LoadingContainer>
        <ReactLoading
          type="spin"
          color={theme['green-500']}
          height={30}
          width={30}
        />
      </LoadingContainer>
    </>
  )
}
