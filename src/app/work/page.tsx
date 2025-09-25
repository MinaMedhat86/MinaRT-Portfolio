'use client';
import { projectsType } from '@/lib/typs';
import React, { Fragment, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { GoArrowUpRight } from 'react-icons/go';
import { FaGithub } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperClass } from 'swiper/types';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import SwiperArrows from './_components/swiperArrows';

export default function Work() {
  const projects: projectsType[] = [
    // Jiwa developments
    {
      id: crypto.randomUUID(),
      num: '01',
      category: 'Fullstack',
      title: 'Jiwa Developments',
      description:
        'Jiwa is more than a name, it is the soul of innovation. We have launched a number of projects that are located in more than one dynamic area in the Fifth Settlement and Sheikh Zayed. We consider each project a challenge.',
      stack: [
        { id: crypto.randomUUID(), name: 'React.js' },
        { id: crypto.randomUUID(), name: 'MUI' },
        { id: crypto.randomUUID(), name: 'Tailwind CSS' },
      ],
      image: '/assests/images/works/jiwa.png',
      live: 'https://jiwadevelopment.com/',
      github: 'https://jiwadevelopment.com/',
    },
    // Pass Reswdansy
    {
      id: crypto.randomUUID(),
      num: '02',
      category: 'Frontend',
      title: ' Pass Residency',
      description:
        'We are your trusted partners in global mobility. As part of Pass Wealth Management, we provide tailored solutions for individuals, families, and businesses seeking residency, citizenship, and international success.',
      stack: [
        { id: crypto.randomUUID(), name: 'Next.js' },
        { id: crypto.randomUUID(), name: 'TypeScript' },
        { id: crypto.randomUUID(), name: 'Shadcn/UI' },
      ],
      image: '/assests/images/works/pass.png',
      live: 'https://www.passresidency.com/',
      github: 'https://github.com/SBOdoo/Pass-Residency-Test',
    },
    // Fresh Cart
    {
      id: crypto.randomUUID(),
      num: '03',
      category: 'Frontend',
      title: 'Fresh Cart',
      description:
        'An eCommerce website is your digital storefront where you showcase products and customers make purchases. It serves as your product display, sales team, and cash register—all in one.',
      stack: [
        { id: crypto.randomUUID(), name: 'React JS' },
        { id: crypto.randomUUID(), name: 'Integration API' },
        { id: crypto.randomUUID(), name: 'JavaScript' },
      ],
      image: '/assests/images/works/freshcart.png',
      live: 'https://minamedhat86.github.io/Fresh-Cart',
      github: 'https://github.com/MinaMedhat86/Fresh-Cart',
    },
    // Dashboard
    {
      id: crypto.randomUUID(),
      num: '04',
      category: 'Frontend ',
      title: 'Smart Dashboard',
      description:
        'Smart Dashboard is a sleek and modern web app that transforms data into clear insights. With real-time metrics and intuitive visualizations, it helps you track performance, monitor trends, and make smarter decisions with ease.',
      stack: [
        { id: crypto.randomUUID(), name: 'React JS' },
        { id: crypto.randomUUID(), name: 'MUI' },
        { id: crypto.randomUUID(), name: 'Integration API' },
      ],
      image: '/assests/images/works/dashboard.png',
      live: 'https://minamedhat86.github.io/Smart-Dashboard/',
      github: 'https://github.com/MinaMedhat86/Smart-Dashboard',
    },
    // UMS
    {
      id: crypto.randomUUID(),
      num: '05',
      category: 'Frontend',
      title: 'UMS ',
      description:
"web application designed for efficient user management and data monitoring. It includes features like adding new users, tracking activities, and visualizing statistics with interactive charts. With a clean and intuitive interface, it simplifies administrative tasks and enhances workflow productivity.",      stack: [
        { id: crypto.randomUUID(), name: 'React Js' },
        { id: crypto.randomUUID(), name: 'MUI' },
        { id: crypto.randomUUID(), name: 'JavaScript' },
      ],
      image: '/assests/images/works/ums.png',
      live: 'https://minamedhat86.github.io/UMS/',
      github: 'https://github.com/MinaMedhat86/UMS',
    },
    // old Portfolio
    {
      id: crypto.randomUUID(),
      num: '06',
      category: 'Frontend',
      title: 'Old Mina Portfolio ',
      description:
        ' I work as a Software Engineer and specialize in React, and Front-End Web Development, I thrive on learning and teamwork, dedicated to staying updated on industry advancements and emerging technologies to improve skills and deliver innovative solutions consistently.',
      stack: [
        { id: crypto.randomUUID(), name: 'React Js' },
        { id: crypto.randomUUID(), name: 'JavaScript' },
        { id: crypto.randomUUID(), name: 'Bootstrap' },
      ],
      image: '/assests/images/works/portfolio.png',
      live: 'https://minamedhat86.github.io/Mina-Portfolio',
      github: 'https://github.com/MinaMedhat86/Mina-Portfolio',
    },
    // Note App
    {
      id: crypto.randomUUID(),
      num: '07',
      category: 'Frontend',
      title: 'Note App',
      description:
        'React-powered note taking application. It lets users create, view, and manage notes using a smooth, responsive interface, while integrating APIs for data handling.',
      stack: [
        { id: crypto.randomUUID(), name: 'React Js' },
        { id: crypto.randomUUID(), name: 'JavaScript' },
        { id: crypto.randomUUID(), name: 'Integration API' },
      ],
      image: '/assests/images/works/note app.png',
      live: 'https://minamedhat86.github.io/note-app',
      github: 'https://github.com/MinaMedhat86/Note-app',
    },
    // Yummy app
    {
      id: crypto.randomUUID(),
      num: '08',
      category: 'Frontend',
      title: 'Yummy App',
      description:
        'interactive food discovery platform that makes exploring recipes simple and fun. Users can search meals by category, area, or ingredients they already have. With a clean design and smooth navigation, it delivers an engaging way to discover and enjoy new flavors.',
      stack: [
        { id: crypto.randomUUID(), name: 'jQuery' },
        { id: crypto.randomUUID(), name: 'Bootstrap' },
        { id: crypto.randomUUID(), name: 'Integration API' },
      ],
      image: '/assests/images/works/yummy.png',
      live: 'https://minamedhat86.github.io/Yummy-App/',
      github: 'https://github.com/MinaMedhat86/Yummy-App',
    },
    // Weather App
    {
      id: crypto.randomUUID(),
      num: '09',
      category: 'Frontend',
      title: 'Weather App',
      description:
        'Weather-App is a simple and modern web application that displays real-time weather information for any city. With a clean and responsive design, it allows users to quickly check temperature and essential weather details by just entering a city name.',
      stack: [
        { id: crypto.randomUUID(), name: 'HTML5' },
        { id: crypto.randomUUID(), name: 'CSS3' },
        { id: crypto.randomUUID(), name: 'JavaScript' },
      ],
      image: '/assests/images/works/weather.png',
      live: 'https://minamedhat86.github.io/Weather-App/',
      github: 'https://github.com/MinaMedhat86/Weather-App',
    },
  ];

  const [project, setProject] = useState(projects[0]);

  function handleSwiperChange(swiper: SwiperClass) {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }
  return (
    <>
      <motion.section
        className='flex flex-col justify-center min-h-[80vh] py-12 lg:py-0 lg:mt-7 mt-0 '
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.4, delay: 2.1, ease: 'easeIn' },
        }}>
        <div className='mx-auto lg:w-[85%] md:w-[90%] w-[95%]'>
          <div className='flex flex-col lg:flex-row lg:gap-[30px]'>
            <div className='w-full lg:w-[50%]  lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none group '>
              <div className='flex flex-col gap-[30px] h-[50%] '>
                {/* project num */}
                <div className='text-outline  text-8xl font-extrabold'>
                  {project.num}
                </div>
                {/* project category */}
                <h2 className='text-[42px] font-bold capitalize leading-none group-hover:text-accent transition-all duration-300 text-white'>
                  {project.title}
                </h2>
                {/* project description */}
                <p className='text-white/60'>{project.description}</p>
                {/* stack project */}
                <ul className='flex gap-4'>
                  {project.stack.map((item, index) => {
                    return (
                      <Fragment key={item.id}>
                        <li className=' text-xl text-accent'>
                          {item.name}
                          {index !== project.stack.length - 1 && ','}
                        </li>
                      </Fragment>
                    );
                  })}
                </ul>
                {/* border */}
                <div className='border border-white/20'></div>
                {/* buttoms  */}
                <div className='flex gap-4 items-center'>
                  {/* live project */}
                  <Link href={project.live} target='_block'>
                    <Tooltip>
                      <TooltipTrigger className=' cursor-pointer w-[70px] h-[70px] bg-white/5 flex justify-center items-center rounded-full group'>
                        <GoArrowUpRight className='text-3xl text-white hover:text-accent transition-all duration-300 ' />
                      </TooltipTrigger>
                      <TooltipContent className='border border-white hover:text-accent  duration-300 transition-all'>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </Link>
                  {/* github project */}
                  <Link href={project.github} target='_block'>
                    <Tooltip>
                      <TooltipTrigger className=' cursor-pointer w-[70px] h-[70px] bg-white/5 flex justify-center items-center rounded-full group'>
                        <FaGithub className='text-3xl text-white hover:text-accent transition-all duration-300 ' />
                      </TooltipTrigger>
                      <TooltipContent className='border border-white hover:text-accent  duration-300 transition-all'>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </Link>
                </div>
              </div>
            </div>
            <div className='w-full lg:w-[50%]'>
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                onSlideChange={handleSwiperChange}
                className='lg:h-[520px] mb-12'>
                {projects.map((item) => {
                  return (
                    <SwiperSlide key={item.id}>
                      <div
                        style={{
                          backgroundImage: `url(${item.image})`,
                          borderRadius: '16px',
                        }}
                        className={`h-[460px] relative group flex justify-center  items-center`}>
                        <div className='absolute inset-0 bg-black/30 backdrop-blur-sm rounded-2xl'></div>
                        <div className='w-full h-full relative '>
                          <Image
                            src={item.image}
                            alt={item.category}
                            fill
                            className='object-contain'
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
                <SwiperArrows
                  containerStyles='flex gap-2 absolute bottom-[calc(50%_-_22px)] w-full lg:justify-none right-0 lg:bottom-0  justify-between lg:w-max'
                  btnStyles='z-50 cursor-pointer bg-accent flex justify-center items-center w-[44px] h-[44px] t-[22px] text-primary transition all hover:bg-[#33ffad]'
                  iconStyles=' '
                />
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
