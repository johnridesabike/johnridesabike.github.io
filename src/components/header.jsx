import {Link} from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Menu from "./menu";

const Header = ({siteTitle, siteDescription, entryHeader, thumbnail}) => (
    <header
        id="masthead"
        className={
            thumbnail !== undefined
                ? "site-header has-post-thumbnail"
                : "site-header"
        }
    >
        <div id="global-header" className="global-header">
            <div className="site-branding">
                <p className="site-title">
                    <Link to="/" rel="home">
                        {siteTitle}
                    </Link>
                </p>
                <p className="site-description">{siteDescription}</p>
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
