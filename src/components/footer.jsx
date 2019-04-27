import React from "react";
import {CCIcon} from "./icons";

const Footer = () => (
    <footer id="colophon" className="site-footer has-ui-font">
        <div className="footer-widgets">
            <section
                id="custom_html-2"
                className={`widget_text widgetwidget__footer
widget_custom_html`}>
                <h4 className="widgettitle">License</h4>
                <div className="textwidget custom-html-widget">
                    <p>
                        Copyright ©
                        {" "}
                        <span property="cc:attributionName">
                            John Jackson
                        </span>
                    </p>
                    <p>
                        <CCIcon
                            height="32"
                            style={{
                                display: "block",
                                float: "left",
                                marginRight: "0.5em",
                                marginTop: "0.25em"
                            }}/>
                        {" "}
                        All content by John on this site is licensed under a
                        {" "}
                        <a
                            rel="license"
                            href={`http://creativecommons.org/licenses/by-sa/4.0
/`}>
                            Creative Commons Attribution-ShareAlike 4.0
                            {" "}
                            International License
                        </a>.
                    </p>
                </div>
            </section>
            <section
                id="custom_html-8"
                className="widget_text widget widget__footer widget_custom_html"
            >
                <h4 className="widgettitle">Privacy</h4>
                <div className="textwidget custom-html-widget">
                    <p>
                        This website doesn't collect or store anything about you
                        {" "}
                        or any of its users. (Why would I do that?)
                    </p>
                </div>
            </section>
        </div>
    </footer>
);

export default Footer;