[%%raw "import { graphql } from 'gatsby'"];

[%graphql
  {|
query Videos {
  montageMp4: file(relativePath: {eq: "montage_web.mp4"}) {
    publicURL
  }
  montageWebm: file(relativePath: {eq: "montage_web.webm"}) {
    publicURL
  }
}
|};
  {inline: true}
];

let useQuery = () => Gatsby.useStaticQueryUnsafe(query)->parse;
