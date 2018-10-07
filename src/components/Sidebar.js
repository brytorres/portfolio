import React, { Component } from 'react';
import config from '../config/config';

import styles from '../styles/sidebar.module.scss';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

class Sidebar extends Component {
  render() {
    return (
      <div className={styles.sidebar}>

        <div className={styles.top}>
          <div className={styles.image}></div>
          <div className={styles.about}>
            <p>About bio here.</p>
          </div>
        </div>

        <hr/>

        <div className={styles.bottom}>

          <div className={styles.links}>
            <a href={config.github} className={styles.link}>
              <i className="fab fa-github"></i>
            </a>
            <a href={config.twitter} className={styles.link}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href={config.soundcloud} className={styles.link}>
              <i className="fab fa-soundcloud"></i>
            </a>
          </div>


          <div className={styles.resume}>
            <i class="fas fa-file"></i>
            <br />
            <p>Download my resume</p>
          </div>

          <p className={styles.credit}>
            Built with ⚡️ and 🍕 using Gatsby
          </p>

        </div>

      </div>
    );
  }
}

export default Sidebar;