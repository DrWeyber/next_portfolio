import Image from 'next/image';
import TestimonialsBackgroundLight from '/public/images/testimonials/background-light.png';
import styles from '@/app/[locale]/features/homepage/sections/testimonials/testimonials.module.scss';
import TestimonialsBackgroundDark from '/public/images/testimonials/background-dark.png';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const TestimonialsBackground = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return;

  return theme === 'light' ? (
    <Image src={TestimonialsBackgroundLight} className={styles['background-image']} alt="Background page logotype" />
  ) : (
    <Image src={TestimonialsBackgroundDark} className={styles['background-image']} alt="Background page logotype" />
  );
};
