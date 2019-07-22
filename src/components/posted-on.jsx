import React from "react";
import PropTypes from "prop-types";
import Icons from "./icons";

const PostedOn = ({date, ISODate, className}) => (
    <span className={className}>
        <time dateTime={ISODate}><Icons.Calendar /> Posted on {date}</time>
    </span>
);
PostedOn.propTypes = {
    date: PropTypes.string,
    ISODate: PropTypes.string,
    className: PropTypes.string
};

export default PostedOn;
