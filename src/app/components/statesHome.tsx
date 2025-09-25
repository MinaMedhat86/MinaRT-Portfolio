'use client';
import React, { Fragment } from 'react';
import CountUp from 'react-countup';
export default function StatesHome() {
  const states = [
    { id: crypto.randomUUID(), name: 'Years of experience', number: 3 },
    { id: crypto.randomUUID(), name: 'Projects completed', number: 20 },
    { id: crypto.randomUUID(), name: 'Technologies mastered', number: 17 },
  ];
  return (
    <>
      <section className='mx-auto lg:w-[85%] md:w-[90%] w-[95%] lg:mt-12 mt-8 mb-10 lg:mb-auto '>
        <div className=' flex flex-wrap items-center  gap-6    justify-center'>
          {states.map((item) => {
            return (
              <Fragment key={item.id}>
                <div className='flex gap-5 items-center flex-1 justify-center lg:justify-start '>
                  <div>
   <span className='text-4xl font-bold lg:text-6xl'>+</span>
                  <CountUp
                    end={item.number}
                    duration={5}
                    delay={2}
                    className='text-4xl font-bold lg:text-6xl'
                  />
                  </div>
               
                  <p
                    className={`${
                      item.name.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'
                    }`}>
                    {item.name}
                  </p>
                </div>
              </Fragment>
            );
          })}
        </div>
      </section>
    </>
  );
}
