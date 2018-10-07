import React, { Component } from 'react';

import styles from '../styles/projects.module.scss';

class Project extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {

    let image;
    let badges;

    // console.log(this.props.image);

    image = `http:${this.props.image}`
    
    // console.log(image)

    if (this.props.image){
      image = <div className={styles.image}>
                <img src={this.props.image} alt="" />
              </div>
              
    } else{
      image = '';
    }

    if (this.props.version){
      badges = <div className={styles.badges}>
                <div className={styles.version}>{this.props.version}</div>
                <div className={styles.status}>{this.props.status}</div>
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