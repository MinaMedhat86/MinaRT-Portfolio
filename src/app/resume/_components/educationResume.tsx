import React from 'react';

export default function EducationResume() {
  return (
    <>
      <div className='flex flex-col gap-[30px] text-center lg:text-left lg:min-h-[600px]'>
        <h3 className='text-4xl font-bold'> Education</h3>
        <p className='max-w-[800px] text-white/60 mx-auto lg:mx-0'>
          I hold a Bachelor&apos;s degree in Computer Science, where I built a
          strong foundation in programming, software development, and
          problem-solving.
        </p>

        <div className='flex flex-col items-center justify-center lg:items-start gap-1 bg-[#232329] py-6 px-10 rounded-xl'>
          <span className='text-accent'>Sep 2016 - Jul 2020</span>
          <h3 className='text-center lg:text-left text-xl  min-h-[60px]'>
            Faculty of Computer Science And Information System
          </h3>
          <div className='flex items-center gap-3'>
            <span className=' rounded-full bg-accent h-[6px] w-[6px]'></span>
            <p className='text-white/60'> KFS University</p>
          </div>

          <div className='flex flex-col gap-1 mt-3 text-sm text-white/80'>
            <p>
              <span className='text-accent font-semibold'>
                Graduation Project:
              </span>{' '}
              Fishing Company
            </p>
            <p>
              <span className='text-accent font-semibold'>Degree:</span> A+
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
