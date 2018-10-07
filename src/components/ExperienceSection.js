import React, { Component } from 'react'
import { graphql } from "gatsby"
import * as PropTypes from "prop-types"
import Experience from '../components/Experience'
// import config from '../config/config';

import styles from '../styles/experience.module.scss';

const propTypes = {
  data: PropTypes.object.isRequired,
}

class ExperienceSection extends Component {
  render() {
    const experience = this.props.data

    console.log(experience)

    return (
      <div className={styles.experienceSection}>

        <h3>Experience</h3>

        <div className={styles.experienceGroup}>

          <Experience 
            employer = 'Vistana' 
            employerUrl = 'https://torvel.us'
            title = 'Front End Developer'
            description = 'I did this, that and the other'
            startDate = '2018'
            endDate = 'current'
            logo = 'urlHere' 
          />

          <Experience 
            employer = 'Tourico Holidays' 
            employerUrl = 'https://torvel.us'
            title = 'Web Developer'
            description = 'I did this, that and the other'
            startDate = '2017'
            endDate = '2018'
            logo = 'urlHere' 
          />

          <Experience 
            employer = 'Torvel, Inc.' 
            employerUrl = 'https://torvel.us'
            title = 'Developer/Consultant'
            description = 'I did this, that and the other'
            startDate = '2012'
            endDate = 'current'
            logo = 'urlHere' 
          />
        
        </div>

      </div>
    );
  }
}

ExperienceSection.propTypes = propTypes

export default ExperienceSection;

export const pageQuery = graphql`
  query {
    allContentfulExperience {
      edges {
        node {
          jobTitle
          employer
          employerLogo {
            fixed(width: 400, height: 140) {
              base64
              src
              srcSet
              height
              width
            }
          }
          url
          startDate
          endDate
        }
      }
    }
  }
`