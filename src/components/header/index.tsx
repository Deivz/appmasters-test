import { useState } from 'react';
import logo from '../../assets/img/logo.png';
import { Link, NavLink } from 'react-router-dom';
import NavBar from '../navBar';
import { HeaderContainer } from './Header.styles';
import MenuButton from '../menuButton';
import { ButtonContainer } from '../../styles/components/Button.styles';

export default function Header() {

  const [active, setActive] = useState(false);

  function ToggleMode() {
    setActive(!active);
  }

  return (
    <header>
      <HeaderContainer>
        <h1>
          <Link to='/'>
            <img src={logo} alt='Logomarca da Fliper Masters' />
          </Link>
        </h1>
        <ButtonContainer>
          <NavLink to='/auth'>
            <input type='button' value='Login' />
          </NavLink>
        </ButtonContainer>
        <MenuButton active={active} event={ToggleMode} />
        <NavBar active={active} />
      </HeaderContainer>
    </header>
  )
}
