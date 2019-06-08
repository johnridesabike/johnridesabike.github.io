import {map, mergeAll, objOf} from "ramda";

// This assumes every long slug is `/directory/slug` format.
const getSlug = (longSlug) => longSlug.split("/")[2];
const edges2Dict = (edgesArr) => (
    mergeAll(
        map(
            (obj) => objOf(getSlug(obj.node.fields.slug), obj.node),
            edgesArr
        )
    )
);
export {edges2Dict};

const nodeFields = (node) => ({
    isWide: node.frontmatter.thumbnail !== null,
    slug: node.fields.slug,
    thumbnailURL: (node.frontmatter.thumbnail)
        ? node.frontmatter.thumbnail.publicURL
        : null,
    title: node.frontmatter.title
});
export {nodeFields};
