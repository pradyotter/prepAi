import React from 'react';
import AddInterview from './_components/AddInterview';
const DashBoard = () => {
  return (
    <div className=' dashboard h-screen w-screen '>
      <div className='  h-full  flex flex-col gap-5  items-center  overflow-y-auto'>
        <h2 className='mt-[8rem] text-4xl heading'>Interview with PrepAI</h2>
        <p className='paragraph md:text-center md:text-lg lg:text-xl  text-2xl'>
          Give a mock interview at tryouts and learn how PrepAi can assist you
          in preparation
        </p>
        <div>
          <AddInterview />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
