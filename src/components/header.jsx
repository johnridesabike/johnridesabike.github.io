import {Link} from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import classnames from "classnames";
import Menu from "./menu";
import styles from "./header.module.css";

const Header = ({siteTitle, siteDescription, entryHeader}) => (
    <header
        id="masthead"
        className={classnames(
            styles.headerWrapper,
            "smallscreen-padding",
        )}
    >
        <div id="global-header" className={styles.globalHeader}>
            <div className={styles.branding}>
                <p className={styles.title}>
                    <Link to="/" rel="home" className={styles.linkHome}>
                        {siteTitle}
                    </Link>
                </p>
                <p className={styles.description}>{siteDescription}</p>
            </div>
            <Menu
                links={[
                    {url: "/", title: "Home"},
                    {url: "/resume/", title: "Résumé"}
                ]}
            />
        </div>
        {entryHeader}
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
    siteDescription: PropTypes.string
};

Header.defaultProps = {
    siteTitle: "",
    siteDescription: ""
};

export default Header;
