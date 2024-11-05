'use client';
import React, { useEffect, useState } from 'react';
import { db } from '../../../../utils/db';
import { MockInterview } from '../../../../utils/schema';
import { eq } from 'drizzle-orm';
import Webcam from 'react-webcam';
import { RiWebcamFill } from 'react-icons/ri';
import { FaRegLightbulb } from 'react-icons/fa';
import Link from 'next/link';

const Interview = ({ params }) => {
  const [interviewData, setInterviewData] = useState(null);
  const [webCamEnabled, setWebCamEnabled] = useState(false);
  console.log(interviewData);
  useEffect(() => {
    getInterviewDetails();
  }, [params.interviewId]);

  const getInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, params.interviewId));
    setInterviewData(result[0]);
  };

  return (
    <div className=' interviewPage h-screen w-screen flex gap-8  flex-col  items-center'>
      <h2 className='mt-10 heading text-2xl font-semibold'>
        Lets get started{' '}
      </h2>
      {/* 
      <div>
        {webCamEnabled ? (
          <Webcam
            onUserMedia={() => setWebCamEnabled(true)}
            onUserMediaError={() => setWebCamEnabled(false)}
            mirrored={true}
            style={{ height: 300, width: 300 }}
          />
        ) : (
          <>
            <RiWebcamFill />
            <button onClick={() => setWebCamEnabled(true)}>
              Enable Webcam and microphone
            </button>
          </>
        )}
      </div> */}
      {interviewData && (
        <div className='flex flex-col items-center w-[50%] gap-6 paragraph border border-gray-300 rounded px-[4rem] py-[2rem]'>
          <h2>
            <strong>Job Role/Position:</strong>
            {interviewData.jobPostition}
          </h2>
          <h2>
            <strong>Job Description:</strong>
            {interviewData.jobDesc}
          </h2>
          <h2>
            <strong>Years of Experience:</strong>
            {interviewData.jobExperiance}
          </h2>
        </div>
      )}
      <div className=' w-[50%] '>
        <div className=' border flex flex-col rounded gap-5   border-gray-300 bg-[#fcf6ba]  px-[2rem] py-[1rem]'>
          <div className='flex items-center gap-4 '>
            <FaRegLightbulb color='#493A09' />
            <p className='text-[#493A09] text-sm'>Imformation</p>
          </div>
          <p className='text-[#493A09] text-sm'>
            Enable Video Web Cam and Microphone to Start your Al Generated Mock
            Interview, It Has 5 question which you can answer and at the last
            you will get the report on the basis of your answer. NOTE: We never
            record your video, Web cam access you can disable at any time if you
            want
          </p>
        </div>
      </div>

      <div>
        <Link href={`/dashboard/interview/${params.interviewId}/start`}>
          <button className='bg-[#3130a1] rounded text-white px-2 py-3'>
            Start Interview
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Interview;
