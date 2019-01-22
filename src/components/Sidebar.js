import React, { Component } from 'react';

import styles from '../styles/sidebar.module.scss';

class Sidebar extends Component {
  
  render() {
    
    const image = `http:${this.props.image}`

    const bgImage = {
      backgroundImage: `url('https://media.licdn.com/dms/image/C4E03AQEvMIFs8k_i6A/profile-displayphoto-shrink_200_200/0?e=1553731200&v=beta&t=_JjzA7nm41YWBstjNnrN7mI1AF-uo6itgi0zDXWxqhQ')`,
    }

    return (
      <div className={styles.sidebar}>

        <div className={styles.top}>
          <div className={styles.image} style={bgImage}></div>
          <div className={styles.roles}>
            <ul>
              { this.props.roles.map((role, i) => {
                return <li key={i}>{role}</li>
              })}
            </ul>
          </div>
          <div className={styles.about}>
            <p>{this.props.about.about}</p>
          </div>
        </div>

        <hr/>

        <div className={styles.bottom}>

          <div className={styles.links}>
            <a href={this.props.linkedIn} className={styles.link} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href={this.props.github} className={styles.link} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href={this.props.twitter} className={styles.link} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href={this.props.soundcloud} className={styles.link} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-soundcloud"></i>
            </a>
          </div>


          <div className={styles.resume}>
            <a href="https://www.dropbox.com/s/uldbjxm8ggtei0j/2019_BryanTorresResume.pdf?dl=0">
              <i className="fas fa-file"></i>
              <br />
              <p>Download my resume</p>
            </a>
          </div>

          {/* <p className={styles.credit}>
            Built with <span role="img" aria-label="magic">⚡️</span> and <span role="img" aria-label="pizza">🍕</span> using <a href="https://www.gatsbyjs.org/">GatsbyJS</a>
          </p> */}

        </div>

      </div>
    );
  }
}

export default Sidebar;