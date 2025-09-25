'use client';

import React, { Fragment } from 'react';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { CiMenuFries } from 'react-icons/ci';
import { linksType } from '@/lib/typs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileNav() {
  const links: linksType[] = [
    { id: crypto.randomUUID(), name: 'Home', href: '/' },
    { id: crypto.randomUUID(), name: 'services', href: '/services' },
    { id: crypto.randomUUID(), name: 'resume', href: '/resume' },
    { id: crypto.randomUUID(), name: 'work', href: '/work' },
    { id: crypto.randomUUID(), name: 'Contact', href: '/contact' },
  ];
  const pathname = usePathname();

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <CiMenuFries className=' text-accent cursor-pointer' size={'23px'} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
                       <Link href={'/'}>
              <div className=' flex items-center gap-2'>
                <h1 className='text-xl font-bold '>
                  Mina RT <span className='text-accent'>.</span>
                </h1>
              </div>
              </Link>
            </SheetTitle>
            <SheetDescription className='flex flex-col gap-7 items-center mt-17 '>
              {links.map((item) => {
                return (
                  <Fragment key={item.id}>
                    <Link
                      href={item.href}
                      className={`capitalize font-medium hover:text-accent transition-all text-base
                     duration-300
                     ${pathname === item.href ? 'text-accent border-b-2 border-accent' : 'text-white'}
                     `}>
                      {item.name}
                    </Link>
                  </Fragment>
                );
              })}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}
