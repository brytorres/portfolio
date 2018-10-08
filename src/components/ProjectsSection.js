import React, { Component } from 'react'
import Project from '../components/Project'

import styles from '../styles/projects.module.scss';

class ProjectsSection extends Component {
  render() {

    const clientProjects = this.props.clientProjects

    const myProjects = this.props.myProjects

    return (
      <div className={styles.projectsSection}>

        <h3>Client Projects</h3>

        <div className={styles.projectsGroup}>

          {
            clientProjects.map((project, i) => {
              const node = project.node
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
              return <Project
                key={i}
                client={node.title}
                projectUrl={node.url}
                description={node.description.description}
                technologies={node.technologiesUsed}
              />
            })
          }

        </div>

      </div>
    );
  }
}

export default ProjectsSection;