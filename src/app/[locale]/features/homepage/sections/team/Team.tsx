import React from 'react';
import styles from './team.module.scss';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import { TeamCard } from '@/app/[locale]/features/homepage/sections/team/TeamCard';

const team = [
  {
    image: {
      desktop: 'https://placehold.co/800x600',
      mobile: 'https://placehold.co/800x600'
    },
    name: 'Michael',
    jobTitle: 'CEO'
  },
  {
    image: {
      desktop: 'https://placehold.co/800x600',
      mobile: 'https://placehold.co/800x600'
    },
    name: 'John',
    jobTitle: 'CTO'
  },
  {
    image: {
      desktop: 'https://placehold.co/800x600',
      mobile: 'https://placehold.co/800x600'
    },
    name: 'Chris',
    jobTitle: 'Developer'
  }
];

export const Team = () => {
  const t = useTranslations();

  return (
    <div id="team" className={`${styles['team']} ${styles['content-section']}`}>
      <div className={styles['title-container']}>
        <span className={styles['category-title']}>{t('team.team')}</span>
      </div>
      <h2 className={styles['slogan']}>{t('team.team_warning')}</h2>
      <ul className={styles['card-container']}>
        {team.map((teammateData, index) => {
          return <TeamCard key={teammateData.name + teammateData.jobTitle} {...teammateData} />;
        })}
        <li className={`${styles['card']} ${styles['no-photo']} ${styles['join-us']}`}>
          <p>{t('team.to_success')}</p>
          <Link href="#contacts">
            <button className={`${styles['button']} ${styles['arrow-link']}`}>
              {t('common.be_a_part')}
              <span></span>
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Team;
