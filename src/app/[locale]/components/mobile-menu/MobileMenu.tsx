'use client';

import { useEffect } from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import { setMenuOpen } from '@/app/[locale]/features/homepage/homepageSlice';
import { useAppDispatch, useAppSelector } from '@/app/[locale]/store/hooks';
import styles from './MobileMenu.module.scss';
import { LocaleSwitcher } from '@/app/[locale]/components';
import { useTranslations } from 'next-intl';


function adjustHeight() {
  const viewportHeight = window.innerHeight + 'px';
  document.documentElement.style.setProperty('--vh', viewportHeight);
}

interface MobileMenuProps {
  links: { label: string; href: string }[];
}

export const MobileMenu = ({ links }: MobileMenuProps) => {
  const t = useTranslations();

  const isMenuOpen = useAppSelector((state) => state.homepage.isMenuOpen);
  const dispatch = useAppDispatch();

  const toggleMenu = () => {
    dispatch(setMenuOpen(false));
  };

  useEffect(() => {
    adjustHeight();
  }, []);

  return (
    <RemoveScroll
      enabled={isMenuOpen}
      allowPinchZoom
      className={`${styles['mobile-menu']} ${isMenuOpen ? styles['menu-open'] : ''}`}
    >
      <div className={styles['mobile-menu-sections']}>
        <div className={styles['mobile-menu-section-1']}>
          <div className={styles['title-container']}>
            <span className={styles['category-title']}>{t('common.contact-us')}</span>
          </div>
          <nav className={styles['modal-nav']}>
            <ul>
              {links.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} onClick={toggleMenu} className={styles['modal-nav-link']}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles['mobile-menu-section-2']}>
          <div className={styles['title-container']}>
            <span className={styles['category-title']}>Language</span>
          </div>
          <LocaleSwitcher showFullLocale className={styles['mobile-menu-locale-switcher']} />
        </div>
      </div>
      <button className={`${styles['button']} ${styles['arrow-link']} ${styles['contact-us']}`}>
        {t('common.contact-us')}
        <span></span>
      </button>
    </RemoveScroll>
  );
};
