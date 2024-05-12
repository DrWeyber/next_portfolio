'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import styles from './testimonials.module.scss';
import { useTranslations } from 'next-intl';
import { TestimonialsBackground } from '@/app/[locale]/features/homepage/sections/testimonials/TestimonialsBackground';

const testimonials = [
  {
    id: 1,
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper lectus quis interdum facilisis. Praesent accumsan hendrerit justo non interdum.',
    username: 'Damian',
    jobTitle: ''
  },
  {
    id: 2,
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper lectus quis interdum facilisis. Praesent accumsan hendrerit justo non interdum.',
    username: 'Damian',
    jobTitle: ''
  },
  {
    id: 3,
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper lectus quis interdum facilisis. Praesent accumsan hendrerit justo non interdum.',
    username: 'Damian',
    jobTitle: ''
  },
  {
    id: 4,
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper lectus quis interdum facilisis. Praesent accumsan hendrerit justo non interdum.',
    username: 'Damian',
    jobTitle: ''
  },
  {
    id: 5,
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper lectus quis interdum facilisis. Praesent accumsan hendrerit justo non interdum.',
    username: 'Damian',
    jobTitle: ''
  }
];

export const Testimonials = () => {
  const t = useTranslations();
  return (
    <div id="testimonials" className={`${styles['testimonials']} ${styles['content-section']}`}>
      <div className={styles['title-container']}>
        <span className={styles['category-title']}>{t('testimonials.testimonials')}</span>
        <h2 className={styles['slogan']}>{t('testimonials.our_testimonials')}</h2>
      </div>

      <div className={styles['card-container']}>
        <Swiper
          modules={[Autoplay]}
          centeredSlides={true}
          slidesPerView={1.3}
          slidesOffsetBefore={-30}
          spaceBetween={24}
          direction="horizontal"
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false
          }}
          speed={2500}
          grabCursor
          wrapperTag="ul"
          className={styles['swiper-container-custom']}
          breakpoints={{
            769: {
              slidesPerView: 'auto',
              direction: 'vertical',
              slidesOffsetBefore: 0,
              spaceBetween: 0,
              autoHeight: true
            }
          }}
        >
          {testimonials.map(({ id, testimonial, jobTitle, username }) => (
            <SwiperSlide key={id} tag="li" className={styles['swiper-slide-custom']}>
              <div className={styles['card']}>
                <span className={styles['quote']}>“</span>
                <p className={styles['user-opinion']}>{testimonial}</p>
                <div className={styles['user-info']}>
                  <span className={styles['user-name']}>{username}</span>
                  <span className={styles['user-job-title']}>{jobTitle}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles['card-container']}>
        <Swiper
          modules={[Autoplay]}
          centeredSlides={true}
          slidesPerView={1.5}
          slidesOffsetBefore={-30}
          spaceBetween={24}
          direction="horizontal"
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            reverseDirection: true
          }}
          speed={2500}
          grabCursor
          wrapperTag="ul"
          className={styles['swiper-container-custom']}
          breakpoints={{
            769: {
              direction: 'vertical',
              slidesPerView: 'auto',
              slidesOffsetBefore: 0,
              spaceBetween: 0,
              autoHeight: true
            }
          }}
        >
          {testimonials.map(({ id, testimonial, jobTitle, username }) => (
            <SwiperSlide key={id} tag="li" className={styles['swiper-slide-custom']}>
              <div className={styles['card']}>
                <span className={styles['quote']}>“</span>
                <p className={styles['user-opinion']}>{testimonial}</p>
                <div className={styles['user-info']}>
                  <span className={styles['user-name']}>{username}</span>
                  <span className={styles['user-job-title']}>{jobTitle}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <TestimonialsBackground />
    </div>
  );
};

export default Testimonials;
