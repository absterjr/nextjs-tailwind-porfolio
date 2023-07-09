// Footer.tsx
import React from 'react';
import styles from '../styles/Footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container mx-auto">
        <p className={styles.info}>
          The website was made using Next.js and Tailwind CSS.
        </p>
        <p className={styles.sourceCode}>
          <Link legacyBehavior href="https://github.com/absterjr/portfolio" >
            <a className={styles.sourceCodeLink} target="_blank" rel="noopener noreferrer">
              Click here to view source code
            </a>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
