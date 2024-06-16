"use client"
import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/cards-hover'
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiMongodb} from 'react-icons/si'
import { FaSass } from "react-icons/fa";





export default function Skills() {

    const skills = [

        {
            text: 'HTML',
            Icon: SiHtml5
        },
        {
            text: 'CSS',
            Icon: SiCss3
        },

        {
            text: 'JavaScript',
            Icon: SiJavascript
        },

        {
            text: 'React',
            Icon: SiReact
        },

        {
            text: 'MongoDB',
            Icon: SiMongodb
        },

        {
            text: 'Sass',
            Icon: FaSass
        }
    ]
  return (
    <div className='container mx-auto max-w-5xl px-8'>
        <div>
            <Title text='Skills' className='text-white flex flex-col items-center'></Title>

            <HoverEffect items={skills}/>;
            

        </div>
    </div>
  )
}
