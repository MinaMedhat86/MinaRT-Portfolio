import { AboutInfoType } from '@/lib/typs';
import React, { Fragment } from 'react';

export default function AboutResume() {
  const about: AboutInfoType = {
    name: 'About Me',
    description:
      'I am a passionate Frontend Engineer with experience in creating dynamic and responsive websites. I specialize in front-end development using React and Next.js, and I am always eager to learn new technologies and improve my skills. My goal is to build user-friendly and visually appealing web applications that provide an excellent user experience.',
    info: [
      {
        id: crypto.randomUUID(),
        title: 'Name',
        value: 'Mina Medhat RT',
      },
      {
        id: crypto.randomUUID(),
        title: 'Phone',
        value: '+20 1125994899',
      },
      { id: crypto.randomUUID(), title: 'Experience', value: '+3 Years' },
      {
        id: crypto.randomUUID(),
        title: 'Address',
        value: 'Cairo, Egypt',
      },
      {
        id: crypto.randomUUID(),
        title: 'Email',
        value: 'minamidhat15@gmail.com',
      },

      { id: crypto.randomUUID(), title: 'Freelance', value: 'Available' },
      {
        id: crypto.randomUUID(),
        title: 'Languages',
        value: 'Arabic, English',
      },
    ],
  };
  return (
    <>
      <div className='flex flex-col gap-[30px] text-center lg:text-left lg:min-h-[600px]'>
        <h3 className='text-4xl font-bold'>{about.name}</h3>
        <p className='max-w-[800px] text-white/60 mx-auto lg:mx-0'>
          {about.description}
        </p>
        {/* <ScrollArea className='h-[370px] '> */}
        <ul className='grid gap-[30px] grid-cols-1 lg:grid-cols-2 bg-[#232329] ps-4 lg:py-10 py-5  rounded-2xl'>
          {about.info.map((item) => {
            return <Fragment key={item.id}>
                <li className='flex justify-start items-center gap-5'>
                    <span className='text-white/60'>{item.title}:</span>
                    <span className='text-xl'>{item.value}</span>
                </li>
            </Fragment>;
          })}
        </ul>
        {/* </ScrollArea> */}
      </div>
    </>
  );
}
