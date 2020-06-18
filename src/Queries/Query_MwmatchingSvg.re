[%graphql
  {|
query MwmatchingSvg {
  file(relativePath: {eq: "mwmatching.svg"}) {
    publicURL
  }
}
|};
  {inline: true}
];

let useQuery = () => Gatsby.useStaticQueryUnsafe(query)->parse;
