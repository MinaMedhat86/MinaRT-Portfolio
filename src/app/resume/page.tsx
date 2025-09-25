'use client';
import React from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { motion } from 'framer-motion';
import ExperienceResume from './_components/experienceResume';
import CourseseResume from './_components/couesesResume';
import EducationResume from './_components/educationResume';
import SkillsResume from './_components/skillsResume';
import AboutResume from './_components/aboutResume';

export default function Resume() {
  return (
    <>
      <motion.div
        className='flex flex-col justify-center min-h-[80vh] py-12 lg:py-0 lg:mt-7 mt-0 '
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.4, delay: 2.1, ease: 'easeIn' },
        }}>
        <div className='mx-auto lg:w-[85%] md:w-[90%] w-[95%]'>
          <Tabs
            defaultValue='experience'
            className=' flex flex-col gap-[60px] lg:flex-row'>
            <TabsList className='flex flex-col w-full gap-6 max-w-[380px] mx-auto lg:mx-0'>
              <TabsTrigger value='about'>About Me</TabsTrigger>
              <TabsTrigger value='experience'>Experience</TabsTrigger>
              <TabsTrigger value='education'>Education</TabsTrigger>
              <TabsTrigger value='courses'>Courses</TabsTrigger>
              <TabsTrigger value='skills'>Skills</TabsTrigger>
            </TabsList>
            <div className='min-h-[70%] w-full'>
              {/* About Me  */}
              <TabsContent value='about'>
                <AboutResume />
              </TabsContent>
              {/* Experience  */}
              <TabsContent value='experience'>
                <ExperienceResume />
              </TabsContent>
              {/* Education */}
              <TabsContent value='education'>
                <EducationResume />
              </TabsContent>
              {/* Courses  */}
              <TabsContent value='courses'>
                <CourseseResume />
              </TabsContent>
              {/* Skills  */}
              <TabsContent value='skills'>
                <SkillsResume />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </>
  );
}
