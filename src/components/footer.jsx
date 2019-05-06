import React from "react";
import classnames from "classnames";
import styles from "./footer.module.css";
import widgetStyles from "../styles/widgets.module.css";
import {CCIcon} from "./icons";

const Footer = () => (
    <footer
        id="colophon"
        className={classnames(
            styles.footerWrapper,
            "has-ui-font",
            "smallscreen-padding"
        )}
    >
        <div className={classnames(styles.footer, widgetStyles.widgetArea)}>
            <section className={classnames(
                widgetStyles.widget,
                styles.footerWidget)}
            >
                <p>
                    Copyright ©{" "}
                    <span property="cc:attributionName">John Jackson</span>
                </p>
                <p>
                    <CCIcon height="32" className={styles.ccIcon} />{" "}
                    All content by John on this site is licensed under a {" "}
                    <a
                        rel="license"
                        href="http://creativecommons.org/licenses/by-sa/4.0"
                    >
                        Creative Commons Attribution-ShareAlike 4.0{" "}
                        International License
                    </a>
                    .
                </p>
            </section>
            <section className={classnames(
                widgetStyles.widget,
                styles.footerWidget)}
            >
                <p>
                    This website doesn't collect or store anything about{" "}
                    you or any of its users.
                </p>
            </section>
        </div>
    </footer>
);

export default Footer;
