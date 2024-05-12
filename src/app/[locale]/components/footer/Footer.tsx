import styles from './footer.module.scss';

export const Footer = () => (
  <footer className={styles['footer']}>
    <nav>
      <ul>
        <li className={styles['designer']}>
          <span>@Dmytro Kuziaiev</span>
        </li>
        {/*<li>*/}
        {/*  <a href="">Terms of Service</a>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <a href="">Privacy Policy</a>*/}
        {/*</li>*/}
      </ul>
    </nav>
  </footer>
);
