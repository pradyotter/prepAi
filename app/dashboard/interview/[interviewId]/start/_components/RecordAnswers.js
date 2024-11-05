'use client';
import React, { useEffect, useState } from 'react';
import useSpeechToTextext from 'react-hook-speech-to-text';
import toast from 'react-hot-toast';
import Webcam from 'react-webcam';
import { LuWebcam } from 'react-icons/lu';
import { chatSession } from '../../../../../../utils/GeminiAiModel';
import { db } from '../../../../../../utils/db';
import { UserAnswers } from '../../../../../../utils/schema';
import moment from 'moment';

const RecordAnswers = ({ activeQuestion, mockQuestions, interviewData }) => {
  const [userAnswer, setuserAnswer] = useState('');
  console.log(userAnswer);
  console.log(mockQuestions, activeQuestion);
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults,
  } = useSpeechToTextext({
    continuous: true,
    useLegacyResults: false,
  });
  const [webCamEnabled, setWebCamEnabled] = useState(false);

  const toggleWebCam = () => {
    setWebCamEnabled((prevEnabled) => !prevEnabled);
  };

  const saveUserAnswer = async () => {
    if (isRecording) {
      stopSpeechToText();
      if (userAnswer.length < 10) {
        toast.error('Failed to saved the recording.Try again');
        return;
      }
      const feedBackPrompt =
        'Qustions:' +
        mockQuestions[activeQuestion - 1].question +
        'Answers:' +
        userAnswer +
        'Depending on the questions and answers.Please Provide us rating for the answers given and also provide us with feedback as area of impovement if any ' +
        'in just 3 to 5 lines to improve it in JSON format with rating field and feedback field  ';
      const result = await chatSession.sendMessage(feedBackPrompt);
      const responseText = await result.response.text();
      const cleanedText = responseText
        .replace('```json', '')
        .replace('```', '');
      const mockResponse = JSON.parse(cleanedText);
      console.log(mockResponse);
      const database = await db.insert(UserAnswers).values({
        mockIdRef: interviewData?.mockId,
        question: mockQuestions[activeQuestion - 1]?.question,
        correctAns: mockQuestions[activeQuestion - 1]?.answer,
        userAns: userAnswer,
        feedback: mockResponse?.feedback,
        rating: mockResponse?.rating,
        createdAt: moment().format('DD-MM-yyyy'),
      });

      if (database) {
        toast.success('User Answer recorded Succesfully');
      }
      setResults([]);
    } else {
      startSpeechToText();
    }
  };
  useEffect(() => {
    results.map((result) => {
      setuserAnswer((prevAnswer) => prevAnswer + result?.transcript);
    });
  }, [results]);

  return (
    <div className='flex flex-col gap-8 justify-center items-center'>
      {!webCamEnabled && (
        <div className='bg-black px-10 py-10 rounded '>
          <LuWebcam color='white' size={150} />
        </div>
      )}

      {webCamEnabled && (
        <Webcam
          onUserMedia={() => setWebCamEnabled(true)}
          onUserMediaError={() => setWebCamEnabled(false)}
          mirrored={true}
          style={{ height: 300, width: '100%' }}
        />
      )}
      <button
        className='text-white bg-[#312fa0]  rounded px-3 py-1'
        onClick={toggleWebCam}
      >
        {webCamEnabled ? 'Turn Off Camera' : 'Turn On Camera'}
      </button>

      <button
        className='text-white bg-[#312fa0] rounded  px-3 py-1'
        onClick={saveUserAnswer}
      >
        {isRecording ? <h2>Recording....</h2> : 'Record Answer'}
      </button>
    </div>
  );
};

export default RecordAnswers;
