import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Warning1 from 'public/images/warning-1.png';
import Warning2 from 'public/images/warning-2.png';
import styles from './IntroSection.module.scss';

export const IntroSection = () => {
  const t = useTranslations();

  return (
    <div className={styles['intro-section']}>
      <div className={styles['text-container']}>
        <h1>{t('intro.heading')}</h1>
        <p>{t('intro.slogan')}</p>
      </div>

      <div className={styles['button-container']}>
        <Link href="#contacts" className={`${styles['button']} ${styles['contact-us']} ${styles['arrow-link']}`}>
          {t('common.contact-us')} <span></span>
        </Link>
        <Link
          href="#about-us"
          className={`${styles['button']}  ${styles['arrow-link']} ${styles['transparent']} ${styles['show-more']}`}
        >
          {t('common.show-more')} <span></span>
        </Link>
      </div>
      <div className={`${styles['decorate-logo']} ${styles['decorate-logo-1']}`}>
        <Image
          src={Warning1}
          alt="Warning banner with alternating text 'Attention' on a yellow background."
          width={3840}
          height={685}
        />
      </div>
      <div className={`${styles['decorate-logo']} ${styles['decorate-logo-2']}`}>
        <Image
          src={Warning2}
          alt="Yellow warning banner with exclamation point icons and text 'Stop Trading! Start Earning' between them."
          width={4096}
          height={267}
        />
      </div>
      <div className={styles['decorate-logo-placeholder']}></div>
    </div>
  );
};
