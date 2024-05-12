import styles from './products.module.scss';
import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import { ProductCard } from '@/app/[locale]/features/homepage/sections/products/ProductCard';

const products = [
  {
    title: 'Scalper',
    description: 'products',
    link: '#',
    image: {
      en: {
        desktop: 'https://placehold.co/800x600',
        mobile: 'https://placehold.co/800x600'
      }
    }
  },
  {
    title: 'Project 1',
    description: 'Project 1 description',
    link: '#',
    image: {
      en: {
        desktop: 'https://placehold.co/800x600',
        mobile: 'https://placehold.co/800x600'
      }
    }
  },
  {
    title: 'Project 2',
    description: 'Project 2 description',
    link: '#',
    image: {
      en: {
        desktop: 'https://placehold.co/800x600',
        mobile: 'https://placehold.co/800x600'
      }
    }
  }
];

export const ProductsSection = () => {
  const t = useTranslations();

  return (
    <div id="products" className={`${styles['products']} ${styles['content-section']}`}>
      <div className={styles['title-container']}>
        <span className={styles['category-title']}>{t('products.product_section')}</span>
      </div>
      <h2 className={styles['slogan']}>{t('products.be_a_part')}</h2>
      {products.map((productData) => (
        <ProductCard key={productData.title} {...productData} />
      ))}
    </div>
  );
};

export default ProductsSection;
