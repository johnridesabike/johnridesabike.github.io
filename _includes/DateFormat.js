const formatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "long",
});

module.exports = (env, { date }, _children) =>
  env.return(formatter.format(date));
