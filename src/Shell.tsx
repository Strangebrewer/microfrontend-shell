import { FC } from 'react';
import { BaseRouter } from './BaseRouter';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const Shell: FC = () => {
  return (
    <div className='tw:border tw:border-[red]'>
      <Header />

      <div className='tw:flex'>
        <Sidebar />
        <main className='tw:grow'>
          <BaseRouter />
        </main>
      </div>
    </div>
  );
};

export default Shell;