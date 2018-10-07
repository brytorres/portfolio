import React, { Component } from 'react'
import Project from '../components/Project'
// import config from '../config/config';

import styles from '../styles/projects.module.scss';

class ProjectsSection extends Component {
  render() {

    const technologies = [
      [
        'HTML/CSS',
        'Javascript'
      ],
      [
        'HTML/CSS',
        'Javascript',
        'PHP (Laravel)'
      ],
      [
        'HTML/CSS',
        'Javascript',
        'Python'
      ]
    ]

    const clientProjects = this.props.clientProjects

    const myProjects = this.props.myProjects

    return (
      <div className={styles.projectsSection}>

        <h3>Client Projects</h3>

        <div className={styles.projectsGroup}>

          {
            clientProjects.map((project, i) => {
              const node = project.node
              console.log(node)
              return <Project
                        key = {i}
                        client = {node.title}
                        projectUrl = {node.url}
                        description = {node.description.description}
                        image = {node.image.fluid.src}
                        technologies = {node.technologiesUsed}
                      />
            })
          }

        </div>

        <h3>My Projects</h3>

        <div className={styles.projectsGroup}>

          {
            myProjects.map((project, i) => {
              const node = project.node
              console.log(node)
              return <Project
                key={i}
                client={node.title}
                projectUrl={node.url}
                description={node.description.description}
                technologies={node.technologiesUsed}
              />
            })
          }

          {/* <Project
            client='Retrograde Zone'
            projectUrl='https://www.torvel.us'
            description='I did this, that and the other'
            version='v2.1'
            status='broken'
            technologies={technologies[0]}
          />

          <Project
            client='Mi Casa'
            projectUrl='https://www.eatatmiscasa.com'
            description='I did this, that and the other'
            version='v2.0'
            status='completed'
            technologies={technologies[1]}
          />

          <Project
            client='Pro192 Studios'
            projectUrl='https://www.pro192.com'
            description='I did this, that and the other'
            version='v1.8'
            status='completed'
            technologies={technologies[2]}
          /> */}

        </div>

      </div>
    );
  }
}

export default ProjectsSection;