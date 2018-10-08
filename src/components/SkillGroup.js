import React, { Component } from 'react';

import styles from '../styles/skills.module.scss';

class SkillGroup extends Component {
  
  render() {

    const skills = this.props.skills

    skills.sort(function (a, b) {
      return a.priority - b.priority;
    });

    return (
      <div className={styles.skillsGroup}>

        <h5>{this.props.title}</h5>

        <ul className={styles.skillsList}>
          { skills.map((skill, i) => {
              return <li key={i}>{skill.title}</li>
            })
          }
        </ul>

      </div>
    );
  }
}

export default SkillGroup;