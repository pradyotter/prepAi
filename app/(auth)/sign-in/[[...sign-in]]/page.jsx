import { SignIn } from '@clerk/nextjs';
import { BsMic } from 'react-icons/bs';
export default function Register() {
  return (
    <div className=' h-screen w-screen flex justify-evenly items-center'>
      <div className='bg-[#9b77d7] h-full w-[50%] max-w-[50%] flex items-center  justify-center'>
        <div className='flex items-center gap-3'>
          <div className='border-4 border-[#FFFF] rounded-full  px-3 py-3'>
            <BsMic color='white' size={25} />
          </div>

          <h1 className='heading text-white text-4xl tracking-widest'>
            PrepAi
          </h1>
        </div>
      </div>
      <div className='w-[50%] max-w-[50%] flex justify-center '>
        <SignIn />
      </div>
    </div>
  );
}
