import {Link} from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = ({siteTitle, siteDescription}) => (
    <header id="masthead" className="site-header">
    {/* site-header
        {{ classes }}{% if thumbnail %} has-post-thumbnail{% endif %} */}
        <div id="global-header" className="global-header">
            <div className="site-branding">
                <p className="site-title">
                    <Link to="/" rel="home">{siteTitle}</Link>
                </p>
                <p className="site-description">
                    {siteDescription}
                </p>
            </div>
        </div>
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
