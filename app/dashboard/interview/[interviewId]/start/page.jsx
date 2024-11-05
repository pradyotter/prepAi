'use client';
import React, { useEffect, useState } from 'react';
import { db } from '../../../../../utils/db';
import { MockInterview } from '../../../../../utils/schema';
import { eq } from 'drizzle-orm';
import QuestionSection from './_components/QuestionSection';
import RecordAnswers from './_components/RecordAnswers';
import Link from 'next/link';

const Start = ({ params }) => {
  const [interviewData, setInterviewData] = useState(null);

  const [mockQuestions, setmockQuestions] = useState([]);
  const [activeQuestion, setActiveQuestion] = useState(0);
  console.log(interviewData);
  console.log(mockQuestions);
  useEffect(() => {
    getInterviewDetails();
  }, []);

  const getInterviewDetails = async () => {
    try {
      const result = await db
        .select()
        .from(MockInterview)
        .where(eq(MockInterview.mockId, params.interviewId));

      setInterviewData(result[0]);
      const jsonMockResp = result[0].jsonMockResp;

      // Parse the JSON array string
      const response = JSON.parse(jsonMockResp);
      //  console.log('Parsed Response:', response);
      setmockQuestions(response);
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  };

  return (
    <div className='interviewPage min-h-screen mt-3'>
      <div className='  grid px-6 gap-3 justify-items-center grid-cols-1 md:grid-cols-2'>
        <QuestionSection
          activeQuestion={activeQuestion}
          setActiveQuestion={setActiveQuestion}
          mockQuestions={mockQuestions}
        />
        <RecordAnswers
          activeQuestion={activeQuestion}
          mockQuestions={mockQuestions}
          interviewData={interviewData}
        />
      </div>
      <div className='flex justify-center mt-[6rem]   '>
        <Link href={`/dashboard/interview/${interviewData?.mockId}/feedback`}>
          <button className='bg-[#050406] rounded text-white px-2 py-3'>
            End Interview
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Start;
