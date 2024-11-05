import Link from 'next/link';
import React from 'react';

const Resources = () => {
  return (
    <div className='resources w-screen min-h-screen '>
      <h2 className='text-center  font-bold heading text-4xl pt-[2rem]'>
        Resources
      </h2>
      <div className='grid lg1:grid-rows-3 lg1:grid-cols-2 grid-rows-2 grid-cols-3 gap-1 '>
        <div className=' w-[60%]  py-[5rem] mx-auto flex flex-col gap-4   '>
          <h3 className='heading font-semibold text-[1.5rem]'>
            Interview Preparation Guides
          </h3>
          <Link href='https://www.interviewcake.com'>
            <p className='paragraph text-lg '>
              Technical Interview Guide - Interview Cake
            </p>
          </Link>
          <Link href='https://biginterview.com/behavioral-interview-questions'>
            <p className='paragraph text-lg'>Behavioral Interview Guide</p>
          </Link>
          <Link href='https://managementconsulted.com/case-interview-prep/'>
            <p className='paragraph text-lg'>Case Interview Guide</p>
          </Link>
        </div>

        <div className=' w-[60%]  py-[5rem] mx-auto flex flex-col gap-4   '>
          <h3 className='heading font-semibold text-[1.5rem]'>
            Study Materials
          </h3>
          <Link href='https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850'>
            <p className='paragraph text-lg '>Cracking the Coding Interview</p>
          </Link>
          <Link href='https://www.geeksforgeeks.org/fundamentals-of-algorithms/'>
            <p className='paragraph text-lg'>Fundamentals of Algorithms</p>
          </Link>
          <Link href='https://www.coursera.org/specializations/python'>
            <p className='paragraph text-lg'>Python for Everybody</p>
          </Link>
        </div>

        <div className=' w-[60%]  py-[5rem] mx-auto flex flex-col gap-4   '>
          <h3 className='heading font-semibold text-[1.5rem]'>
            Practice Problems
          </h3>
          <Link href='https://leetcode.com'>
            <p className='paragraph text-lg '>LeetCode</p>
          </Link>
          <Link href='https://www.hackerrank.com'>
            <p className='paragraph text-lg'>HackerRank</p>
          </Link>
          <Link href='https://www.codewars.com'>
            <p className='paragraph text-lg'>Codewars</p>
          </Link>
        </div>

        <div className=' w-[60%]  py-[5rem] mx-auto flex flex-col gap-4   '>
          <h3 className='heading font-semibold text-[1.5rem]'>
            Tutorials and Videos
          </h3>
          <Link href='https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ'>
            <p className='paragraph text-lg '>FreeCodeCamp</p>
          </Link>
          <Link href='https://www.coursera.org/courses?query=web%20development'>
            <p className='paragraph text-lg'>Web Development Courses</p>
          </Link>
        </div>

        <div className=' w-[60%]  py-[5rem] mx-auto flex flex-col gap-4   '>
          <h3 className='heading font-semibold text-[1.5rem]'>
            Industry News and Trends
          </h3>
          <Link href='https://techcrunch.com'>
            <p className='paragraph text-lg '>TechCrunch</p>
          </Link>
          <Link href='https://news.ycombinator.com'>
            <p className='paragraph text-lg'>Hacker News</p>
          </Link>
          <Link href='https://www.reddit.com/r/programming/'>
            <p className='paragraph text-lg'>Reddit Programming</p>
          </Link>
        </div>

        <div className=' w-[60%]  py-[5rem] mx-auto flex flex-col gap-4   '>
          <h3 className='heading font-semibold text-[1.5rem]'>
            Templates and Examples
          </h3>
          <Link href='https://novoresume.com/career-blog/software-engineer-resume-example'>
            <p className='paragraph text-lg '>
              Software Engineer Resume Example
            </p>
          </Link>
          <Link href='https://zety.com/blog/software-developer-cover-letter-example'>
            <p className='paragraph text-lg'>
              Software Developer Cover Letter Example
            </p>
          </Link>
          <Link href='https://www.coursera.org/articles/portfolio-examples'>
            <p className='paragraph text-lg'>Portfolio Examples</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Resources;
