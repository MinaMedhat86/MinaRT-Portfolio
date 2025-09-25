import React, { Fragment } from 'react';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact } from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMui,
  SiShadcnui,
} from 'react-icons/si';
import { DiGit } from 'react-icons/di';
import { skillsType } from '@/lib/typs';
import { ScrollArea } from '@/components/ui/scroll-area';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
export default function SkillsResume() {
  const skills: skillsType = {
    title: 'My Skills',
    description:
      'Here are some of the technologies and tools I have worked with:',
    items: [
      { id: crypto.randomUUID(), icon: <FaHtml5 />, name: 'HTML5' },
      { id: crypto.randomUUID(), icon: <FaCss3Alt />, name: 'CSS3' },
      { id: crypto.randomUUID(), icon: <FaBootstrap />, name: 'Bootstrap' },
      {
        id: crypto.randomUUID(),
        icon: <SiTailwindcss />,
        name: 'Tailwind CSS',
      },
      { id: crypto.randomUUID(), icon: <FaJs />, name: 'JavaScript' },
      { id: crypto.randomUUID(), icon: <SiTypescript />, name: 'TypeScript' },
      { id: crypto.randomUUID(), icon: <FaReact />, name: 'React' },
      { id: crypto.randomUUID(), icon: <SiNextdotjs />, name: 'Next.js' },
      { id: crypto.randomUUID(), icon: <SiMui />, name: 'MUI' },
      { id: crypto.randomUUID(), icon: <SiShadcnui />, name: 'Shadcn UI' },
      { id: crypto.randomUUID(), icon: <DiGit />, name: 'Git' },
    ],
  };
  return (
    <>
      <div className='flex flex-col gap-[30px] text-center lg:text-left lg:min-h-[600px]'>
        <h3 className='text-4xl font-bold'>{skills.title}</h3>
        <p className='max-w-[800px] text-white/60 mx-auto lg:mx-0'>
          {skills.description}
        </p>
<ScrollArea className='h-[430px] '>
        <ul className='grid gap-[30px] grid-cols-2 lg:grid-cols-4 md:grid-col-3 lg:mb-10'>
          {skills.items.map((item) => {
            return (
              <Fragment key={item.id}>
                <li>
                  <Tooltip>
                    <TooltipTrigger className='w-full h-[150px] flex justify-center items-center bg-[#232329] rounded-xl group'>
                      <div className='text-6xl transition-all group-hover:text-accent duration-300 '>
                        {item.icon}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className='border border-white hover:text-accent  duration-300 transition-all'>
                      <p>{item.name}</p>
                    </TooltipContent>
                  </Tooltip>
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
