import { ExperiencesType } from '@/lib/typs';
import React, { Fragment } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function ExperienceResume() {
  const experiences: ExperiencesType = {
    icon: '',
    title: 'My experiences',
    description:
      'I have experience building projects from small websites to large-scale applications, with skills in teamwork, responsive design, performance optimization, Git, and web best practices.',
    items: [
      {
        id: crypto.randomUUID(),
        company: 'SB Technology',
        position: 'Frontend Engineer',
        location: 'New Cairo, Egypt',
        duration: 'June 2025 - Present',
      },
      {
        id: crypto.randomUUID(),
        company: ' Jiwa Developments (Part-time)',
        position: 'Web Developer',
        location: 'The 5th Settlement, Egypt',
        duration: 'Jan 2025 - Present',
      },
      {
        id: crypto.randomUUID(),
        company: 'CMG Holding',
        position: 'Frontend Developer',
        location: 'The 5th Settlement, Egypt',
        duration: 'July 2024 - June 2025',
      },
      {
        id: crypto.randomUUID(),
        company: ' Multi Sync (Part-time)',
        position: 'Frontend Developer',
        location: 'Calefornia, USA (Remote)',
        duration: 'Aug 2024 - Oct 2024',
      },
      {
        id: crypto.randomUUID(),
        company: 'Nahdet Misr Publishing Group',
        position: 'technical support',
        location: 'Kafer El-Sheikh, Egypt',
        duration: 'Oct 2023 - June 2024',
      },
      {
        id: crypto.randomUUID(),
        company: 'Egyptian Armed Forces',
        position: 'Reserve Officer (Batch 160 )',
        location: 'Salum, Egypt',
        duration: 'May 2021 - Oct 2023',
      },
      {
        id: crypto.randomUUID(),
        company: 'Al-Zarkaa Company',
        position: 'Web Developer',
        location: 'Kafer El-Sheikh, Egypt',
        duration: 'Oct 2020 - Apr 2021',
      },
    ],
  };

  return (
    <>
      <div className='flex flex-col gap-[30px] text-center lg:text-left lg:min-h-[600px]'>
        <h3 className='text-4xl font-bold'>{experiences.title}</h3>
        <p className='max-w-[800px] text-white/60 mx-auto lg:mx-0'>
          {experiences.description}
        </p>
        <ScrollArea className='h-[370px] '>
          <ul className='grid gap-[30px] grid-cols-1 lg:grid-cols-2'>
            {experiences.items.map((item) => {
              return (
                <Fragment key={item.id}>
                  <li className='flex flex-col items-center justify-center lg:items-start gap-1 bg-[#232329] py-6 px-10 rounded-xl'>
                    <span className='text-accent'>{item.duration}</span>
                    <h3 className='text-center lg:text-left text-xl max-w-[260px] min-h-[75px]'>
                      {item.position} | <br/> <span className='text-sm'> {item.location}</span> 
                    </h3>
                    <div className='flex items-center gap-3'>
                      <span className=' rounded-full bg-accent h-[6px] w-[6px]'></span>
                      <p className='text-white/60'>{item.company}</p>
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
