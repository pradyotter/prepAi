'use client';
import React from 'react';
import { LuFormInput } from 'react-icons/lu';
import { MdArticle } from 'react-icons/md';
import { FaBrain } from 'react-icons/fa';
import { SiAnswer } from 'react-icons/si';
const About = () => {
  return (
    <div className='aboutUsPage h-screen w-screen overflow-hidden'>
      <div className=' flex flex-col items-center gap-[5rem] py-[4rem] justify-center'>
        <h2 className=' heading text-3xl capitalize'>How Does it Works ?</h2>
        <p className='py-4 paragraph text-md font-light'>
          Welcome to PrepAI! Our platform is designed to provide you with a
          seamless and effective interview preparation experience.
        </p>
        <div className='flex gap-8 xl:grid grid-cols-2   w-[80%] items-center paragraph'>
          <div className='flex flex-col gap-[2rem] justify-center items-center '>
            <LuFormInput size={35} />
            <p className='italic text-md '> Input Your Details</p>
            <p className='inline-block text-md bg-black text-sm text-white px-2 py-1 rounded'>
              Step 1
            </p>
            <p className='text-sm font-bold'>
              Begin by filling out our simple form with the following
              information: Job Role/Position, Programming Languages Years of
              Experience in the field.
            </p>
          </div>
          <div className='flex flex-col justify-center gap-[2rem] items-center'>
            <MdArticle size={35} />
            <p className='italic text-md '>
              {' '}
              Generate Customized Interview Questions
            </p>
            <p className='bg-black text-sm text-white px-2 py-1 rounded'>
              Step 2
            </p>
            <p className='text-sm font-bold'>
              Based on the details you provide, PrepAI generates a set of
              interview questions tailored specifically to your job role and
              experience level.{' '}
            </p>
          </div>
          <div className='flex flex-col gap-[2rem] items-center'>
            <SiAnswer size={35} />
            <p className='italic text-md '> Practice Your Responses</p>
            <p className='bg-black text-sm text-white px-2 py-1 rounded'>
              Step 3
            </p>
            <p className='text-sm font-bold'>
              Record Your Answers: Use your microphone to record your answers to
              the interview questions.
            </p>
          </div>
          <div className='flex flex-col gap-[2rem] items-center'>
            <FaBrain size={35} />
            <p className='italic text-md '> Receive AI-Powered Feedback</p>
            <p className='bg-black text-sm text-white px-2 py-1 rounded'>
              Step 4
            </p>
            <p className='text-sm font-bold'>
              After you’ve recorded your responses, our advanced AI technology
              analyzes your performance and provides detailed feedback:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
