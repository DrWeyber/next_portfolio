'use client';
import { useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import styles from './about.module.scss';

const aboutUsArticles = [
  // { title: 'about-us.title-1', article: 'about-us.text-1' },
  // { title: 'about-us.title-2', article: 'about-us.text-2' },
  { title: 'about-us.title-3', article: 'about-us.text-3' },
  { title: 'about-us.title-4', article: 'about-us.text-4' }
];

export const AboutSection = () => {
  const t = useTranslations();
  const [isCollapsed, setCollapsed] = useState(true);
  const containerRef = useRef(null);

  return (
    <div id="about-us" className={`${styles['about-us']} ${styles['content-section']}`}>
      <div className={styles['title-container']}>
        <span className={styles['category-title']}>{t('about-us.label')}</span>
      </div>
      <div>
        <div ref={containerRef} className={styles['text-container']}>
          <div className={styles['text-section']}>
            <p className={`${styles['text-main']} ${styles['title']}`}>{t('about-us.title-1')}</p>
            <p className={`${styles['text-secondary']} ${styles['article']}`}>{t('about-us.text-1')}</p>
          </div>
          <div className={styles['text-section']}>
            <p className={`${styles['text-main']} ${styles['title']}`}>{t('about-us.title-2')}</p>
            <p className={`${styles['text-secondary']} ${styles['article']}`}>{t('about-us.text-2')}</p>
          </div>
          <div className={`${styles['hidden-text']} ${!isCollapsed ? styles['expanded'] : ''}`}>
            {aboutUsArticles.map(({ title, article }) => (
              <div key={title} className={styles['text-section']}>
                <p className={`${styles['text-main']} ${styles['title']}`}>{t(title)}</p>
                <p className={`${styles['text-secondary']} ${styles['article']}`}>{t(article)}</p>
              </div>
            ))}
          </div>
        </div>
        <span
          onClick={() => setCollapsed((prevState) => !prevState)}
          className={`${styles['show-more']} ${!isCollapsed ? styles['expanded'] : ''}`}
        >
          {isCollapsed ? t('about-us.show-more') : t('about-us.show-less')}
        </span>
      </div>
    </div>
  );
};
