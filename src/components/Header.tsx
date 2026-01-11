import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginModal from './LoginModal';

const Header: FC = () => {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <nav className='tw:border tw:border-[#ccc] tw:h-[64px] tw:flex tw:justify-between'>
      <h1>Microfrontend Shell</h1>
      <div>
        <button className='tw:mr-[1rem]' onClick={() => navigate('/')}>App 1</button>
        <button onClick={() => navigate('/stuff')}>App 2</button>
      </div>
      <button
        className='tw:mr-[16px]'
        onClick={() => setShowLoginModal(!showLoginModal)}
      >{showLoginModal ? 'Close' : 'Login'}</button>
      {showLoginModal && <LoginModal close={() => setShowLoginModal(false)} />}
    </nav>
  );
};

export default Header;
