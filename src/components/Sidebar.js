import React, { Component } from 'react';
import config from '../config/config';

import styles from '../styles/sidebar.module.scss';

class Sidebar extends Component {
  constructor(props){
    super(props);

    this.state = {
      roles: config.roles
    };
  }


  render() {

    return (
      <div className={styles.sidebar}>

        <div className={styles.top}>
          <div className={styles.image}></div>
          <div className={styles.roles}>
            <ul>
              { this.state.roles.map((role, i) => {
                return <li key={i}>{role}</li>
              })}
            </ul>
          </div>
          <div className={styles.about}>
            <p>A creator of stuff that loves technology, art, and philosophy. I blend the 3 together with occasional spurts of gaming, nature. Music is my hearts rhythym, code is my brains language.</p>
          </div>
        </div>

        <hr/>

        <div className={styles.bottom}>

          <div className={styles.links}>
            <a href={config.linkedin} className={styles.link} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href={config.github} className={styles.link} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href={config.twitter} className={styles.link} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href={config.soundcloud} className={styles.link} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-soundcloud"></i>
            </a>
          </div>


          <div className={styles.resume}>
            <i className="fas fa-file"></i>
            <br />
            <p>Download my resume</p>
          </div>

          <p className={styles.credit}>
            Built with <span role="img" aria-label="magic">⚡️</span> and <span role="img" aria-label="pizza">🍕</span> using <a href="https://www.gatsbyjs.org/">GatsbyJS</a>
          </p>

        </div>

      </div>
    );
  }
}

export default Sidebar;