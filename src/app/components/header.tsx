import React from 'react';
import Nav from './Nav';
import Link from 'next/link';
import MobileNav from './mobileNav';

export default function Header() {
  return (
    <>
      <header className='py-5 mx-auto lg:w-[85%] md:w-[90%] w-[95%] flex justify-between items-center'>
        {/* Logo  */}
         <Link href={'/'}>
        <div className=' flex items-center gap-2'>
         
            <h1 className='text-xl font-bold lg:text-2xl'>
              Mina RT <span className='text-accent'>.</span>
            </h1>
        
        </div>
          </Link>
        {/* desctop links Nav */}
        <div className='hidden lg:flex '>
          <Nav />
          <Link
            href='/contact'
            className='px-3 py-1 bg-accent rounded-full hover:bg-accent-hover text-black transition-all duration-300'>
            Hire Me
          </Link>
        </div>

        {/* Mobile Links Nav */}
        <div className='lg:hidden'>
          <MobileNav />
        </div>
      </header>
    </>
  );
}
