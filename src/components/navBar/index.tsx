import { NavLink } from 'react-router-dom';
import { NavBarContainer } from './NavBar.styles';


export default function NavBar() {
  return (
    <NavBarContainer>
      <li>
        <NavLink to='/'>Games</NavLink>
      </li>
      <li>
        <NavLink to='/favoritos'>Favoritos</NavLink>
      </li>
      <li>
        <NavLink to='/auth'>Login</NavLink>
      </li>
    </NavBarContainer>
  );
}
