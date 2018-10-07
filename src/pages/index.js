import React from 'react'
import Layout from '../layout/Layout'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import Skills from '../components/SkillsSection'

import config from '../config/config'
import styles from '../styles/main.module.scss'

const IndexPage = () => (
  <Layout>

    <h3 className={styles.title}>
      {config.homeTitle}
    </h3>

    <h5 className={styles.tagline}>
      {config.roleTagline}
    </h5>

    <p className={styles.about}>
      {config.minibio}
    </p>

    <ExperienceSection />

    <ProjectsSection />

    <Skills />
    
  </Layout>
)

export default IndexPage
