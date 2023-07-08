import { NavLink } from 'react-router-dom';
import { NavBarContainer } from './NavBar.styles';


export default function NavBar() {
  return (
    <NavBarContainer>
      <li>
        <NavLink to='/home'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/'>Games</NavLink>
      </li>
      <li>
        <NavLink to='/consoles'>Consoles</NavLink>
      </li>
    </NavBarContainer>
  );
}
