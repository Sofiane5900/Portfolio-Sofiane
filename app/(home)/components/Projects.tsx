import React from 'react';
import { SiHtml5, SiJavascript, SiMongodb, SiReact, SiRedux, SiSass, SiCss3 } from 'react-icons/si';
import Title from './Title';
import Link from 'next/link';
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';

export default function Projects() {
  const projects = [
    {
        title: 'ArgentBank',
        description: 'Banking app simulation using Redux and MongoDB.',
        tech: [SiHtml5, SiCss3, SiReact, SiRedux, SiMongodb],
        link: 'https://github.com/Sofiane5900/ArgentBankFront',
        image: '/argentbank-banner.png',
        background: 'bg-neutral-800'
    },

    {
        title: 'Kasa',
        description: 'Location finder website built with React and SCSS.',
        tech: [SiHtml5, SiSass, SiReact],
        link: 'https://github.com/Sofiane5900/Kasa',
        image: '/kasa-banner.png',
        background: 'bg-neutral-800'
    },

    {
        title: 'Portfolio Sophie Bluel',
        description: 'JavaScript portfolio for Sophie Bluel.',
        tech: [SiHtml5, SiCss3, SiJavascript],
        link: 'https://github.com/Sofiane5900/Sophie-Bluel-Portfolio',
        image: '/sophie-bluel-banner.png',
        background: 'bg-neutral-800'
    },

    {
        title: 'Ohmyfood',
        description: 'Restaurant ordering website using SCSS.',
        tech: [SiHtml5, SiSass],
        link: 'https://github.com/Sofiane5900/Ohmyfood',
        image: '/ohmyfood-banner.png',
        background: 'bg-neutral-800'
    }
];


  return (
    <div id='projects' className='py-10 p-5 sm:p-0'>
      <Title text='Projects' className='text-white flex flex-col items-center py-10 text-3xl font-bold underline underline-offset-8' />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => (
          <Link href={project.link} key={index}>
            <div className={cn("p-5 rounded-md relative overflow-hidden", project.background)}>
              <DirectionAwareHover imageUrl={project.image} className='w-full space-y-5 cursor-pointer'>
                <h1 className="text-white text-2xl font-bold">{project.title}</h1>
                <p className="text-white text-sm">{project.description}</p>
                <div className="flex space-x-2 mt-2">
                  {project.tech.map((TechIcon, i) => (
                    <TechIcon key={i} className="text-white w-8 h-8" />

                    
                  ))}


                </div>
              </DirectionAwareHover>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
