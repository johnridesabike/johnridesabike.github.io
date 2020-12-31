const { icons } = require("feather-icons");

module.exports = (env, { icon }, _children) => env.return(icons[icon].toSvg());
