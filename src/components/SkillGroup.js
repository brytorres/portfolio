import React, { Component } from 'react';

import styles from '../styles/skills.module.scss';

class SkillGroup extends Component {
  
  render() {
    console.log(this.props.skills);

    return (
      <div className={styles.skillsGroup}>

        <h5>{this.props.title}</h5>

        <ul className={styles.skillsList}>
          { this.props.skills.map((skill, i) => {
              {/* console.log(skill) */}
              return <li key={i}>{skill}</li>
            })
          }
        </ul>

      </div>
    );
  }
}

export default SkillGroup;