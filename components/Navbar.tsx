// Navbar.tsx
import React from 'react';
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'My CV';
    link.click();
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.navLinks}>
          <Link legacyBehavior href="#bio">
            <a>About</a>
          </Link>
          <Link legacyBehavior href="#education">
            <a>Education</a>
          </Link>
          <Link legacyBehavior href="#skills">
            <a>Skills</a>
          </Link>
          <Link legacyBehavior href="#experience">
            <a>Experience</a>
          </Link>
          <Link legacyBehavior href="#projects">
            <a>Projects</a>
          </Link>
          <a className={styles.cvLink} onClick={downloadCV}>
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
