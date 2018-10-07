import React from 'react'
import { graphql } from "gatsby"
import Layout from '../layout/Layout'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import Skills from '../components/SkillsSection'

import config from '../config/config'
import styles from '../styles/main.module.scss'

const IndexPage = props => {

    const experience = props.data.allContentfulExperience.edges
    const clientProjects = props.data.allContentfulClientProjects.edges
    const myProjects = props.data.allContentfulMyProjects.edges
    const skills = props.data.allContentfulCategories.edges

    console.log(experience);
    console.log(clientProjects);
    console.log(myProjects);
    console.log(skills);


    return (
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
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allContentfulExperience {
      edges {
        node {
          jobTitle
          employer
          employerLogo {
            fixed(width: 400, height: 140) {
              # base64
              src
              # srcSet
              height
              width
            }
          }
          url
          startDate
          endDate
          description {
            description
          }
        }
      }
    }
    
    allContentfulClientProjects{
      edges {
        node {
          title
          url
          image {
            fixed(width: 400, height: 140) {
              # base64
              src
              # srcSet
              height
              width
            }
          }
          description {
            description
          }
          technologiesUsed
        }
      }
    }
    
    allContentfulMyProjects{
      edges{
        node {
          title
          url
          description{
            description
          }
          technologiesUsed
          version
        }
      }
    }
    
    allContentfulCategories {
      edges {
        node {
          title
          skills {
            title
            group
            priority
          }
        }
      }
    }
  }
`
