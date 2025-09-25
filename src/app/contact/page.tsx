'use client';

import React, { Fragment, useState } from 'react';
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaRegThumbsUp,
} from 'react-icons/fa';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm, ValidationError } from '@formspree/react';
import { Oval } from 'react-loader-spinner';
import { motion } from 'framer-motion';
import { contectInfoType } from '@/lib/typs';

// Static contact info
const contactInfo: contectInfoType[] = [
  {
    id: crypto.randomUUID(),
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '+20 1125994899',
  },
  {
    id: crypto.randomUUID(),
    icon: <FaEnvelope />,
    title: 'E-mail',
    description: 'minamidhat15@gmail.com',
  },
  {
    id: crypto.randomUUID(),
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: 'Nasr City, Cairo',
  },
];

// Contact item subcomponent
const ContactItem = ({ icon, title, description }: contectInfoType) => (
  <li className='flex items-center gap-6'>
    <div
      className='w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] bg-[#27272c] 
        flex justify-center items-center rounded-md text-accent'>
      <div className='text-[28px]'>{icon}</div>
    </div>
    <div className='flex-1'>
      <p className='text-white/60'>{title}</p>
      <h3 className='text-xl'>{description}</h3>
    </div>
  </li>
);

export default function Contact() {
  const [state, handleSubmit] = useForm('mqkrwjzz'); // Your Formspree ID
  const [service, setService] = useState(""); // track selected service

  return (
    <motion.section
      className='py-6'
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 2.1, ease: 'easeIn' },
      }}>
      <div className='mx-auto lg:w-[85%] md:w-[90%] w-[95%]'>
        <div className='flex flex-col lg:flex-row gap-[30px]'>
          {/* Form */}
          <div className='lg:w-[60%] order-2 lg:order-none'>
            <form
              onSubmit={handleSubmit}
              className='flex flex-col rounded-xl gap-6 bg-[#27272c] p-10'>
              <h3 className='text-accent text-4xl'>Let&apos;s work together</h3>
              <p className='text-white/60'>
                I’m always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Fill out the form and
                let’s connect!
              </p>

              {/* Inputs */}
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <Input
                  type='text'
                  name='firstName'
                  placeholder='First Name'
                  required
                />
                <Input
                  type='text'
                  name='lastName'
                  placeholder='Last Name'
                  required
                />
                <Input
                  type='email'
                  name='email'
                  placeholder='Email Address'
                  required
                />
                <ValidationError
                  prefix='Email'
                  field='email'
                  errors={state.errors}
                />
                <Input type='text' name='phone' placeholder='Phone Number' />
              </div>

              {/* Select */}
              <Select onValueChange={setService}>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Select a service' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='web'>Web Development</SelectItem>
                  <SelectItem value='seo'>SEO Optimization</SelectItem>
                  <SelectItem value='app'>Mobile App Development</SelectItem>
                </SelectContent>
              </Select>
              {/* Hidden input to send value with Formspree */}
              <input type="hidden" name="service" value={service} />

              {/* Textarea */}
              <Textarea
                className='h-[150px]'
                placeholder='Type your message here...'
                name='message'
                required
              />
              <ValidationError
                prefix='Message'
                field='message'
                errors={state.errors}
              />

              {/* Button */}
              <Button
                type='submit'
                disabled={state.submitting}
                className='max-w-40 cursor-pointer bg-transparent border-2 border-accent 
                text-accent hover:bg-accent hover:text-black transition-all duration-300 
                rounded-[20px] px-7 py-5 flex items-center gap-2'>
                {state.submitting ? (
                  <Oval
                    height='25'
                    width='55'
                    color='#4fa94d'
                    ariaLabel='oval-loading'
                  />
                ) : (
                  'Send Message'
                )}
              </Button>

              {state.succeeded && (
                <div className='h6 mt-3 flex items-center justify-center gap-2 text-green-400'>
                  <FaRegThumbsUp />
                  <span>Your message has been sent successfully.</span>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className='flex-1 flex items-center lg:justify-end order-1 lg:order-none mb-8 lg:mb-0'>
            <ul className='flex flex-col gap-10'>
              {contactInfo.map((item) => (
                <Fragment key={item.id}>
                  <ContactItem {...item} />
                </Fragment>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
