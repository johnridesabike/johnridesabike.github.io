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
    slug: node.fields.slug,
    thumbnail: node.frontmatter.thumbnail,
    title: node.frontmatter.title
});
export {nodeFields};
