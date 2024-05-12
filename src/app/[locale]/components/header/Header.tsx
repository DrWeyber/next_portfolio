import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ThemeSwitcher } from '@/app/[locale]/components/theme-switcher/ThemeSwitcher';
import { Logo, MobileMenuButton, LocaleSwitcher } from '@/app/[locale]/components';
import { MobileMenu } from '@/app/[locale]/components/mobile-menu/MobileMenu';
import styles from './header.module.scss';
import { navigationLinks } from '@/app/[locale]/constants';

export const Header = () => {
  const t = useTranslations();

  const translatedLinks = navigationLinks.map(({ label, ...rest }) => ({ label: t(label), ...rest }));

  return (
    <>
      <header className={`${styles['header-main']}`}>
        <Logo />
        <nav className={styles['header-navbar']}>
          <ul>
            {translatedLinks.map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className={styles['header-nav-link']}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeSwitcher />
        <Link href="#contacts" className={`${styles['button']} ${styles['contact-us']}`}>
          {t('common.contact-us')}
        </Link>
        <LocaleSwitcher />
        <MobileMenuButton />
      </header>
      <div className={styles['separator']} />
      <MobileMenu links={translatedLinks} />
    </>
  );
};

export default Header;
