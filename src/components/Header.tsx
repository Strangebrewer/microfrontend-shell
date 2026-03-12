import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginModal from './LoginModal';
import { authClient } from '../utils/authClient';
import { useLogout } from '../hooks/userHooks';

const Header: FC = () => {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [logout] = useLogout();

  let token = authClient.getAccessToken();

  function auth() {
    if (token) {
      logout();
      token = null;
      return;
    }
    setShowLoginModal(!showLoginModal);
  }

  return (
    <nav className='tw:border tw:border-[#ccc] tw:h-[64px] tw:flex tw:justify-between'>
      <h1>Microfrontend Shell</h1>
      <div>
        <button className='tw:mr-[1rem]' onClick={() => navigate('/')}>App 1</button>
        <button onClick={() => navigate('/job-search')}>App 2</button>
      </div>
      <button
        className='tw:mr-[16px]'
        onClick={auth}
      >{token ? 'Logout' : 'Login'}</button>
      <LoginModal close={() => setShowLoginModal(false)} isOpen={showLoginModal} />
    </nav>
  );
};

export default Header;
