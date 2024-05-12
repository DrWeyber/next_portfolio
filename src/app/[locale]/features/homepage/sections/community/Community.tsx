import styles from './community.module.scss';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const Community = () => {
  const t = useTranslations();
  return (
    <div id="community" className={styles['community']}>
      <div className={styles['backdrop']}></div>
      <p>
      {t('community.main')}
      </p>

      <Link href="#contacts">    
        <button className={`${styles['button']} ${styles['arrow-link']}`}>
        {t('common.be_a_part')} <span></span>
        </button>
      </Link>
    </div>
  )
};
