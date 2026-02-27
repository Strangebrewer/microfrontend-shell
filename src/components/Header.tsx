import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginModal from './LoginModal';
import { authClient } from '../utils/authClient';

import { useLogout } from '../hooks/userHooks';

const Header: FC = () => {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [logout] = useLogout();

  const token = authClient.getAccessToken();

  function authAndStuff() {
    if (token) {
      logout();
    }
    setShowLoginModal(!showLoginModal);
  }

  return (
    <nav className='tw:border tw:border-[#ccc] tw:h-[64px] tw:flex tw:justify-between'>
      <h1>Microfrontend Shell</h1>
      <div>
        <button className='tw:mr-[1rem]' onClick={() => navigate('/')}>App 1</button>
        <button onClick={() => navigate('/stuff')}>App 2</button>
      </div>
      <button
        className='tw:mr-[16px]'
        onClick={authAndStuff}
      >{token ? 'Logout' : 'Login'}</button>
      {showLoginModal && <LoginModal show={showLoginModal} close={() => setShowLoginModal(false)} />}
    </nav>
  );
};

export default Header;
