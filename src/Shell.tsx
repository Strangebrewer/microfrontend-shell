import { FC, useEffect } from 'react';
import { BaseRouter } from './BaseRouter';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { useGetCurrentUser } from './hooks/userHooks';

import { authClient } from './utils/authClient';

const Shell: FC = () => {
  const [getCurrentUser] = useGetCurrentUser();

  useEffect(() => {
    (async function () {
      const token = authClient.getAccessToken();
      const refreshToken = authClient.getRefreshToken();
      try {
        if (token || refreshToken) {
          await getCurrentUser();
        }
      } catch (error) {
        console.log('error in App.jsx:::', error);
        authClient.clearTokens();
        // if (token) resetAuthToken();
        // if (refreshToken) resetRefreshToken();
      }
    })();
  }, []);

  return (
    <div>
      <Header />

      <div className='tw:flex'>
        <Sidebar />
        <BaseRouter />
      </div>
    </div>
  );
};

export default Shell;