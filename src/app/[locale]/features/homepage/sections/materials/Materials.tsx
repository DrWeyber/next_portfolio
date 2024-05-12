import styles from './materials.module.scss';

const materials = [
  {
    title: "Beginner's Guide ",
    description: 'Your Starting Point for Fundamentals and Best Practices',
    imageUrl: '/images/materials/source-1.png'
  },
  {
    title: 'Advanced Strategies',
    description: 'Explore In-Depth Techniques for Experienced Enthusiasts',
    imageUrl: '/images/materials/source-2.png'
  },
  {
    title: 'Industry Insights',
    description: 'Analyzing Current Trends and Future Projections in Our Field',
    imageUrl: '/images/materials/source-3.png'
  },
  {
    title: 'Success Stories',
    description: "Motivating Journeys and Lessons from Our Community's Achievers",
    imageUrl: '/images/materials/source-4.png'
  }
];

export const Materials = () => (
  <div id="useful-materials" className={`${styles['materials']} ${styles['content-section']}`}>
    <div className={styles['title-container']}>
      <span className={styles['category-title']}>Useful materials</span>
    </div>
    <h2 className={styles['slogan']}>Resources for Your Journey</h2>
    <div className={styles['card-container']}>
      {materials.map((material, i) => {
        const isNarrow = i % 4 === 1 || i % 4 === 2;

        return (
          <div key={material.title} className={`${styles['card']} ${isNarrow ? styles['narrow'] : ''}`}>
            <p className={styles['card-title']}>{material.title}</p>
            <p className={styles['card-description']}>{material.description}</p>
            <div className={styles['card-image']} style={{ backgroundImage: `url(${material.imageUrl})` }}></div>
          </div>
        );
      })}
    </div>
    <button
      className={`${styles['button']} ${styles['arrow-link']} ${styles['transparent']} ${styles['explore-more']}`}
    >
      Explore More <span></span>
    </button>
  </div>
);

export default Materials;
