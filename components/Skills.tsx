import React from 'react';
import styles from '../styles/Skills.module.css';

const Skills = () => {
  const skillsData = [
    {
      category: 'Programming Languages',
      skills: ['Python', 'C/C++', 'PHP'],
    },
    {
      category: 'Web Development',
      skills: ['HTML', 'CSS', 'Flask', 'FastAPI'],
    },
    {
      category: 'Databases',
      skills: ['MySQL'],
    },
    {
      category: 'Big Data Technologies',
      skills: ['Hadoop', 'Pig', 'Hive', 'Spark'],
    },
    {
      category: 'Machine Learning and Deep Learning',
      skills: ['Sklearn', 'TensorFlow', 'Keras', 'OpenCV'],
    },
    {
      category: 'Text Analytics',
      skills: ['SAS', 'SAS Enterprise Miner', 'SAS Text Analytics'],
    },
    {
      category: 'Tools',
      skills: ['Anaconda', 'VS Code'],
    },
  ];

  const renderSkillsItems = () => {
    return skillsData.map((item, index) => (
      <div key={index} className={styles.skillCategory}>
        <h3>{item.category}</h3>
        <ul className={styles.skillList}>
          {item.skills.map((skill, i) => (
            <li key={i} className={styles.skillItem}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    ));
  };

  return (
    <section id ="skills" className={styles.skillsSection}>
      <h2>Skills</h2>
      <div className={styles.skillsContainer}>{renderSkillsItems()}</div>
    </section>
  );
};

export default Skills;
