import React, { Component } from 'react';

import styles from '../styles/projects.module.scss';

class Project extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {

    let image;
    let badges;

    image = `http:${this.props.image}`

    if (this.props.image){
      image = <div className={styles.image}>
                <img src={this.props.image} alt="" />
              </div>
              
    } else{
      image = '';
    }

    if (this.props.technologies){
      badges = <div className={styles.badges}>
                {
                  this.props.technologies.map((techology, i) => {
                    return <div className={styles.tech} key={i}>{techology}</div>
                  })
                }
              </div>
              
    } else{
      badges = '';
    }

    return (
      <div className={styles.project}>

        {image}

        <a href={this.props.projectUrl}>
          <h4 className={styles.client}>
            {this.props.client}
          </h4>
        </a>

        <p className={styles.title}>
          {this.props.title}
        </p>

        <p className={styles.description}>
          {this.props.description}
        </p>

        {badges}
        
      </div>
    );
  }
}

export default Project;