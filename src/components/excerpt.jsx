import React from "react";
import {Link} from "gatsby";
import {TagIcon, ChevronRightIcon, CalendarIcon} from "../components/icons";

export const Excerpt = ({node}) => (
    <article className="excerpt-entry post">
        {/*{% if page.data.thumbnail %} has-post-thumbnail{% endif %}*/}
        <header className="entry-header has-ui-font">
            <div className="tab-head">
                <TagIcon />
                &nbsp;
                {node.fields.category}
            </div>
            <h2 className="entry-title has-body-font">
                <a
                    href={node.frontmatter.slug}
                    rel="bookmark"
                    className="entry-title__link"
                >
                    {node.frontmatter.title}
                </a>
            </h2>
        </header>

        {/* {% if page.data.thumbnail %}
    <figure className="featured-image featured-image__archive full-bleed">
        <a href="{{ page.url }}" className="featured-image__link" aria-hidden="true" tabindex="-1">
            <img width="224" height="150"
            src="{{ page.data.thumbnail }}" className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
            alt="{% if media[page.data.thumbnail] %}{{ media[page.data.thumbail].alt }} {% endif %}"/>
        </a>
    </figure>
    {% endif %} */}

        <div className="entry-content">{node.excerpt}</div>
        <footer className="entry-footer has-ui-font">
            <div className="entry-meta">
                <span class="posted-on entry-meta__item">
                    <time
                        class="entry-date published updated"
                        datetime={node.frontmatter.ISODate}
                    >
                        <CalendarIcon /> Posted on {node.frontmatter.date}
                    </time>
                </span>
            </div>
            <div className="continue-reading">
                <Link
                    to={node.frontmatter.slug}
                    className="button-link__link button-open"
                    rel="bookmark"
                >
                    Open{" "}
                    <span className="screen-reader-text">
                        {node.frontmatter.title}
                    </span>
                    <ChevronRightIcon />
                </Link>
            </div>
        </footer>
    </article>
);

export default Excerpt;
