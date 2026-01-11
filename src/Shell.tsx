// const RO = window.ResizeObserver;
// if (RO && !(window as any).__RO_PATCHED__) {
//   (window as any).__RO_PATCHED__ = true;

//   window.ResizeObserver = class extends RO {
//     constructor(cb: ResizeObserverCallback) {
//       const createdAt = new Error("[RO] created here").stack;

//       super((entries, observer) => {
//         console.log(createdAt); // <-- points to the library/component that constructed it
//         console.log("[RO] targets:", entries.map(e => e.target));
//         cb(entries, observer);
//       });
//     }
//   };
// }

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