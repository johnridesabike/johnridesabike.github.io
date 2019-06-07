import React from "react";
import Icons from "./icons";

const PostedBy = ({author}) => (
    <span className="author byline">
        <Icons.Person /> {author}
    </span>
);

export default PostedBy;
