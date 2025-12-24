import React, { Suspense, useState } from 'react';

  const App1 = React.lazy(() => import('mfe-app-one/App'));
  const App2 = React.lazy(() => import('mfe-app-two/App'));

const Shell: React.FC = () => {
  const [currentApp, setCurrentApp] = useState<'app1' | 'app2'>('app1');

  return (
    <div>
      <nav style={{ padding: '1rem', borderBottom: '2px solid #ccc' }}>
        <h1>Microfrontend Shell</h1>
        <button onClick={() => setCurrentApp('app1')} style={{ marginRight: '1rem' }}>
          App One
        </button>
        <button onClick={() => setCurrentApp('app2')}>
          App Two
        </button>
      </nav>

      <main style={{ padding: '2rem' }}>
        <Suspense fallback={<div>Loading...</div>}>
          {/* {currentApp === 'app1' ? <App1 /> : <App2 />} */}
          <App1 />
        </Suspense>
      </main>
    </div>
  );
};

export default Shell;