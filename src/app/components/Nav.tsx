'use client';
import { linksType } from '@/lib/typs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { Fragment } from 'react';

export default function Nav() {
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
      <nav className='flex items-center gap-8 me-8'>
        {links.map((item) => {
          return (
            <Fragment key={item.id}>
              <Link
                href={item.href}
                className={`capitalize font-medium hover:text-accent transition-all
                     duration-300
                     ${pathname === item.href ? 'text-accent  border-b-2 border-accent' : 'text-white'}
                     `}>
                {item.name}
              </Link>
            </Fragment>
          );
        })}
      </nav>
    </>
  );
}
