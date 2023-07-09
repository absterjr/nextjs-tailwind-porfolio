import React from 'react';
import styles from '../styles/Projects.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { RiCalendar2Line } from 'react-icons/ri';

const projectsData = [
  {
    name: 'AI Tutor',
    date: 'Apr 2023',
    description: 'AI Tutor is a web-based chatbot that utilizes OpenAI’s GPT-3 language model to provide automated tutoring to students on various topics related to machine learning.',
    image: '/tutor.png',
    githubLink: 'https://github.com/absterjr/AI-Tutor',
  },
  {
    name: 'Gender and Age Detection',
    date: 'Oct 2022 - Dec 2022',
    description: 'To identify the gender into binary categories, male and female using facial features such as skin tone, wrinkles, etc, and to classify their age based on similar features. The baseline model was set as CNN and multiple models were implemented such as CNN with Skip Connections, ResNet, AlexNet, VGGNet, InceptionV3. CNN with Skip Connections achieved the best accuracy of 87.56.',
    image: '/gender.png',
    githubLink: 'https://github.com/absterjr/Gender-and-Age-Detection',
  },
  {
    name: 'Carbon Emission Calculator',
    date: 'Aug 2022',
    description: 'Calculates the total CO2 emission of a household using functions made in JavaScript and suggests changes to be made to reduce the emission if the calculated values pass a certain threshold.',
    image: '/co2.png',
    githubLink: 'https://github.com/absterjr/CO2-Emission-Calculator',
  },
  {
    name: 'Anime Recommender System',
    date: 'May 2022 - Jun 2022',
    description: 'Developed an Anime Recommender System using Cosine Similarity, KNN, and Association Rules, leveraging user preference data and ratings from a dataset of 73,516 users and 12,294 anime, aimed at improving the accuracy and effectiveness of anime recommendations for users based on their viewing history.',
    image: '/anime.png',
    githubLink: 'https://github.com/absterjr/Anime-Recommender-System',
  },
  {
    name: 'Movie Recommender System',
    date: 'May 2022 - Jun 2022',
    description: 'The Movie Recommender System is a Python-based project that utilizes K-Nearest Neighbors algorithm to provide personalized movie recommendations to users based on their input.',
    image: '/movie.png',
    githubLink: 'https://github.com/absterjr/Movie-Recommender-System',
  },
  {
    name: 'Anti-Suicide Chat Bot',
    date: 'Jul 2021 – Aug 2021',
    description: 'A chat bot which talks to people and replies to them based on a set of predefined responses related to suicidal thoughts. The algorithm is using a neural network of 16 neurons to predict the right output based on the input in the intents.json file.',
    image: '/anti-suicide.jpg',
    githubLink: 'https://github.com/absterjr/Chat-Bot',
  },
];

const Projects = () => {
  return (
  <section id="projects" className={styles.projectsSection}>
  <h2 className={styles.heading}>Projects</h2>
  <div className={styles.projectsContainer}>
  {projectsData.map((project, index) => (
  <div key={index} className={styles.projectContainer}>
  <Link legacyBehavior href={project.githubLink} >
  <a target="_blank" rel="noopener noreferrer">
  <div className={styles.projectImage}>
  <Image src={project.image} alt={project.name} layout="fill" objectFit="cover" />
  <div className={styles.projectOverlay}>
  <h3>{project.name}</h3>
  </div>
  </div>
  </a>
  </Link>
  <div className={styles.projectDescription}>
  <p>{project.description}</p>
  <div className={styles.projectDate}>
  <RiCalendar2Line />
  <span> {project.date} </span>
  </div>
  </div>
  </div>
  ))}
  </div>
  </section>
  );
  };
  

export default Projects;
