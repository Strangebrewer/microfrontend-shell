import { FC, useEffect } from 'react';
import { BaseRouter } from './BaseRouter';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { useGetCurrentUser } from './hooks/userHooks';
import { useUserStore } from '@bka-stuff/mfe-utils';

import { authClient } from './utils/authClient';

const Shell: FC = () => {
  const [getCurrentUser] = useGetCurrentUser();
  const { setIsReady, clearUser } = useUserStore();

  useEffect(() => {
    (async function () {
      const token = authClient.getAccessToken();
      const refreshToken = authClient.getRefreshToken();
      try {
        if (token || refreshToken) {
          await getCurrentUser();
        } else {
          clearUser();
        }
      } catch (error) {
        console.log('error in App.jsx:::', error);
        authClient.clearTokens();
        clearUser();
      } finally {
        setTimeout(() => setIsReady(true), 1000);
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