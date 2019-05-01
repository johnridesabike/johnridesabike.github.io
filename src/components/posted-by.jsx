import React from "react";
import {PersonIcon} from "./icons";

const PostedBy = ({author}) => (
    <span className="author byline">
        <PersonIcon /> {author}
    </span>
);

export default PostedBy;