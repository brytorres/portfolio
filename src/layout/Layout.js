import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Sidebar from '../components/Sidebar'
import config from '../config/config'

import main from '../styles/main.module.scss';
import '../styles/sidebar.module.scss';
import '../../node_modules/normalize.css/normalize.css';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={config.title}
          meta={[
            { name: 'description', content: config.description },
            { name: 'keywords', content: config.keywords },
          ]}
        >
          <html lang="en" />
        </Helmet>

        <Sidebar />

        <div className={main.content}>
          {children}
        </div>

      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
