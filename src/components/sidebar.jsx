import React from "react";
import {Link} from "gatsby";
import johnPic from "../images/john2018.jpg";
import styles from "../styles/widgets.module.css";
import classnames from "classnames";
import {
    ChessIcon,
    GitHubIcon,
    LibraryThingIcon,
    LinkedInIcon
} from "./icons";

const socialMenu = [
    {
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/johnbpjackson/",
        icon: <LinkedInIcon />
    },
    {
        title: "GitHub",
        url: "https://github.com/johnridesabike",
        icon: <GitHubIcon />
    },
    {
        title: "LibraryThing",
        url: "https://www.librarything.com/profile/jbpjackson",
        icon: <LibraryThingIcon />
    },
    {
        title: "Challenge me to a game of chess",
        url: "https://lichess.org/@/Chessahoochee",
        icon: <ChessIcon />
    }
];

const Sidebar = () => (
    <aside
        id="secondary"
        className={classnames(styles.widgetArea, "has-ui-font")}
    >
        <section className={styles.widget}>
            <h4>About John</h4>
            <p>
                <img
                    className="avatar alignleft"
                    src={johnPic}
                    alt="Portrait of John"
                    scale="0"
                    width="150"
                    height="150"
                />
            </p>
            <p>
                I’m a public library staffer who is interested in digital
                library technologies, web development, and libraries of all
                types.
            </p>
            <p>
                This website is home to my blog, portfolio, and other
                projects I’ve managed.{" "}
                <Link to="/">Head to the home page</Link> if this is your
                first time here.
            </p>
        </section>
        {/* <section
            id="contextual_feed_widget-3"
            className="widget widget__main widget_contextual_feed">
            <h4 className="widgettitle">Subscribe via RSS</h4>
            <div className="text-before">
                <p>Plug this into your favorite feed reader:</p>
            </div>
            <ul>
                <li className="feed-link">
                    <a href="{{ metadata.feed.url }}">
                        <FeedIcon />
                        &nbsp;
                        Feed for all entries
                    </a>
                </li>
            </ul>
        </section> */}
        <section className={styles.widget}>
            <h4 >Connect with John</h4>
            <ul id="menu-social-menu" className="menu">
                {socialMenu.map((item) => (
                    <li key={item.url}>
                        <a href={item.url}>
                            {item.icon}&nbsp;{item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    </aside>
);

export default Sidebar;
