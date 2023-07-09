import React, { useEffect } from 'react';
import { IconType } from 'react-icons';
import { FaGraduationCap } from 'react-icons/fa';
import { AiOutlineCalendar } from 'react-icons/ai';
import { RiMapPin2Line } from 'react-icons/ri';
import { VscCircleFilled } from 'react-icons/vsc';
import styles from '../styles/Education.module.css';

const educationData = [
  {
    institution: 'Manipal Institute of Technology',
    location: 'Manipal, India',
    degree: 'Data Science and Engineering',
    date: 'Oct 2020 – May 2024',
    icon: FaGraduationCap,
  },
  {
    institution: 'Delhi Public School, Ranchi',
    location: 'Ranchi, India',
    degree: 'CBSE XII Board',
    date: 'Jun 2018 - Jun 2020',
    icon: FaGraduationCap,
  },
  {
    institution: 'D.A.V Public School, Gandhi Nagar',
    location: 'Ranchi, India',
    degree: 'CBSE X Board',
    date: 'May 2018',
    icon: FaGraduationCap,
  },
];

const EducationSection = () => {
  useEffect(() => {
    const containers = document.querySelectorAll('.timeline .container');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    });

    containers.forEach((container) => {
      observer.observe(container);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const renderEducationItems = () => {
    return educationData.map((education, index) => (
      <div key={index} className={`${styles.container} ${styles.animate}`}>
        <div className={styles.circle}>
          <VscCircleFilled className={styles.icon} />
        </div>
        <div className={styles.content}>
          <h3>{education.institution}</h3>
          <p>
            <RiMapPin2Line /> {education.location}
          </p>
          <p>
            <FaGraduationCap /> {education.degree}
          </p>
          <p>
            <AiOutlineCalendar /> {education.date}
          </p>
        </div>
      </div>
    ));
  };
  
  return (
    <section id="education" className={styles.educationSection}>
      <h2 className={styles.sectionHeading}>Education</h2>
      <div className={`${styles.timeline} timeline vertical-timeline--animate vertical-timeline--two-columns`}>
        <div className={`${styles.verticalLine} vertical-timeline__line`} />
        {renderEducationItems()}
      </div>
    </section>
  );
};

export default EducationSection;
