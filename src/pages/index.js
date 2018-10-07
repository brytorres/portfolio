import React from 'react'
import { graphql } from "gatsby"
import Layout from '../layout/Layout'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import Skills from '../components/SkillsSection'

import styles from '../styles/main.module.scss'

const IndexPage = props => {

    const siteInfo = props.data.allContentfulSiteInfo.edges[0].node
    // const experience = props.data.allContentfulExperience.edges
    // const clientProjects = props.data.allContentfulClientProjects.edges
    // const myProjects = props.data.allContentfulMyProjects.edges
    // const skills = props.data.allContentfulCategories.edges

    console.log(siteInfo);
    // console.log(experience);
    // console.log(clientProjects);
    // console.log(myProjects);
    // console.log(skills);


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

    <ExperienceSection />

    <ProjectsSection />

    <Skills />
    
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
