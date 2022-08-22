import styled, { css } from 'styled-components'

export const LoadingContainer = styled.div`
  ${() => css`
    width: 100%;
    max-width: 1120px;
    margin: 4rem auto;
    padding: 0 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
  `}
`
