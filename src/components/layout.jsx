/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {StaticQuery, graphql} from "gatsby";
import Sidebar from "./sidebar";
import Footer from "./footer";

import Header from "./header";
import "normalize.css";
import "./styles/elements.css";
import "./styles/typography.css";
import "./styles/header-footer.css";
import "./styles/navigation.css";
import "./styles/widgets.css";
import "./styles/content.css";
import "./styles/wp-blocks.css";
import "./styles/accessibilitiy-clearings.css";
import "./styles/media.css";
// import "./layout.css";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title,
            description
          }
        }
      }
    `}
    render={(data) => (
      <Fragment>
        <div id="page" className="site">
            <a className="skip-link screen-reader-text" href="#content">
                Skip to content
            </a>
            <Header
                siteTitle={data.site.siteMetadata.title}
                siteDescription={data.site.siteMetadata.description} />
            <div id="content" className="site-content">
                <main>{children}</main>
                <Sidebar/>
            </div>
            <Footer />
        </div>
      </Fragment>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
