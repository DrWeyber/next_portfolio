'use client';

import { useMediaQuery } from 'react-responsive';
import styles from '@/app/[locale]/features/homepage/sections/team/team.module.scss';
import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

interface TeamCardProps {
  image: {
    desktop: string;
    mobile: string;
  };
  name: string;
  jobTitle: string;
}
export const TeamCard = ({ jobTitle, image, name }: TeamCardProps) => {
  const t = useTranslations();
  const [mounted, setMounted] = useState(false);

  const isDesktop = useMediaQuery({
    query: '(min-width: 768px)'
  });

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <li className={styles['card']}>
      <div className={styles['responsive-image']}>
        <div style={{ backgroundImage: `url('${isDesktop ? image.desktop : image.mobile}')` }}></div>
      </div>
      <div className={styles['card-description']}>
        <span className={styles['name']}>{name}</span>
        <span className={styles['job-title']}>{jobTitle}</span>
      </div>
      <div className={styles['backdrop-filter']}></div>
    </li>
  );
};
