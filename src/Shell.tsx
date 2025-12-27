import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

const App1 = React.lazy(() => import('mfe-app-one/App'));
const App2 = React.lazy(() => import('mfe-app-two/App'));

const ShellInner: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <nav style={{ borderBottom: '2px solid #ccc', height: '64px' }}>
        <h1>Microfrontend Shell</h1>
        <button onClick={() => navigate('/')} style={{ marginRight: '1rem' }}>App 1</button>
        <button onClick={() => navigate('/stuff')}>App 2</button>
      </nav>

      <main style={{ display: 'flex' }}>
        <div style={{ width: '64px', borderRight: '1px solid grey', height: 'calc(100vh - 64px)' }}>
          <div className="bg-red-500 text-white">
            Tailwind works
          </div>

        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<App1 />} />
            <Route path="/stuff" element={<App2 />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

const Shell: React.FC = () => {
  return (
    <Router>
      <ShellInner />
    </Router>
  );
};

export default Shell;