import { Timer, Scroll } from 'phosphor-react'

import * as S from './styles'

import logoIgnite from '../../assets/logo-ignite.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <>
      <S.HeaderContainer>
        <img src={logoIgnite} alt="" />
        <nav>
          <NavLink to="/" title="time">
            <Timer size={24} />
          </NavLink>
          <NavLink to="/history" title="Histórico">
            <Scroll size={24} />
          </NavLink>
        </nav>
      </S.HeaderContainer>
    </>
  )
}
