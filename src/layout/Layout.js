import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Sidebar from '../components/Sidebar'
import config from '../config'

import base from '../styles/base.module.scss';
import '../styles/sidebar.module.scss';
import '../../node_modules/normalize.css/normalize.css';

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

        <div className={base.content}>
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
