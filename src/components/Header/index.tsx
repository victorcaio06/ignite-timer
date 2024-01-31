import { Scroll, Timer } from 'phosphor-react';

import logoIgniteTime from './../../assets/Logo.svg';
import { HeaderContainer } from './styles';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgniteTime} alt="Logo do Ignite Timer" />

      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
