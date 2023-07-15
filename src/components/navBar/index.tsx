import { NavLink } from 'react-router-dom';
import { NavBarContainer } from './NavBar.styles';

interface NavBarProps {
  active: boolean;
}

export default function NavBar({ active }: NavBarProps) {
  return (
    <NavBarContainer active={active}>
      <li>
        <NavLink to='/'>Games</NavLink>
      </li>
      <li>
        <NavLink to='/register'>Cadastrar</NavLink>
      </li>
    </NavBarContainer>
  );
}
