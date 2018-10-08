import React, { Component } from 'react';

import styles from '../styles/experience.module.scss';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      year: this.setYear
    }
  }
  
  render() {

    const start = this.props.startDate
    const end = this.props.endDate
    const year = start === end ? `${start}` : `${start} - ${end}`;

    const logo = `http:${this.props.logo}`

    const bgImage = {
      backgroundImage: `url(${logo})`
    }

    return (
      <div className={styles.experience}>
      
        <div className={styles.image} style={bgImage}></div>

        <a href={this.props.employerUrl}>
          <h4 className={styles.employer}>
            {this.props.employer}
          </h4>
        </a>

        <p className={styles.title}>
          {this.props.title}
        </p>

        <p className={styles.year}>
          {year}
        </p>

        <p className={styles.description}>
          {this.props.description}
        </p>
        
      </div>
    );
  }
}

export default Experience;