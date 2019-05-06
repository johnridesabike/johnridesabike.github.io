import {Link} from "gatsby";
import PropTypes from "prop-types";
import React, {Fragment, useState} from "react";
import VisuallyHidden from "@reach/visually-hidden";
import classnames from "classnames";
import {MenuIcon, DismissIcon} from "./icons";
import styles from "./menu.module.css";

function Menu({links, location}) {
    const [menuToggled, setMenuToggled] = useState("");
    return (
        <Fragment>
            <div
                id="toggle-button"
                className={classnames(styles.menuButton, menuToggled)}
            >
                <button
                    className={styles.toggle}
                    aria-controls="primary-menu"
                    aria-expanded="false"
                    onClick={() => (
                        (menuToggled === "")
                        ? setMenuToggled(styles.toggled)
                        : setMenuToggled("")
                    )}
                >
                    <VisuallyHidden>Menu</VisuallyHidden>
                    <MenuIcon className={classnames(
                        styles.toggleIcon,
                        styles.menuIcon
                    )}/>
                    <DismissIcon className={classnames(
                        styles.toggleIcon,
                        styles.dismissIcon
                    )}/>
                </button>
            </div>
            <nav
                id="site-navigation"
                className={classnames("has-ui-font", styles.navigation)}
            >
                <ul
                    id="primary-menu"
                    className={classnames(styles.menu, menuToggled)}
                    aria-expanded="false"
                >
                    {links.map((link) => (
                        <li key={link.url} className={styles.menuItem}>
                            <Link
                                to={link.url}
                                className={classnames(
                                    styles.menuLink,
                                    {
                                        [`${styles.menuLink__current}`]:
                                        location.pathname === link.url
                                    }
                                )}
                            >
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </Fragment>
    );
}

Menu.propTypes = {
    links: PropTypes.array
};

Menu.defaultProps = {};

export default Menu;
