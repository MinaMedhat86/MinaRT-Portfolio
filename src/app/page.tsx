import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';
import Socials from './components/socials';
import HomePhoto from './components/homePhoto';
import StatesHome from './components/statesHome';
import Link from 'next/link';
export default function Home() {
  return (
    <>
      <section
        className='

 h-full
 lg:pt-2 lg:pb-12'>
        <div
          className='mx-auto lg:w-[85%] md:w-[90%] w-[95%]
 flex-col lg:flex-row flex 
 lg:justify-between items-center '>
          <div className=' order-1 lg:order-none'>
            <p className='lg:text-xl  lg:text-left text-center  lg:mb-1 '>
              Software Engineer{' '}
            </p>
            <h1
              className='xl:text-[75px] lg:text-[60px] md:text-[50px] text-[40px] font-bold
  text-center lg:text-left leading-[1.3] lg:leading-[1.1]
  '>
              Hello I&apos;m
              <br />
              <span className='text-accent'>Mina Medhat RT</span>
            </h1>
            <p className=' lg:text-left text-center lg:mt-7 mt-4 max-w-[500px] text-white/80'>
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>
            <div className='flex gap-8 mt-9 flex-col lg:flex-row items-center'>
              <Link href="/assests/documents/MinaMedhat-CV.pdf" download target="_blank" rel="noopener noreferrer">
              <Button
                className='bg-transparent border-2 border-accent text-accent
    hover:bg-accent hover:text-black cursor-pointer 
    transition-all duration-300  rounded-[20px] 
   px-7! py-5!
    flex items-center gap-2
    '>
                <span>Download CV</span>
                <FiDownload />
              </Button>
              </Link>
              
              <div className='lg:mb-0 mb-8'>
                <Socials containerStyle={" flex items-center gap-6"}
                 iconsStyle={"w-9 h-9 border border-accent rounded-full flex  hover:bg-accent hover:text-black cursor-pointer transition-all duration-300 justify-center items-center text-accent text-base "} />
              </div>
            </div>
          </div>
          <div className='order-none lg:order-1 mb-5 lg:mb-0'>
            <HomePhoto />
          </div>
        </div>
        <StatesHome/>
      </section>
    </>
  );
}
