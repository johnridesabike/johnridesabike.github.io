import React from "react";

export const Excerpt = ({node}) => (
    <div>
        <h2>{node.frontmatter.title}</h2>
        <p>{node.excerpt}</p>
    </div>
);

export default Excerpt;