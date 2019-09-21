import React, {Fragment} from "react";
import {StaticQuery, graphql} from "gatsby";
import {make as Footer} from "./Footer.bs";
import {make as Header} from "./Header.bs";
import PropTypes from "prop-types";
import Sidebar from "./sidebar";
import VisuallyHidden from "@reach/visually-hidden";
import classnames from "classnames";
import styles from "./layout.module.css";

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
    children: PropTypes.node.isRequired,
    entryHeader: PropTypes.node
};

export default Layout;
