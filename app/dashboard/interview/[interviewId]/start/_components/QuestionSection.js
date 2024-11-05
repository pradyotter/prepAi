import React from 'react';
import useSpeechToText from 'react-hook-speech-to-text';
import { RxSpeakerLoud } from 'react-icons/rx';
import { FaRegLightbulb } from 'react-icons/fa';
const QuestionSection = ({
  mockQuestions,
  activeQuestion,
  setActiveQuestion,
}) => {
  const selectQuestion = (index) => {
    setActiveQuestion(index + 1);
  };

  const texttoSpeech = (text) => {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      alert('Sorry your browser doesnot support text to sppech');
    }
  };
  return (
    <div className='p-5 border rounded-lg'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {mockQuestions &&
          mockQuestions.map((question, index) => {
            return (
              <div key={index}>
                <h2
                  onClick={() => selectQuestion(index)}
                  className={`cursor-pointer p-2 text-center rounded-full bg-[#f3f3f3] ${
                    activeQuestion === index + 1
                      ? 'text-white bg-[#403cc8] '
                      : 'text-black'
                  }`}
                >
                  Questions:{index + 1}
                </h2>
              </div>
            );
          })}
      </div>
      {mockQuestions[activeQuestion - 1] && (
        <div className='my-8 text-sm md:text-lg flex flex-col gap-6 '>
          <h2>{mockQuestions[activeQuestion - 1].question}</h2>
          <div className='border flex flex-col gap-5 mt-3 rounded-lg px-3 py-2 bg-blue-100'>
            <h2 className='flex  items-center gap-3 text-sm'>
              <FaRegLightbulb color='#3d3fc1' />
              <strong className='text-[#3d3fc1]'>Note:</strong>
            </h2>
            <h2 className='text-sm text-[#7581bc]'>
              Click on Record Answer when you want to answer the question. At
              the end of interview we will give you the feedback along with
              correct answer for each of question and your answer to compare it.
            </h2>
          </div>
          <div>
            <RxSpeakerLoud
              onClick={() =>
                texttoSpeech(mockQuestions[activeQuestion - 1].question)
              }
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionSection;
