import React from "react";
import classnames from "classnames";
import Icons from "./icons";

const PostedOn = ({date, ISODate, classes}) => (
    <span className={classnames(...classes)}>
        <time dateTime={ISODate}><Icons.Calendar /> Posted on {date}</time>
    </span>
);

export default PostedOn;
