'use client';
import React from 'react';
import { UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
// /dashboard/resources
const Header = () => {
  const path = usePathname();
  console.log(path);
  return (
    <div
      className={
        path === '/dashboard'
          ? 'dashboard flex justify-evenly items-center py-4'
          : path === '/dashboard/about'
          ? 'aboutUsPage flex justify-evenly items-center py-4'
          : path === '/dashboard/resources'
          ? 'resources flex justify-evenly items-center py-4'
          : 'flex justify-evenly items-center py-4'
      }
    >
      <Image
        src={'/img1.jpeg'}
        alt='img1'
        height={40}
        width={40}
        className='rounded-full'
      />
      <div className='links flex gap-8'>
        <Link href={'/dashboard'}>
          <h2
            className={`text-bold heading ${
              path === '/dashboard' ? 'text-[#5e58bb]' : ' text-black'
            }`}
          >
            Home
          </h2>
        </Link>

        <Link href={'/dashboard/about'}>
          <h2>About Us:</h2>
        </Link>
        <Link href={'/dashboard/resources'}>
          <h2>Resources:</h2>
        </Link>
      </div>
      <div>
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
