import React, { Component } from 'react'

import styles from '../styles/sidebar.module.scss';

class Sidebar extends Component {
  render() {
    return (
      <div className={styles.sidebar}>
        <h3>Sidebar</h3>
      </div>
    );
  }
}

export default Sidebar;