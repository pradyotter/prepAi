'use client';
import Link from 'next/link';
import { easeInOut, motion } from 'framer-motion';

export default function Home() {
  const title = 'PrepAi - Turbocharge Your Interview Success!';
  const words = title.split(' ');

  return (
    <main className=' homepage h-screen w-screen   overflow-x-hidden'>
      <div className='w-[70%] flex mt-[6rem] flex-col gap-[5rem] mx-auto'>
        <div className='mb-6'>
          <h1 className='heading text-center tracking-wider text-5xl font-bold'>
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.3,
                  ease: easeInOut,
                }}
                className='inline-block mr-2'
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </div>
        {/* Parent container for the elements that should be in a column */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className='flex justify-evenly  '
        >
          <div className='w-[30%] max-w-[30%]'>
            <h2 className='paragraph text-2xl capitalize font-[500]'>
              All-In-One-AI Interview platform
            </h2>
          </div>
          <div className='flex flex-col gap-8 w-[60%] max-w-[60%]'>
            <div>
              <p className='paragraph font-semi-bold text-[1.1rem] text-[#333333]'>
                Join PrepAi today and transform your interview prep with
                personalized questions, insightful feedback, and a
                confidence-boosting readiness score. Let&apos;s get you that
                dream job!
              </p>
            </div>
            <div>
              <Link href='dashboard'>
                <button className='paragraph text-white bg-[#18b087] px-4 py-1 rounded-full'>
                  Join Now
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.section
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 3 }}
        className='mt-[6rem] w-full flex flex-col gap-6   '
      >
        <h1 className='heading text-center capitalize text-[2.5rem] tracking-wider font-medium'>
          Transforming hiring through innovation{' '}
        </h1>
        <p className='paragraph text-center text-[1.1rem] mx-auto w-[70%]'>
          Our innovative approach to interview preparation harnesses AI
          technology to personalize your experience, providing tailored
          questions and detailed feedback for optimal performance. Prepare
          smarter, perform better, and achieve your career goals with ease.
        </p>
        <div></div>
      </motion.section>
      {/* <Link href='dashboard'>Join Now</Link> */}
    </main>
  );
}
