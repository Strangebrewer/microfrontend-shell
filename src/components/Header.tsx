import { FC, useState } from 'react';
import { useUserStore } from '@bka-stuff/mfe-utils';

import LoginModal from './LoginModal';
import { useLogout } from '../hooks/userHooks';

const Header: FC = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [logout] = useLogout();

  const { user, isReady } = useUserStore();

  function auth() {
    if (user) {
      logout();
      return;
    }
    setShowLoginModal(!showLoginModal);
  }

  return (
    <nav className='tw:border tw:border-[#ccc] tw:h-[64px] tw:flex tw:justify-between'>
      <h1>Microfrontend Shell</h1>

      {isReady
        ? (
          <button
            className='tw:mr-[16px]'
            onClick={auth}
          >
            {user ? 'Logout' : 'Login'}
          </button>
        ) : (
          <button>Hey Hey</button>
        )}
      <LoginModal close={() => setShowLoginModal(false)} isOpen={showLoginModal} />
    </nav>
  );
};

export default Header;
