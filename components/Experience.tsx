import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { AiOutlineCalendar } from 'react-icons/ai';
import { RiMapPin2Line } from 'react-icons/ri';
import { VscCircleFilled } from 'react-icons/vsc';
import styles from '../styles/Experience.module.css';

const Experience = () => {
  const experienceData = [
    {
      company: 'OpenWeaver',
      position: 'Technical Writing Intern',
      location: 'Remote',
      description:
        'Developed clear and concise technical documentation, user guides, and tutorials to facilitate understanding of different libraries under various languages. Conducted in-depth research on complex technical topics, ensuring accurate and up-to-date information for documentation purposes.',
      skills: ['Technical Writing', 'Research and Analysis', 'Information Synthesis'],
      date: 'Feb 2023 – Present',
    },
    {
      company: 'Inspira Enterprises',
      position: 'Data Analytics Intern',
      location: 'Ranchi',
      description:
        'Responsible for supporting the data analysis activities such as collecting, cleaning, and analysing data from various sources to help identify trends, patterns, and insights that can inform business decisions. Collaborated with CMPDIL (Under Ministry of Coal) to develop a robust web application for CSIS, empowering efficient data management and streamlined processes for critical information within the coal industry.',
      skills: ['SAS Enterprise Miner', 'SAS Text Analytics', 'SAS Visual Analytics', 'HTML', 'CSS', 'JS'],
      date: 'Jun 2023 - Jul 2023',
    },
    {
      company: 'CMPDI, GOI',
      position: 'Big Data Intern',
      location: 'Ranchi',
      description:
        'Text mining and analytic on SAS Enterprise Miner of data based on safety issues and accidents occurring on various coal fields and mines.',
      skills: ['SAS Enterprise Miner', 'SAS Text Analytics', 'SAS Visual Analytics', 'Python'],
      date: 'Dec 2022 - Jan 2023',
    },
    {
      company: 'OpenWeaver',
      position: 'Developer Relations Intern',
      location: 'Remote',
      description:
        'Worked on marketing outreach initiatives within the developer community. Built presence and promoted awareness of kandi on discussion forums.',
      skills: ['Marketing', 'Creativity', 'Social Media Marketing', 'Writing'],
      date: 'Sep 2022 - Nov 2022',
    },
  ];

  const renderExperienceItems = () => {
    return experienceData.map((experience, index) => (
      <div key={index} className={`${styles.container} ${styles.animate}`}>
        <div className={styles.verticalLine}></div>
        <div className={styles.content}>
          <h3>
            <VscCircleFilled className={styles.icon} />
            {experience.position}
          </h3>
          <p>
            {experience.company}, <RiMapPin2Line /> {experience.location}
          </p>
          <p>{experience.description}</p>
          <div className={styles.skills}>
            <h4>Skills:</h4>
            <ul className={styles.skillList}>
              {experience.skills.map((skill, i) => (
                <li key={i} className={styles.skillItem}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <p>
            <AiOutlineCalendar /> {experience.date}
          </p>
        </div>
      </div>
    ));
  };

  return (
    <section id = "experience" className={styles.experienceSection}>
      <h2>Experience</h2>
      <div className={styles.experienceContainer}>{renderExperienceItems()}</div>
    </section>
  );
};

export default Experience;
