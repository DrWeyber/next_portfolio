'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import MoonIcon from 'public/icons/moon.svg';
import SunIcon from 'public/icons/sun.svg';
import styles from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <button className={styles['theme-switcher']}></button>;
  }

  const isLightTheme = resolvedTheme === 'light';

  const toggleTheme = () => setTheme(isLightTheme ? 'dark' : 'light');

  return (
    <button className={styles['theme-switcher']} onClick={toggleTheme}>
      {isLightTheme ? (
        <Image src={MoonIcon} alt="Dark theme switcher" width={50} height={50} />
      ) : (
        <Image src={SunIcon} alt="Dark theme switcher" width={50} height={50} />
      )}
    </button>
  );
};
