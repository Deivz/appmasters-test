import SearchBar from '../searchBar';
import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';
import NavBar from '../navBar';
import { HeaderContainer } from './Header.styles';

export default function Header() {
  return (
    <header>
      <HeaderContainer>
        <h1>
          <Link to='/'>
            <img src={logo} alt='Logomarca da Fliper Masters' />
          </Link>
        </h1>
        <div className='searchBar'>
          <SearchBar />
        </div>
        <div className='navBar'>
          <NavBar />
        </div>
      </HeaderContainer>
    </header>
  )
}
