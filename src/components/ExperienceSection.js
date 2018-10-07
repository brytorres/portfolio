import React, { Component } from 'react'
import Experience from '../components/Experience'
// import config from '../config/config';

import styles from '../styles/experience.module.scss';

class ExperienceSection extends Component {
  render() {
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

export default ExperienceSection;