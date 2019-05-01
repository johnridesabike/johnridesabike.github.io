import React from "react";
import {CalendarIcon} from "./icons";

const PostedOn = ({date, ISODate}) => (
    <span className="posted-on entry-meta__item">
        <time
            className="entry-date published updated"
            dateTime={ISODate}
        >
            <CalendarIcon /> Posted on {date}
        </time>
    </span>
);

export default PostedOn;