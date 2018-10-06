import React, { Component } from 'react';
// import config from '../config';

import styles from '../styles/sidebar.module.scss';

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
          <i class="fab fa-soundcloud"></i>

        </div>

      </div>
    );
  }
}

export default Sidebar;