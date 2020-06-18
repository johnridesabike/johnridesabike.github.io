[%graphql
  {|
query Videos {
  montageMp4: file(relativePath: {eq: "montage_web.mp4"}) {
    publicURL
  }
}
|};
  {inline: true}
];

let useQuery = () => Gatsby.useStaticQueryUnsafe(query)->parse;
