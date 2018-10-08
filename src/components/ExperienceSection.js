import React, { Component } from 'react'
import Experience from '../components/Experience'

import styles from '../styles/experience.module.scss';

class ExperienceSection extends Component {
  render() {

    const allExperience = this.props.experience

    allExperience.sort(function (a, b) {
      return a.node.priority - b.node.priority;
    });

    return (
      <div className={styles.experienceSection}>

        <h3>Experience</h3>

        <div className={styles.experienceGroup}>

          { 
            allExperience.map((experience, i) => {
              return <Experience
                        key = {i}
                        employer = {experience.node.employer}
                        employerUrl = {experience.node.url}
                        title = {experience.node.jobTitle}
                        description = {experience.node.description.description}
                        startDate = {experience.node.startDate}
                        endDate = {experience.node.endDate}
                        logo = {experience.node.employerLogo.fluid.src}
                      />
            }) 
          }
        
        </div>

      </div>
    );
  }
}

export default ExperienceSection;
