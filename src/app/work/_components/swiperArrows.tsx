'use client';

import { useSwiper } from 'swiper/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

export default function SwiperArrows({
  containerStyles,
  btnStyles,
  iconStyles,
}: {
  containerStyles: string;
  btnStyles: string;
  iconStyles: string;
}) {
  const swiper = useSwiper();

  return (
    <div className={`${containerStyles}`}>
      <Button
        onClick={() => swiper.slidePrev()}
        className={btnStyles}
      >
        <FaChevronLeft className={iconStyles} />
      </Button>
      <Button
        onClick={() => swiper.slideNext()}
        className={btnStyles}
      >
        <FaChevronRight className={iconStyles} />
      </Button>
    </div>
  );
}
