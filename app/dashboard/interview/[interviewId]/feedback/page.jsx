'use client';
import React, { useEffect, useState } from 'react';
import { db } from '../../../../../utils/db';
import { UserAnswers } from '../../../../../utils/schema';
import { eq } from 'drizzle-orm';

const Feedback = ({ params }) => {
  const [feedback, setFeedback] = useState([]);
  console.log(feedback);

  console.log(params);
  useEffect(() => {
    getFeedBack();
  }, []);
  const getFeedBack = async () => {
    const result = await db
      .select()
      .from(UserAnswers)
      .where(eq(UserAnswers.mockIdRef, params.interviewId))
      .orderBy(UserAnswers.id);
    console.log(result);
    setFeedback(result);
  };
  return (
    <div className='w-screen min-h-screen '>
      <div className='w-[50%] pt-[5rem] flex flex-col gap-4  mx-auto'>
        <h2 className='text-[#23bd57] text-3xl font-bold'>Congratulations!</h2>
        <h2 className='font-bold text-xl'>Here is your Interview Feedback</h2>
        <h2>Here your interview Rating</h2>
      </div>
      <div className='w-[50%] pt-[2rem] flex flex-col gap-4  mx-auto'>
        <h2>
          Find Below the interview Question and answer along with the feedback
          {feedback &&
            feedback.map((item, index) => {
              return (
                <div key={index} className='collapse '>
                  <input type='checkbox' />
                  <div className='collapse-title text-lg font-medium'>
                    <p>{item.question}</p>
                  </div>
                  <div className='collapse-content flex flex-col gap-6'>
                    <h2 className='text-[#d0474f] font-bold heading'>
                      Rating:{item.rating}
                    </h2>
                    <h2 className='heading'>
                      <strong>Your Answer:</strong>
                    </h2>
                    <p className=' px-2 py-3 rounded bg-[#fff9c4] '>
                      {item.userAns}
                    </p>
                    <h2 className='font-bold'>Correct Answer:</h2>
                    <p className='bg-[#c8e6c9] px-3 py-4 rounded '>
                      {item.correctAns}
                    </p>
                    <h2 className='font-bold heading'>Feedback:</h2>
                    <p className='px-3 py-4 rounded  bg-[#ffe6e6]'>
                      {item.feedback}
                    </p>
                  </div>
                </div>
              );
            })}
        </h2>
      </div>
    </div>
  );
};

export default Feedback;
