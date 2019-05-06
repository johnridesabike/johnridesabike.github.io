import React from "react";
import classnames from "classnames";
import {CalendarIcon} from "./icons";

const PostedOn = ({date, ISODate, classes}) => (
    <span className={classnames(...classes)}>
        <time dateTime={ISODate}><CalendarIcon /> Posted on {date}</time>
    </span>
);

export default PostedOn;
