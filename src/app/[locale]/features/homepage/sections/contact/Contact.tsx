'use client';

import Image from 'next/image';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useTranslations } from 'next-intl';

import ContactLogo from '/public/images/contact.png';
import styles from './contact.module.scss';
import { toast } from 'react-toastify';

const defaultFormState = {
  name: '',
  email: '',
  phone: '',
  comment: ''
};

export const Contact = () => {
  const t = useTranslations();
  const [formData, setFormData] = useState(defaultFormState);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const onFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      setFormData(defaultFormState);

      toast.success(t('common.messages.sent'));
    } catch (e) {
      toast.error('Internal error');
    }
  };

  return (
    <div id="contacts" className={`${styles['contact']} ${styles['content-section']}`}>
      <div className={styles['title-container']}>
        <span className={styles['category-title']}>{t('common.contact-us')}</span>
      </div>
      <h2 className={styles['slogan']}>{t('contacts.title')}</h2>
      <div className={styles['form-container']}>
        <form id="contact-form" onSubmit={onFormSubmit} className={styles['contact-form']}>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t('contacts.form.name')}
            type="text"
          />
          <input
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="text"
            placeholder={t('contacts.form.email')}
          />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="text"
            placeholder={t('contacts.form.phone')}
          />
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            placeholder={t('contacts.form.comment')}
          ></textarea>
        </form>
        <button form="contact-form" type="submit" className={`${styles['button']} ${styles['arrow-link']}`}>
          {t('contacts.form.submit')}
          <span></span>
        </button>
        <div className={styles['contact-image']}>
          <Image src={ContactLogo} alt="Contact form logo" />
        </div>
      </div>
    </div>
  );
};
