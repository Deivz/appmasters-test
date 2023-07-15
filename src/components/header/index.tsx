import { useState, useContext } from 'react';
import logo from '../../assets/img/logo.png';
import { Link, NavLink } from 'react-router-dom';
import NavBar from '../navBar';
import { HeaderContainer, Overlay } from './Header.styles';
import MenuButton from '../menuButton';
import { ButtonContainer } from '../../styles/components/Button.styles';
import { AuthContext } from '../../contexts/AuthContext';
import CustomModal from '../customModal';

export default function Header() {

  const { user, logout } = useContext(AuthContext);

  const [active, setActive] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  function ToggleMode() {
    setActive(!active);
  }

  function handleLogout(){
    setModalIsOpen(true);
  }

  return (
    <header>
      <HeaderContainer>
        <h1>
          <Link to='/'>
            <img src={logo} alt='Logomarca da Fliper Masters' />
          </Link>
        </h1>
        {
          user
            ?
            <ButtonContainer>
              <input type='button' value='Logout' onClick={handleLogout}/>
            </ButtonContainer>
            :
            <ButtonContainer>
              <NavLink to='/auth'>
                <input type='button' value='Login' />
              </NavLink>
            </ButtonContainer>
        }
        <Overlay active={active} onClick={ToggleMode}/>
        <MenuButton active={active} event={ToggleMode} />
        <NavBar active={active} />
      </HeaderContainer>
      <CustomModal
        text='Deseja realmente deslogar?'
        onConfirmFunction={logout}
        modalState={modalIsOpen}
        modalDispatcher={setModalIsOpen}
      />
    </header>
  )
}
