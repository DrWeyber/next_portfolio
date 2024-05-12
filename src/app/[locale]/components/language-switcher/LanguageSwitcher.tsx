import { useLocale } from 'next-intl';
import { locales } from '@/i18n';
import { LocaleSwitcherSelect } from './LanguageSwitcherSelect';
import styles from './LanguageSwithcerSelect.module.scss';
import { localeTranslates } from '@/app/[locale]/constants';

interface LocaleSwitcherProps {
  showFullLocale?: boolean;
  className?: string;
}

export const LocaleSwitcher = ({ showFullLocale, className }: LocaleSwitcherProps) => {
  const currentLocale = useLocale();

  return (
    <LocaleSwitcherSelect value={currentLocale} className={className}>
      {locales.map((locale) => (
        <option key={locale} className={styles['language-switcher-option']} value={locale}>
          {showFullLocale ? localeTranslates[locale] : locale.toUpperCase()}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
};
