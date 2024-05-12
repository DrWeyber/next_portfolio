'use client';

import { useAppSelector, useAppDispatch } from '@/app/[locale]/store/hooks';
import { setMenuOpen } from '@/app/[locale]/features/homepage/homepageSlice';
import styles from './MobileMenuButton.module.scss';

export const MobileMenuButton = () => {
  const isMenuOpen = useAppSelector((state) => state.homepage.isMenuOpen);
  const dispatch = useAppDispatch();

  const toggleMenu = () => {
    dispatch(setMenuOpen(!isMenuOpen));
  };

  return (
    <button onClick={toggleMenu} className={`${styles['button']} ${styles['transparent']} ${styles['menu']}`}>
      {isMenuOpen ? 'Close' : 'Menu'}
    </button>
  );
};
