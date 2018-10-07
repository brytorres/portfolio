import React, { Component } from 'react'
import SkillGroup from '../components/SkillGroup'
// import config from '../config/config';

import styles from '../styles/skills.module.scss';

class SkillsSection extends Component {
  render() {

    const skills = [
      [
        'HTML5',
        'CSS3',
        'JavaScript',
        'PHP',
        'Python',
        'Git'
      ],
      [
        'Laravel',
        'WordPress',
        'Vue',
        'React',
        'jQuery',
        'Sass',
        'Bootstrap 4',
        'Materialize'
      ],
      [
        'UI / UX Design',
        'Audio Engineering',
        'Music Production',
        'Graphic Design',
        'Motion Graphics',
        'Video Editing'
      ],
      [
        [
          'Adobe CC',
          'Photoshop',
          'Illustrator',
          'After Effects',
          'Premiere',
          'InDesign',
        ],
        'Ableton Live',
        'Logic Pro X',
        'Pro Tools',
        'Blender 3D',
        'Sketchup'
      ]
    ];

    return (
      <div className={styles.skills}>

        <h3>Skills</h3>

        <div className={styles.skillsSection}>
          <SkillGroup 
            title = 'Languages'
            skills = {skills[0]}
          />

          <SkillGroup 
            title = 'Frameworks & Libraries'
            skills = {skills[1]}
          />

          <SkillGroup 
            title = 'Media Design'
            skills = {skills[2]}
          />

          <SkillGroup 
            title = 'Software'
            skills = {skills[3]}
          />
        </div>


      </div>
    );
  }
}

export default SkillsSection;