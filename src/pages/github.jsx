import React from "react";
import {useStaticQuery, graphql} from "gatsby";
import remark from "remark";
import html from "remark-html";

export default function GitHub() {
    const {github} = useStaticQuery(graphql`
        {
            github {
                repository(owner: "johnridesabike", name: "chessahoochee") {
                    object(expression: "master:README.md") {
                        ... on GitHub_Blob {
                            text
                        }
                    }
                }
            }
        }
    `);
    // IDK how this is supposed to work.
    const output = remark().use(html).process(
        github.repository.object.text,
        // function (err, file) {
        //     if (err) {
        //         throw err;
        //     }
        //     return String(file);
        // }
    );
    console.log(output);
    return (
        <div></div>
    );
}