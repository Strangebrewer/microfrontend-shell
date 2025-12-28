import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BaseRouter } from './BaseRouter';

const Shell: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* separate this into a header component */}
      <nav style={{ borderBottom: '2px solid #ccc', height: '64px' }}>
        <h1>Microfrontend Shell</h1>
        <button onClick={() => navigate('/')} style={{ marginRight: '1rem' }}>App 1</button>
        <button onClick={() => navigate('/stuff')}>App 2</button>
      </nav>

      <main style={{ display: 'flex' }}>
        {/* separate this into a sidebar component */}
        <div style={{ width: '64px', borderRight: '1px solid grey', height: 'calc(100vh - 64px)' }}>
          <div className="bg-red-500 text-white">
            Tailwind works
          </div>
        </div>

        <BaseRouter />
      </main>
    </div>
  );
};

export default Shell;