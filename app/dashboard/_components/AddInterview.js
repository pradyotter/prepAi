'use client';
import { useState } from 'react';
import { chatSession } from '../../../utils/GeminiAiModel';
import { db } from '../../../utils/db';
import { MockInterview } from '../../../utils/schema';
import { v4 as uuidv4 } from 'uuid';
import {
  Input,
  Textarea,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { useRouter } from 'next/navigation';

function AddInterview() {
  const [dialog, setDialog] = useState(false);
  const [jobRole, setJobRole] = useState('');
  const [jobDesc, setjobDesc] = useState('');
  const [jobExp, setJobExp] = useState('');
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState([]);
  const { user } = useUser();
  const router = useRouter();

  const handleDialog = () => {
    setDialog(!dialog);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const inputPrompt = `Job Position:${jobRole},Job Description:${jobDesc},Years of Experience:${jobExp},Depending on this information,please give me 5 interview Questions and answers in JSON format,Give Question and Answers in JSON format`;
    try {
      setLoading(true);
      const result = await chatSession.sendMessage(inputPrompt);
      const responseText = await result.response.text();
      console.log(responseText); // Get response text
      // Parse JSON from response text
      const cleanedText = responseText
        .replace('```json', '')
        .replace('```', '');
      const mockResponse = JSON.parse(cleanedText);
      setInfo(mockResponse);
      console.log('Mock Response:', mockResponse);
      if (mockResponse) {
        const resp = await db
          .insert(MockInterview)
          .values({
            mockId: uuidv4(),
            jsonMockResp: JSON.stringify(mockResponse),
            jobPostition: jobRole,
            jobExperiance: jobExp,
            jobDesc: jobDesc,
            createdBy: user['primaryEmailAddress'].emailAddress,
            createdAt: moment().format('DD-MM-yyyy'),
          })
          .returning({ mockId: MockInterview.mockId });
        console.log(resp);
        if (resp) {
          setDialog(false);
          console.log(
            'Redirecting to interview page with mockId:',
            resp[0]?.mockId
          );
          router.push(`dashboard/interview/${resp[0]?.mockId}`);
        }
        console.log('Inserted Id:', resp);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=''>
      {dialog && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='flex flex-col gap-2 w-[40%] justify-center  rounded-lg bg-gray-200  px-10 py-3'>
            <h1 className='text-black text-2xl font-bold heading  text-center'>
              Tell us more about your Job Interviewing
            </h1>

            <div className='flex flex-col gap-4 paragraph'>
              <h2 className=''>
                Add details about your job position/role , Job Description and
                years of Experiance
              </h2>
              <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                <div className='flex flex-col gap-3'>
                  <label>Job Role / Job Position</label>
                  <Input
                    className='rounded-xl px-2 py-2'
                    placeholder='Ex.Full Stack Developer'
                    size='md'
                    required
                    value={jobRole}
                    onChange={(e) => setJobRole(e.target.value)}
                  />
                </div>

                <div className='flex flex-col gap-3'>
                  <label>Job Description </label>
                  <Textarea
                    className='rounded-xl px-2 py-2'
                    minLength={15}
                    value={jobDesc}
                    onChange={(e) => setjobDesc(e.target.value)}
                    placeholder='Ex.Angular,React,NodeJs'
                    required
                  />
                </div>

                <div className='flex flex-col gap-3'>
                  <label>Years Of Experiance</label>
                  <NumberInput
                    defaultValue={15}
                    min={0}
                    max={20}
                    isRequired={true}
                    value={jobExp}
                    onChange={(valueString, valueNumber) =>
                      setJobExp(valueString)
                    }
                  >
                    <NumberInputField
                      placeholder='Ex.5'
                      className='px-3 py-2 rounded'
                    />
                    <NumberInputStepper>
                      <NumberIncrementStepper style={{ fontSize: '12px' }} />
                      <NumberDecrementStepper style={{ fontSize: '12px' }} />
                    </NumberInputStepper>
                  </NumberInput>
                </div>
                <div className='flex gap-4 py-2 justify-end'>
                  <button onClick={handleDialog}>Cancel</button>
                  <button type='submit'>
                    {loading ? (
                      <span className='loader'></span>
                    ) : (
                      'Start Interview'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      <h1 className='text-xl' onClick={handleDialog}>
        +Add new
      </h1>
    </div>
  );
}

export default AddInterview;
