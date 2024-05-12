'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import WarningLogoLight from 'public/icons/warning.svg';
import WarningLogoDark from 'public/icons/warning-dark.png';
import styles from '@/app/[locale]/components/header/header.module.scss';

export const Logo = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <div className={styles['logo']}>
        <span>Warning.</span>
      </div>
    );

  const isLightTheme = resolvedTheme === 'light';

  return (
    <div className={styles['logo']}>
      {isLightTheme && mounted ? (
        <Image src={WarningLogoLight} alt="Warning branding logotype" width={40} height={40} />
      ) : (
        <Image src={WarningLogoDark} alt="Warning branding logotype" width={40} height={40} />
      )}

      <span>Warning</span>
    </div>
  );
};
