import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Avatar from '../../../public/avatar-sofiane.png';

export default function Hero() { 
  return (
    <div className='container mx-auto min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between'>
      <div className='space-y-10 text-center lg:text-left'>
        <h1 className='text-white text-4xl lg:text-5xl font-bold'>
          Nice to meet you 👋
          <br />
          <span className='underline underline-offset-8'>{"I'm Sofiane"}</span>
        </h1>
          <p className='text-gray-200 md:w-96 text-lg'>
      {"Based in France, I'm a Front-End Developer with a passion for building beautiful and accessible websites. I followed an Openclassroom front-end course for 9 months."}
          </p>

          <Link href='#projects' className='inline-block' scroll={true}>  
          <button className="shadow-[inset_0_0_0_2px_#616467] text-white px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent
             hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
            My Projects →
          </button>
        </Link>
      </div>

      <div className="flex items-center justify-center space-y-3">
        <div className="w-2 h-72 glow bg-black rounded-full flex items-center justify-center">
          <div className="w-18 h-18"></div>
          <Image src={Avatar} alt="icon-code" className="rounded-full" />
    
        </div>
      </div>
    </div>
  );
}
