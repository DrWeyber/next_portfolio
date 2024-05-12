'use client';

import { ChangeEvent, ReactNode, useTransition } from 'react';
import { useRouter, usePathname } from '@/navigation';
import styles from './LanguageSwithcerSelect.module.scss';

type Props = {
  children: ReactNode;
  value: string;
  className?: string;
};

export function LocaleSwitcherSelect({ children, value, className }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <>
      <label className={`${styles['language-label']} ${className}`}>
        <span className={styles['language-title']}>Language switcher select button</span>
        <select
          id="language-switcher"
          className={styles['language-switcher']}
          disabled={isPending}
          value={value}
          onChange={onSelectChange}
        >
          {children}
        </select>
      </label>
    </>
  );
}
