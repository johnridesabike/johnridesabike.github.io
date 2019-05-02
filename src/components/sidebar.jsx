import React from "react";
import {Link} from "gatsby";
import johnPic from "../images/john2018.jpg";
import {
    ChessIcon,
    // FeedIcon,
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
    <aside id="secondary" className="widget-area has-ui-font">
        <section className="widget widget__main widget_text">
            <h4 className="widgettitle">About John</h4>
            <div className="textwidget">
                <p>
                    <img
                        className="wp-image-50 size-thumbnail avatar alignleft"
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
            </div>
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
        <section className="widget widget__main widget_nav_menu">
            <h4 className="widgettitle">Connect with John</h4>
            <div className="menu-social-menu-container">
                <ul id="menu-social-menu" className="menu">
                    {socialMenu.map((item) => (
                        <li
                            key={item.url}
                            // eslint-disable-next-line max-len
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-101"
                        >
                            <a href={item.url}>
                                {item.icon}&nbsp;{item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    </aside>
);

export default Sidebar;
