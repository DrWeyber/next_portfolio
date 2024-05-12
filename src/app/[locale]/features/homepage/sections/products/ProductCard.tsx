'use client';

import styles from '@/app/[locale]/features/homepage/sections/products/products.module.scss';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';

interface ProductCardProps {
  title: string;
  link: string;
  description: string;
  image: {
    [key in 'en']: {
      desktop: string;
      mobile: string;
    };
  };
}

export const ProductCard = ({ title, link, description, image }: ProductCardProps) => {
  const locale = useLocale() as 'en';
  const t = useTranslations();
  const isDesktop = useMediaQuery({
    query: '(min-width: 768px)'
  });
  const [mounted, setMounted] = useState(false);

  const imageResolutionType = isDesktop ? 'desktop' : 'mobile';

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <div key={title} className={styles['product-item']}>
      <h3 className={styles['product-title']}>Project</h3>
      <span className={styles['product-description']}>Project description</span>
      <Link className={styles['product-link']} href={link}>
        {t('common.show-more')}
      </Link>
      <div className={`${styles['product-image']} ${styles['responsive-image']}`}>
        <div style={{ backgroundImage: `url(${image[locale][imageResolutionType]})` }}></div>
      </div>
    </div>
  );
};
