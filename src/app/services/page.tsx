'use client';
import { servicesType } from '@/lib/typs';
import React, { Fragment } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { GoArrowDownRight } from 'react-icons/go';

export default function Services() {
  const services: servicesType[] = [
    {
      id: crypto.randomUUID(),
      num: '01',
      name: 'Web Development',
      description:
        'I offer web development services using modern technologies like React, Next.js to build responsive and dynamic websites.',
    },
    {
      id: crypto.randomUUID(),
      num: '02',
      name: 'SEO Optimization',
      description:
        'I help improve website visibility on search engines through effective SEO strategies and techniques.',
    },
    {
    id: crypto.randomUUID(),
    num: '03',
    name: 'Maintenance & Support',
    description:
      'I provide ongoing website updates, bug fixes, and technical support to ensure your project runs smoothly.',
  },
    {
      id: crypto.randomUUID(),
      num: '04',
      name: 'mobile App Development',
      description:
        'I develop mobile applications for both Android and iOS platforms using React Native.',
    },

  ];

  return (
    <>
      <section className='flex flex-col justify-center min-h-[80vh] py-12 lg:py-0 lg:mt-7 mt-0 '>
        <div className='mx-auto lg:w-[85%] md:w-[90%] w-[95%]'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.4, delay: 2.1, ease: 'easeIn' },
            }}>
            <div className='grid  md:grid-cols-2 grid-cols-1 gap-[60px] overflow-x-hidden'>
              {services.map((service) => {
                return (
                  <Fragment key={service.id}>
                    <div className='flex flex-col gap-6 flex-1 justify-center group '>
                      <div className='flex items-center justify-between '>
                        {/* Number of service */}
                        <h2 className='text-outline text-5xl font-extrabold'>
                          {service.num}
                        </h2>
                        {/* Link to contact */}
                        <Link
                          href={'/contact'}
                          className=' bg-white flex items-center justify-center w-[70px] h-[70px] rounded-full group-hover:-rotate-45
                          group-hover:bg-accent 
                          transition-all duration-300 '>
                          <GoArrowDownRight className='text-primary text-3xl'/>
                        </Link>
                      </div>

                      {/* Name of service  */}
                      <h3 className='font-bold hover:text-accent transition-all duration-300 text-4xl'>{service.name}</h3>
                      {/* Description of service */}
                      <p className='text-white/60'>{service.description}</p>
                      <div className='border-b-2 border-white/20'></div>
                    </div>
                  </Fragment>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
