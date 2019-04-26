import {Link} from "gatsby";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import {Location} from "@reach/router";

const Menu = ({links}) => (
    <Location>
    {({location}) => (
        <Fragment>
        <div className="menu-button" id="toggle-button">
            <button className="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                <span className="screen-reader-text">
                    Menu
                </span>
                <span className="menu-icon">
                    {/* {% include "svg/menu.svg" %} */}
                    Menu open
                </span>
                <span className="dismiss-icon">
                    {/* {% include "svg/dismiss.svg" %} */}
                    Menu close
                </span>
            </button>
        </div>
        <nav id="site-navigation" className="main-navigation has-ui-font">
            <div className="menu-main-menu-container">
                <ul
                    id="primary-menu"
                    className="menu nav-menu"
                    aria-expanded="false">
                {links.map((link) =>
                    <li
                        key={link.url}
                        className={(
                            (location.pathname === link.url)
                            ? "menu-item current-menu-item"
                            : "menu-item"
                        )}>
                        <Link to={link.url}>
                            {link.title}
                        </Link>
                    </li>
                )}
                </ul>
            </div>
        </nav>
        </Fragment>
    )}
    </Location>
);

Menu.propTypes = {
    links: PropTypes.array
};

Menu.defaultProps = {
};

export default Menu;
