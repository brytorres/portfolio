import React from 'react'
import { graphql } from "gatsby"
import Layout from '../layout/Layout'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import Skills from '../components/SkillsSection'

import styles from '../styles/main.module.scss'

const IndexPage = props => {

    const siteInfo = props.data.allContentfulSiteInfo.edges[0].node
    const experience = props.data.allContentfulExperience.edges
    const clientProjects = props.data.allContentfulClientProjects.edges
    const myProjects = props.data.allContentfulMyProjects.edges
    const skills = props.data.allContentfulCategories.edges

    return (

    <Layout>

      <h3 className={styles.title}>
        {siteInfo.headingTitle}
      </h3>

      <h5 className={styles.tagline}>
          {siteInfo.tagline}
      </h5>

      <p className={styles.about}>
        {siteInfo.miniBio.miniBio}
      </p>

      <ExperienceSection 
        experience = {experience}
      />

      <ProjectsSection 
        clientProjects = {clientProjects}
        myProjects = {myProjects}
      />

      <Skills 
        skills = {skills}
      />
    
    </Layout>
    
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allContentfulSiteInfo {
      edges {
        node {
          headingTitle
          tagline
          siteUrl
          miniBio {
            miniBio
          }
        }
      }
    }
    
    allContentfulExperience {
      edges {
        node {
          jobTitle
          employer
          employerLogo {
            fluid {
              src
            }
          }
          url
          startDate
          endDate
          description {
            description
          }
          priority
        }
      }
    }
    
    allContentfulClientProjects{
      edges {
        node {
          title
          url
          image {
            fluid {
              src
            }
          }
          description {
            description
          }
          technologiesUsed
          priority
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
          priority
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
          priority
        }
      }
    }
  }
`
