'use client';
import { usePathname } from 'next/navigation';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <>
    <AnimatePresence>

      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { duration: 0.4, delay: 0.5, ease: 'easeInOut' },
          }}
          className='h-screen w-screen fixed bg-primary top-0 pointer-events-none'
        />
        {children}
      </div>
      </AnimatePresence>

    </>
  );
}
