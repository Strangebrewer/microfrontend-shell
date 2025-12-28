import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const Header: FC = () => {
  const navigate = useNavigate();
  
  return (
    <nav className='tw:border tw:border-[#ccc] tw:h-[64px]'>
      <h1>Microfrontend Shell</h1>
      <button onClick={() => navigate('/')} style={{ marginRight: '1rem' }}>App 1</button>
      <button onClick={() => navigate('/stuff')}>App 2</button>
    </nav>
  );
};

export default Header;
