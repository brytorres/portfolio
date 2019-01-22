import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Sidebar from '../components/Sidebar'

import main from '../styles/main.module.scss';
import '../styles/sidebar.module.scss';
import '../../node_modules/normalize.css/normalize.css';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SidebarQuery {
        allContentfulSiteInfo {
          edges {
            node {
              siteTitle
              tagline
              siteKeywords
              roles
              linkedIn
              github
              twitter
              soundcloud
              about {
                about
              }
              headshot {
                fixed(width: 300, height: 300) {
                  src
                  height
                  width
                }
              }
              resume {
                file {
                  url
                  fileName
                  contentType
                }
              }
            }
          }
        }
      }
    `}
      
    render={data => (
      <>
        <Helmet
          title={data.allContentfulSiteInfo.edges[0].node.siteTitle}
          meta={[
            { name: 'description', content: data.allContentfulSiteInfo.edges[0].node.tagline },
            { name: 'keywords', content: data.allContentfulSiteInfo.edges[0].node.siteKeywords },
          ]}
        >
          <html lang="en" />
        </Helmet>

        <div className={main.content}>
          {data.image}
          {children}
        </div>

        <Sidebar 
          // image = {data.allContentfulSiteInfo.edges[0].node.headshot.fixed.src}
          image='https://media.licdn.com/dms/image/C4E03AQEvMIFs8k_i6A/profile-displayphoto-shrink_200_200/0?e=1553731200&v=beta&t=_JjzA7nm41YWBstjNnrN7mI1AF-uo6itgi0zDXWxqhQ.jpg'
          roles = {data.allContentfulSiteInfo.edges[0].node.roles}
          about = {data.allContentfulSiteInfo.edges[0].node.about}
          linkedIn = {data.allContentfulSiteInfo.edges[0].node.linkedIn}
          github = {data.allContentfulSiteInfo.edges[0].node.github}
          twitter = {data.allContentfulSiteInfo.edges[0].node.twitter}
          soundcloud = {data.allContentfulSiteInfo.edges[0].node.soundcloud}
          resume = {data.allContentfulSiteInfo.edges[0].node.resume.file.url}
        />

      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
