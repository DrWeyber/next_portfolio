import styles from '@/app/[locale]/components/mobile-menu/MobileMenu.module.scss';
import { navigationLinks } from '@/app/[locale]/constants';

interface MobileMenuNavigationProps {
  toggleMenu: () => void;
  params: { locale: string };
}

export const MobileMenuNavigation = ({ toggleMenu, params }: MobileMenuNavigationProps) => {
  return (
    <nav className={styles['modal-nav']}>
      <ul>
        {navigationLinks.map(({ label, href }) => (
          <li key={href}>
            <a href={href} onClick={toggleMenu} className={styles['modal-nav-link']}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
