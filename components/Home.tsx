import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <section className={styles.homeSection}>
      <div className={styles.bgImage}>
        <Image src="/home.jpg" alt="Background Image" layout="fill" objectFit="cover" />
      </div>
      <div className={styles.content}>
        <h1 className={styles.name}>Aryaman</h1>
        <h2 className={styles.position}>Data Science Engineer</h2>
        <div className={styles.socialLinks}>
          <Link legacyBehavior href="https://www.facebook.com/aryaman.anand.716/" >
            <a className={styles.socialLink}>
              <i className="fab fa-facebook-f"></i>
            </a>
          </Link>
          <Link legacyBehavior href="https://twitter.com/AbsterJr" >
            <a className={styles.socialLink}>
              <i className="fab fa-twitter"></i>
            </a>
          </Link>
          <Link legacyBehavior href="https://www.instagram.com/absterjr/" >
            <a className={styles.socialLink}>
              <i className="fab fa-instagram"></i>
            </a>
          </Link>
          <Link legacyBehavior href="https://www.linkedin.com/in/absterjr/" >
            <a className={styles.socialLink}>
              <i className="fab fa-linkedin-in"></i>
            </a>
          </Link>
          <Link legacyBehavior href="https://github.com/absterjr" >
            <a className={styles.socialLink}>
              <i className="fab fa-github"></i>
            </a>
          </Link>
          <a href="mailto:aryamananand5@gmail.com" className={styles.socialLink}>
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
