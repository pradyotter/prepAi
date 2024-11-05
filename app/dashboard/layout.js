import React from 'react';
import Header from './_components/Header';
const DashBoardLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className='w-screen h-screen'>{children}</div>
    </div>
  );
};

export default DashBoardLayout;
