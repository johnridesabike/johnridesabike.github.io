import React from "react";
import Layout from "../components/layout";
import {useStaticQuery, graphql} from "gatsby";
import remark from "remark";
import html from "remark-html";

export default function GitHub() {
    const {github} = useStaticQuery(
        graphql`{
            github {
                repository(owner: "johnridesabike", name: "chessahoochee") {
                    name
                    description
                    homepageUrl
                    url
                    updatedAt
                    licenseInfo {
                        key
                    }
                    readme: object(expression: "master:README.md") {
                        ... on GitHub_Blob {
                            text
                        }
                    }
                }
            }
        }`
    );
    const repo = github.repository;
    const {contents} = remark().use(html).processSync(repo.readme.text);
    return (
        <Layout entryHeader={<h1>{repo.name}</h1>}>
            <div
                className="page-content"
                dangerouslySetInnerHTML={{__html: contents}}
            />
        </Layout>
    );
}
