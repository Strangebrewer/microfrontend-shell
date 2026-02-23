import { FC } from 'react';
import { BaseRouter } from './BaseRouter';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const Shell: FC = () => {
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