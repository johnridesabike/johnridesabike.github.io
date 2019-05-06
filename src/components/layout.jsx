/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {StaticQuery, graphql} from "gatsby";
import classnames from "classnames";
import styles from "./layout.module.css";
import VisuallyHidden from "@reach/visually-hidden";
import Sidebar from "./sidebar";
import Footer from "./footer";
import Header from "./header";

const Layout = ({children, entryHeader}) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                        description
                    }
                }
            }
        `}
        render={(data) => (
            <Fragment>
                <div id="page" className={styles.site}>
                    <VisuallyHidden>
                        <a className="skip-link" href="#content">
                            Skip to content
                        </a>
                    </VisuallyHidden>
                    <Header
                        siteTitle={data.site.siteMetadata.title}
                        siteDescription={data.site.siteMetadata.description}
                        entryHeader={entryHeader}
                    />
                    <div
                        id="content"
                        className={classnames(
                            styles.content,
                            "smallscreen-padding"
                        )}
                    >
                        {children}
                        <Sidebar />
                    </div>
                    <Footer />
                </div>
            </Fragment>
        )}
    />
);

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
