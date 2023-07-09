import React from 'react';
import styles from '../styles/Bio.module.css';

const Bio = () => {
  return (
    <section id="bio" className={`${styles.bioSection} bg-white py-10`}>
      <div className={`container mx-auto flex flex-wrap items-center justify-between ${styles.bioContainer}`}>
        <div className={`w-full md:w-1/2 mb-8 md:mb-0 ${styles.bioImageWrapper}`}>
          <img
            src="Profile.jpg"
            alt="Your Name"
            className={`${styles.bioImage} w-full rounded-lg`}
          />
        </div>
        <div className={`w-full md:w-1/2 ${styles.bioText}`}>
          <h2 className={`${styles.bioTitle} text-3xl font-bold mb-4`}>About Me</h2>
          <p className={`${styles.bioDescription} text-lg`}>
            Greetings! I'm Aryaman, a dedicated data professional with a passion for leveraging data to drive impactful outcomes. 
            I recently completed an internship at Inspira Enterprises, where I contributed to data analysis, generating valuable insights to inform strategic business decisions.<br></br>
            As a former big data intern at CMPDI, GOI, I focused on text mining and analytics, uncovering crucial insights to enhance safety measures in coal fields and mines.<br></br>
            With a diverse background, I have delivered impactful solutions such as developing an AI Tutor using OpenAI's GPT-3 language model for automated tutoring and 
            implementing Gender and Age Detection models using advanced techniques like CNN with Skip Connections, ResNet, and more.<br></br>
            I also worked on projects like the Carbon Emission Calculator, providing actionable recommendations for reducing household CO2 emissions, 
            and developed an Anime Recommender System using techniques like Cosine Similarity, KNN, and Association Rules to enhance anime recommendations based on user viewing history.<br></br>
            I am passionate about leveraging data to revolutionize industries and bring value to teams and projects. Let's connect to discuss my journey as a data professional and 
            explore how I can make a positive impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Bio;
