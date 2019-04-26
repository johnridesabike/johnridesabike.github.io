import {Link} from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Menu from "./menu";

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
            <Menu links={[
                {url: "/", title: "Home"},
                {url: "/resume/", title: "Résumé"}
            ]}/>
        </div>
        {/*
        {% include "partials/breadcrumbs.njk" %}
		<div class="entry-header has-ui-font">
        {% block entryHeader %}
            {% if thumbnail %}
            <figure class="featured-image featured-image__single full-bleed">
                <img
                src="{{ thumbnail }}" class="attachment-post-thumbnail size-post-thumbnail post-thumbnail__single wp-post-image"
                alt="{% if media[thumbnail] %}{{ media[thumbail].alt }} {% endif %}"/>
                {% if media[thumbnail] %}
                    <figcaption class="featured-image__caption">
                        {{ media[thumbnail].alt }}
                    </figcaption>
                {% endif %}
            </figure> <!--.featured-image .featured-image__single .full-bleed -->
            {% endif %}
            <div class="entry-header-wrap">
                <h1 class="entry-title has-body-font">
                    {{ title }}
                </h1>
                <div class="entry-meta entry-meta__single">
                    <div class="entry-meta-wrapper entry-meta-wrapper__single">
                        {% import "partials/entry-meta.njk" as entryMeta %}
                        {{ entryMeta.postedBy(author) }}
                        {{ entryMeta.postedOn(date) }}
                    </div><!-- .entry-meta-wrapper -->
                </div><!-- .entry-meta -->
            </div> <!-- .entry-header-wrap -->
        {% endblock %}
        </div><!-- .entry-header -->
        */}
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
