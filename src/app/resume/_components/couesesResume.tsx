import React, { Fragment } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { courcesType } from '@/lib/typs';

export default function CourseseResume() {


  const cources: courcesType = {
    icon: '',
    title: 'Cources & Certifications',
    description:
      'I have completed several courses and certifications to enhance my skills and stay updated with the latest industry trends. These courses have helped me gain a deeper understanding of web development concepts and best practices.',
    items: [
      {
        id: crypto.randomUUID(),
        inistitution: 'Elevate Tech',
        degree: 'Frontend Development Bootcamp',
        duration: 'Feb 2025 - Jul 2025',
      },
      {
        id: crypto.randomUUID(),
        inistitution: 'Upskilling Academy',
        degree: 'Advanced Frontend Developer (React & Next JS)',
        duration: 'Sep 2024 - Des 2024',
      },
      {
        id: crypto.randomUUID(),
        inistitution: 'Route Academy',
        degree: 'Frontend Development Diploma (React & React Native)',
        duration: '',
      },
      {
        id: crypto.randomUUID(),
        inistitution: 'NewHorizon Academy',
        degree: 'Frontend Developer (Without Framework)',
        duration: 'NewHorizon Academy',
      },
    ],
  };

  return (
    <>
      <div className='flex flex-col gap-[30px] text-center lg:text-left lg:min-h-[600px]'>
        <h3 className='text-4xl font-bold'>{cources.title}</h3>
        <p className='max-w-[800px] text-white/60 mx-auto lg:mx-0'>
          {cources.description}
        </p>
        <ScrollArea className='h-[370px] '>
          <ul className='grid gap-[30px] grid-cols-1 lg:grid-cols-2'>
            {cources.items.map((item) => {
              return (
                <Fragment key={item.id}>
                  <li className='flex flex-col items-center justify-center lg:items-start gap-1 bg-[#232329] py-6 px-10 rounded-xl'>
                    <span className='text-accent'>{item.duration}</span>
                    <h3 className='text-center lg:text-left text-xl max-w-[260px] min-h-[80px]'>
                      {item.degree} 
                    </h3>
                    <div className='flex items-center gap-3'>
                      <span className=' rounded-full bg-accent h-[6px] w-[6px]'></span>
                      <p className='text-white/60'>{item.inistitution}</p>
                    </div>
                  </li>
                </Fragment>
              );
            })}
          </ul>
        </ScrollArea>
      </div>
    </>
  );
}
