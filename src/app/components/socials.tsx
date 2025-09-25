import { socialLinksType } from '@/lib/typs';
import Link from 'next/link';
import React, { Fragment } from 'react';
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp ,
} from 'react-icons/fa';

export default function Socials({
  containerStyle,
  iconsStyle,
}: {
  containerStyle: string;
  iconsStyle: string;
}) {
  const socialLinks: socialLinksType[] = [
    { id: crypto.randomUUID(), icon: <FaGithub />, href: 'https://github.com/MinaMedhat86' },
    { id: crypto.randomUUID(), icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/karkibo12/' },
    { id: crypto.randomUUID(), icon: <FaFacebookF />, href: 'https://www.facebook.com/mina.medhatrizkallatadross/' },
    { id: crypto.randomUUID(), icon: <FaInstagram />, href: 'https://www.instagram.com/karkibo/' },
    { id: crypto.randomUUID(), icon: <FaWhatsapp  />, href: 'https://iwtsp.com/201125994899' },
  ];
  return (
    <>
      <div className={containerStyle}>
        {socialLinks.map((item) => {
          return (
            <Fragment key={item.id}>
              <Link href={item.href} className={iconsStyle}   target="_blank"
              rel="noopener noreferrer" >
                {item.icon}
              </Link>
            </Fragment>
          );
        })}
      </div>
    </>
  );
}
