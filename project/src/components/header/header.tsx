import { useLocation } from 'react-router-dom';
import Logo from '../logo/logo';
import UserNav from '../user-nav/user-nav';
import { AuthorizationStatus } from '../../consts';

function Header(): JSX.Element {
  const location = useLocation();
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          { location.pathname !== '/login' ? <UserNav authorizationStatus = {AuthorizationStatus.NoAuth} /> : null }
        </div>
      </div>
    </header>
  );
}

export default Header;
