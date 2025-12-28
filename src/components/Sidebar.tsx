import { FC } from 'react';

const Sidebar: FC = () => {
  return (
    <div className='tw:w-[64px] tw:border-r tw:border-grey tw:h-[calc(100vh_-_64px)]'>
      <div className="tw:bg-orange-500 tw:text-white">
        Narfing
      </div>
      <div className="tw:bg-green-500 tw:text-white">
        Derping
      </div>
      <div className="tw:bg-blue-500 tw:text-white">
        Fecking
      </div>
    </div>
  );
};

export default Sidebar;
