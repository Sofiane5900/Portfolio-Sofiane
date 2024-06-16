import React from 'react'
import { SiGithub } from 'react-icons/si';

export default function Navbar() {

  const socials = [
    {
      link: 'https://github.com/Sofiane5900',
      label: 'Github',
      icon: SiGithub,
    },
  ];

  return (
    <nav className ='container mx-auto py-10 flex justify-between items-center'>
      <h1 className='text-white text-2x1 font-bold underline 
      underline-offset-8 decoration-white-500 hover:scale-125 transition-all'>Sofiane Iguedjetal</h1>
      <div>
        {socials.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <a key={index} href={social.link} aria-label={social.label} className='text-white'>
              <IconComponent size={24} className='hover:scale-125 transition-all' />
            </a>
          );
        })}
      </div>
    </nav>
  )
}
