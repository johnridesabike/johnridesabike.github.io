import React from "react";
import {Link} from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import john2018 from "../images/john2018.jpg";
import {useAllPages} from "../hooks";
import Excerpt from "../components/excerpt";

function IndexPage() {
    let allPages = useAllPages();
    allPages = allPages.filter((p) => p.node.fields !== null);
    const woodworking = allPages.filter(
        (p) => p.node.fields.category === "woodworking"
    );
    const libraries = allPages.filter(
        (p) => p.node.fields.category === "libraries"
    );
    console.log(woodworking);
    return (
        <Layout>
            <SEO title="Home" keywords={["gatsby", "application", "react"]} />
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <div style={{maxWidth: "300px", marginBottom: "1.45rem"}}>
                <Image />
            </div>
            <Link to="/page-2/">Go to page 2</Link>
            <figure>
                <img
                    src={john2018}
                    alt="Portrait of John"
                    height="256"
                    width="256"
                />
                <figcaption className="has-large-font-size">
                    Hi, I'm John Jackson.
                </figcaption>
            </figure>
            {woodworking.map((edge) =>
                <Excerpt node={edge.node} key={edge.node.frontmatter.slug} />
            )}
            {libraries.map((edge) =>
                <Excerpt node={edge.node} key={edge.node.frontmatter.slug} />
            )}
        </Layout>
    );
}
export default IndexPage;
