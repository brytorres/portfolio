import React, { Component } from 'react'
import SkillGroup from '../components/SkillGroup'
// import config from '../config/config';

import styles from '../styles/skills.module.scss';

class SkillsSection extends Component {
  render() {

    const skillsGroups = this.props.skills;
    
    skillsGroups.sort(function (a, b) {
      return a.node.priority - b.node.priority;
    });

    return (
      <div className={styles.skills}>

        <h3>Skills</h3>

        <div className={styles.skillsSection}>

          {
            skillsGroups.map((skillGroup, i) => {
              const node = skillGroup.node
              return <SkillGroup
                key = {i}
                title = {node.title}
                skills = {node.skills}
              />
            })
          }

        </div>


      </div>
    );
  }
}

export default SkillsSection;